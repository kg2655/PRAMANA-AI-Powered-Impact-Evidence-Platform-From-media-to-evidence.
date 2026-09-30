import { EvidenceItem } from '../types';
import { mockEvidenceItems } from '../data/mockData';

export interface InterpretedQuery {
  rawQuery: string;
  activity?: string;
  location?: string;
  timeframe?: string;
  mediaType?: string;
  detectedKeywords: string[];
}

export interface SearchResult {
  item: EvidenceItem;
  matchScore: number;
  matchReasons: string[];
}

export const sampleQueries = [
  'Show cleanup activities around Delhi from March',
  'Show plantation activities in Uttarakhand',
  'Find before and after evidence from Yamuna Restoration',
  'Show videos containing community participation',
  'Find infrastructure work documented in June'
];

export const searchService = {
  interpretQuery(query: string): InterpretedQuery {
    const q = query.toLowerCase().trim();

    let activity: string | undefined;
    let location: string | undefined;
    let timeframe: string | undefined;
    let mediaType = 'Images + Videos';
    const keywords: string[] = [];

    // Detect Activity
    if (q.includes('cleanup') || q.includes('waste') || q.includes('clean') || q.includes('debris')) {
      activity = 'Community cleanup';
      keywords.push('waste cleanup', 'debris collection');
    } else if (q.includes('plant') || q.includes('tree') || q.includes('forest') || q.includes('sapling')) {
      activity = 'Plantation & afforestation';
      keywords.push('riparian planting', 'vegetative cover');
    } else if (q.includes('solar') || q.includes('pump') || q.includes('energy')) {
      activity = 'Solar & renewable energy';
      keywords.push('photovoltaic', 'microgrid');
    } else if (q.includes('water') || q.includes('filter') || q.includes('testing')) {
      activity = 'Water safety & filtration';
      keywords.push('turbidity', 'potable access');
    } else if (q.includes('infrastructure') || q.includes('construction') || q.includes('terrace')) {
      activity = 'Civil & soil infrastructure';
      keywords.push('embankment terracing');
    } else if (q.includes('community') || q.includes('volunteer') || q.includes('workshop')) {
      activity = 'Community engagement';
      keywords.push('participatory monitoring');
    }

    // Detect Location
    if (q.includes('delhi')) {
      location = 'Delhi';
      keywords.push('Yamuna basin', 'Wazirabad');
    } else if (q.includes('uttarakhand') || q.includes('himalaya') || q.includes('kumaon')) {
      location = 'Uttarakhand';
      keywords.push('terraced hills', 'sub-Himalayan');
    } else if (q.includes('rajasthan') || q.includes('barmer')) {
      location = 'Rajasthan';
      keywords.push('arid microgrid');
    } else if (q.includes('uttar pradesh') || q.includes('ganga')) {
      location = 'Uttar Pradesh';
      keywords.push('rural riverbanks');
    } else if (q.includes('noida') || q.includes('ghaziabad')) {
      location = 'Delhi NCR';
      keywords.push('urban recovery corridor');
    }

    // Detect Timeframe
    if (q.includes('march') || q.includes('mar')) {
      timeframe = 'March 2026';
    } else if (q.includes('january') || q.includes('jan')) {
      timeframe = 'January 2026';
    } else if (q.includes('february') || q.includes('feb')) {
      timeframe = 'February 2026';
    } else if (q.includes('april') || q.includes('apr')) {
      timeframe = 'April 2026';
    } else if (q.includes('may')) {
      timeframe = 'May 2026';
    } else if (q.includes('june') || q.includes('jun')) {
      timeframe = 'June 2026';
    } else if (q.includes('july') || q.includes('jul')) {
      timeframe = 'July 2026';
    }

    // Detect Media type
    if (q.includes('video') || q.includes('footage') || q.includes('clip')) {
      mediaType = 'Videos';
    } else if (q.includes('photo') || q.includes('image') || q.includes('picture')) {
      mediaType = 'Images';
    }

    // Fallback if broad
    if (!activity && !location && !timeframe) {
      keywords.push('general environmental evidence');
    }

    return {
      rawQuery: query,
      activity: activity || 'All field activities',
      location: location || 'All monitored field locations',
      timeframe: timeframe || 'All active project periods',
      mediaType,
      detectedKeywords: keywords
    };
  },

  searchEvidence(query: string): SearchResult[] {
    if (!query.trim()) {
      return mockEvidenceItems.map((item) => ({
        item,
        matchScore: 90,
        matchReasons: ['Recent verified field record']
      }));
    }

    const interpreted = this.interpretQuery(query);
    const qLower = query.toLowerCase();
    const queryTokens = qLower.split(/\s+/).filter((t) => t.length > 2);

    const scored: SearchResult[] = [];

    for (const item of mockEvidenceItems) {
      let score = 0;
      const reasons: string[] = [];

      // Check location match
      if (interpreted.location && interpreted.location !== 'All monitored field locations') {
        if (
          item.location.toLowerCase().includes(interpreted.location.toLowerCase()) ||
          item.projectTitle.toLowerCase().includes(interpreted.location.toLowerCase())
        ) {
          score += 35;
          reasons.push(`Location matched: ${item.location}`);
        }
      }

      // Check timeframe match
      if (interpreted.timeframe && interpreted.timeframe !== 'All active project periods') {
        const monthPrefix = interpreted.timeframe.slice(0, 3).toLowerCase();
        if (item.date.toLowerCase().includes(monthPrefix)) {
          score += 30;
          reasons.push(`Temporal match: ${item.date}`);
        }
      }

      // Check activity match
      if (interpreted.activity && interpreted.activity !== 'All field activities') {
        const actLower = interpreted.activity.toLowerCase();
        if (
          item.activity.toLowerCase().includes('cleanup') && actLower.includes('cleanup') ||
          item.activity.toLowerCase().includes('plant') && actLower.includes('plant') ||
          item.activity.toLowerCase().includes('solar') && actLower.includes('solar') ||
          item.activity.toLowerCase().includes('water') && actLower.includes('water') ||
          item.activity.toLowerCase().includes('waste') && actLower.includes('waste')
        ) {
          score += 35;
          reasons.push(`Activity matched: ${item.activity}`);
        }
      }

      // Check token hits in tags, description, title
      let tokenHits = 0;
      for (const token of queryTokens) {
        if (
          item.tags.some((t) => t.toLowerCase().includes(token)) ||
          item.title.toLowerCase().includes(token) ||
          item.description.toLowerCase().includes(token) ||
          item.aiDescription.toLowerCase().includes(token)
        ) {
          tokenHits += 1;
        }
      }

      if (tokenHits > 0) {
        score += Math.min(30, tokenHits * 10);
        reasons.push(`Matched ${tokenHits} semantic signal(s)`);
      }

      // Before/After query matching
      if (qLower.includes('before') || qLower.includes('after') || qLower.includes('compare')) {
        if (item.beforeAfterPairId) {
          score += 25;
          reasons.push('Linked to before/after comparison pair');
        }
      }

      if (score > 15) {
        scored.push({
          item,
          matchScore: Math.min(99, 50 + score),
          matchReasons: reasons.length ? reasons : ['General semantic association']
        });
      }
    }

    // Sort by match score descending
    scored.sort((a, b) => b.matchScore - a.matchScore);

    // If query was very specific and yielded 0 results, return smart closest matches
    if (scored.length === 0) {
      return mockEvidenceItems.slice(0, 4).map((item) => ({
        item,
        matchScore: 65,
        matchReasons: ['Related contextual field documentation']
      }));
    }

    return scored;
  }
};
