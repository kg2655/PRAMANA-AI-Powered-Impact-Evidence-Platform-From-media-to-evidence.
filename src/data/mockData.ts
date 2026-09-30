import { Project, EvidenceItem, JournalEntry, ComparisonPair } from '../types';

export const mockProjects: Project[] = [
  {
    id: 'yamuna-restoration',
    title: 'Yamuna Restoration',
    location: 'Delhi',
    state: 'Delhi NCR',
    country: 'India',
    period: 'Jan — Jun 2026',
    category: 'restoration',
    accentColor: '#527A5A',
    accentBg: '#EEF3EF',
    assetCount: 247,
    fieldVisits: 8,
    activityTypes: 3,
    locationsCount: 4,
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    summary: 'Multi-season community riverbank ecological recovery and non-biodegradable waste reduction initiative across four critical stretches of the Yamuna basin.',
    objectives: [
      'Document baseline shoreline pollution and seasonal runoff',
      'Mobilize community cleanup and segregation interventions',
      'Track vegetative succession of native riverbank wetland grasses',
      'Establish traceable open-evidence repository for municipal stakeholders'
    ],
    coordinatingPartner: 'Delhi Wetland Conservation Trust & Community Volunteers'
  },
  {
    id: 'forest-recovery',
    title: 'Community Forest Recovery',
    location: 'Uttarakhand',
    state: 'Uttarakhand',
    country: 'India',
    period: 'Feb — Jul 2026',
    category: 'restoration',
    accentColor: '#527A5A',
    accentBg: '#EEF3EF',
    assetCount: 186,
    fieldVisits: 6,
    activityTypes: 4,
    locationsCount: 3,
    coverImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    summary: 'Sub-Himalayan terraced reforestation targeting degraded slopes prone to monsoon soil slippage through community nursery cultivation.',
    objectives: [
      'Record high-altitude tree survival rates post-plantation',
      'Trace terraced bunding and water retention channels',
      'Empower local Van Panchayat women monitoring groups'
    ],
    coordinatingPartner: 'Kumaon Ecological Research Collective'
  },
  {
    id: 'solar-village',
    title: 'Solar Village Initiative',
    location: 'Rajasthan',
    state: 'Rajasthan',
    country: 'India',
    period: 'Jan — Aug 2026',
    category: 'energy',
    accentColor: '#B38A4A',
    accentBg: '#F7F2E8',
    assetCount: 312,
    fieldVisits: 11,
    activityTypes: 5,
    locationsCount: 6,
    coverImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    summary: 'Decentralized rooftop solar microgrids and solar water pumps across arid rural hamlets in Barmer and Jodhpur districts.',
    objectives: [
      'Audit microgrid installation quality and rooftop integrity',
      'Verify daytime water pump delivery at community cisterns',
      'Record local technician apprenticeships and maintenance routines'
    ],
    coordinatingPartner: 'Thar Clean Energy Foundation'
  },
  {
    id: 'clean-water',
    title: 'Clean Water Access Program',
    location: 'Uttar Pradesh',
    state: 'Uttar Pradesh',
    country: 'India',
    period: 'Mar — Sep 2026',
    category: 'marine',
    accentColor: '#4F7C86',
    accentBg: '#EDF3F5',
    assetCount: 194,
    fieldVisits: 7,
    activityTypes: 3,
    locationsCount: 5,
    coverImage: 'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=1200&q=80',
    summary: 'Gravity-fed filtration units and community handpump rehabilitation serving rural riverside settlements.',
    objectives: [
      'Document filtration chamber sediment levels over quarterly intervals',
      'Verify water safety test kit documentation on-site',
      'Log community water management committee meetings'
    ],
    coordinatingPartner: 'Ganga Basin Rural Health Mission'
  },
  {
    id: 'urban-waste',
    title: 'Urban Waste Recovery',
    location: 'Delhi NCR',
    state: 'Delhi NCR',
    country: 'India',
    period: 'Jan — Jun 2026',
    category: 'infrastructure',
    accentColor: '#A96752',
    accentBg: '#F8EFEA',
    assetCount: 345,
    fieldVisits: 14,
    activityTypes: 4,
    locationsCount: 8,
    coverImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
    summary: 'Decentralized neighborhood composting facilities and material recovery centers managed in partnership with informal waste workers.',
    objectives: [
      'Catalogue dry segregated recyclable bales prior to transport',
      'Audit safety equipment and protective gear adoption',
      'Record municipal transfer point load volumes'
    ],
    coordinatingPartner: 'Shramik Waste Workers Association'
  }
];

export const mockEvidenceItems: EvidenceItem[] = [
  {
    id: 'ev-01',
    assetId: 'cld_impact_2026_1032',
    title: 'Community cleanup along Yamuna riverbank',
    projectId: 'yamuna-restoration',
    projectTitle: 'Yamuna Restoration',
    location: 'Delhi',
    coordinates: '28.6692° N, 77.2315° E',
    date: '12 Mar 2026',
    timestamp: '12 Mar 2026, 10:42 AM',
    mediaType: 'image',
    activity: 'Community Cleanup',
    description: 'Volunteers and local residents gathering along the eastern shoreline with heavy-duty burlap sacks for non-biodegradable debris collection.',
    aiDescription: 'Volunteers collecting waste near a riverbank during a community cleanup activity. Visible protective gloves and segregation bags in natural morning lighting.',
    tags: ['cleanup', 'volunteers', 'river', 'waste collection', 'community', 'shoreline'],
    confidence: {
      activityDetection: 94,
      objectDetection: 97,
      sceneContext: 91
    },
    evidenceType: 'Intervention',
    relatedAssetIds: ['ev-02', 'ev-03', 'ev-07', 'ev-11'],
    beforeAfterPairId: 'comp-yamuna-01',
    imageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/delhi/yamuna_cleanup_1032',
      version: 'v1710237120',
      format: 'jpg',
      bytes: 3847291,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '12 Mar 2026, 10:42 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest with full EXIF geolocation and sensor metadata', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive AVIF/WebP delivery with intelligent perceptual compression', urlParam: 'f_auto,q_auto,w_1200' },
        { name: 'Thumbnail', description: 'Crop centered on focal field subject for fast grid rendering', urlParam: 'c_fill,g_auto,w_400,h_300' },
        { name: 'Report Preview', description: 'Print-grade 300DPI sharpened export for institutional PDF dossiers', urlParam: 'f_jpg,q_90,w_1600' }
      ]
    },
    visualObservations: [
      'Community cleanup activity documented across multiple field visits',
      'Organized waste collection points established at 50-meter intervals',
      'Active participation of both youth volunteers and elder community members'
    ],
    fieldNotes: 'Field visit led by Team Alpha. 47 distinct collection sacks assembled before midday municipal pickup.'
  },
  {
    id: 'ev-02',
    assetId: 'cld_impact_2026_1011',
    title: 'Baseline shoreline documentation at Wazirabad section',
    projectId: 'yamuna-restoration',
    projectTitle: 'Yamuna Restoration',
    location: 'Delhi',
    coordinates: '28.7118° N, 77.2289° E',
    date: '12 Jan 2026',
    timestamp: '12 Jan 2026, 08:15 AM',
    mediaType: 'image',
    activity: 'Baseline Assessment',
    description: 'Initial site survey recording high density of plastic packaging and untreated runoff accumulation along the winter mudflats.',
    aiDescription: 'Degraded riverbank with dense plastic debris and sparse dry scrub. High density of surface waste across the floodplain embankment.',
    tags: ['baseline', 'debris', 'riverbank', 'audit', 'plastic', 'winter'],
    confidence: {
      activityDetection: 91,
      objectDetection: 95,
      sceneContext: 89
    },
    evidenceType: 'Baseline',
    relatedAssetIds: ['ev-01', 'ev-04'],
    beforeAfterPairId: 'comp-yamuna-01',
    imageUrl: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/delhi/yamuna_baseline_1011',
      version: 'v1705047300',
      format: 'jpg',
      bytes: 4120894,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '12 Jan 2026, 08:15 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest with full EXIF geolocation and sensor metadata', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive AVIF/WebP delivery with intelligent perceptual compression', urlParam: 'f_auto,q_auto,w_1200' },
        { name: 'Thumbnail', description: 'Crop centered on focal field subject for fast grid rendering', urlParam: 'c_fill,g_auto,w_400,h_300' },
        { name: 'Report Preview', description: 'Print-grade export for institutional documentation', urlParam: 'f_jpg,q_90,w_1600' }
      ]
    },
    visualObservations: [
      'Significant surface plastic debris visible over a 200m shoreline radius',
      'Absence of established perennial vegetative cover on the embankment',
      'Vehicle ruts and unauthorized dumping tracks documented'
    ],
    fieldNotes: 'Baseline imagery logged before launch of Phase 1 community interventions.'
  },
  {
    id: 'ev-03',
    assetId: 'cld_impact_2026_1048',
    title: 'Riparian buffer plantation and root stabilization',
    projectId: 'yamuna-restoration',
    projectTitle: 'Yamuna Restoration',
    location: 'Delhi',
    coordinates: '28.6740° N, 77.2340° E',
    date: '04 Apr 2026',
    timestamp: '04 Apr 2026, 07:30 AM',
    mediaType: 'image',
    activity: 'Plantation Activity',
    description: 'Field workers planting deep-rooted vetiver grass slips and native riparian saplings along newly leveled earth terraces.',
    aiDescription: 'Field team inserting vegetative saplings along riverside embankment terraces. Organized planting grid visible across moist sediment.',
    tags: ['plantation', 'saplings', 'restoration', 'vegetation', 'soil', 'roots'],
    confidence: {
      activityDetection: 96,
      objectDetection: 93,
      sceneContext: 94
    },
    evidenceType: 'Intervention',
    relatedAssetIds: ['ev-01', 'ev-04', 'ev-05'],
    beforeAfterPairId: 'comp-yamuna-01',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/delhi/yamuna_plantation_1048',
      version: 'v1712215800',
      format: 'jpg',
      bytes: 3512903,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '04 Apr 2026, 07:30 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest with full EXIF geolocation and sensor metadata', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive AVIF/WebP delivery with intelligent perceptual compression', urlParam: 'f_auto,q_auto,w_1200' },
        { name: 'Thumbnail', description: 'Crop centered on focal field subject for fast grid rendering', urlParam: 'c_fill,g_auto,w_400,h_300' }
      ]
    },
    visualObservations: [
      'Plantation grid laid at 0.75m intervals to reinforce soil compaction',
      'Biodegradable coir mats deployed to mitigate early rain erosion',
      'Visible irrigation trenches connected to settling basins'
    ],
    fieldNotes: 'Phase 2 planting day. 850 vetiver slips planted along 180 meters.'
  },
  {
    id: 'ev-04',
    assetId: 'cld_impact_2026_1089',
    title: 'Pre-monsoon follow-up survey of restored riverbank',
    projectId: 'yamuna-restoration',
    projectTitle: 'Yamuna Restoration',
    location: 'Delhi',
    coordinates: '28.7118° N, 77.2289° E',
    date: '18 Jun 2026',
    timestamp: '18 Jun 2026, 09:10 AM',
    mediaType: 'image',
    activity: 'Follow-up Monitoring',
    description: 'Six-month evaluation showing stabilized green embankment with flourishing vetiver grass and sustained absence of solid waste.',
    aiDescription: 'Vegetated river shoreline with established green grass cover. Substantial decrease in visible shoreline debris compared to January baseline.',
    tags: ['vegetation', 'monitoring', 'follow-up', 'restoration', 'clean', 'riverbank'],
    confidence: {
      activityDetection: 95,
      objectDetection: 98,
      sceneContext: 93
    },
    evidenceType: 'Follow-up',
    relatedAssetIds: ['ev-01', 'ev-02', 'ev-03'],
    beforeAfterPairId: 'comp-yamuna-01',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/delhi/yamuna_followup_1089',
      version: 'v1718698200',
      format: 'jpg',
      bytes: 4390124,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '18 Jun 2026, 09:10 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest with full EXIF geolocation and sensor metadata', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive AVIF/WebP delivery with intelligent perceptual compression', urlParam: 'f_auto,q_auto,w_1200' },
        { name: 'Thumbnail', description: 'Crop centered on focal field subject for fast grid rendering', urlParam: 'c_fill,g_auto,w_400,h_300' }
      ]
    },
    visualObservations: [
      'Visible vegetation increase detected across comparison perimeter',
      'Solid waste accumulation remains negligible since community patrol formation',
      'Soil structural cohesion visibly improved along water contact line'
    ],
    fieldNotes: 'Matched GPS benchmark against 12 Jan baseline frame.'
  },
  {
    id: 'ev-05',
    assetId: 'cld_impact_2026_1052',
    title: 'Community briefing on biodegradable waste segregation',
    projectId: 'yamuna-restoration',
    projectTitle: 'Yamuna Restoration',
    location: 'Delhi',
    coordinates: '28.6710° N, 77.2330° E',
    date: '28 Mar 2026',
    timestamp: '28 Mar 2026, 04:15 PM',
    mediaType: 'image',
    activity: 'Community Workshop',
    description: 'Field coordinator leading an open-air workshop for neighborhood shopkeepers and fishermen regarding waste disposal bylaws.',
    aiDescription: 'Group of community members gathered around an illustrative instructional banner near an urban water body.',
    tags: ['community', 'briefing', 'workshop', 'education', 'yamuna'],
    confidence: {
      activityDetection: 92,
      objectDetection: 91,
      sceneContext: 90
    },
    evidenceType: 'Community',
    relatedAssetIds: ['ev-01', 'ev-03'],
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/delhi/yamuna_community_1052',
      version: 'v1711620900',
      format: 'jpg',
      bytes: 3109402,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '28 Mar 2026, 04:15 PM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Active community engagement documented with over 35 neighborhood attendees',
      'Distribution of localized Hindi-language waste guidance leaflets'
    ]
  },
  {
    id: 'ev-06',
    assetId: 'cld_impact_2026_1067',
    title: 'Water clarity testing at Nigam Bodh Ghat monitoring station',
    projectId: 'yamuna-restoration',
    projectTitle: 'Yamuna Restoration',
    location: 'Delhi',
    coordinates: '28.6655° N, 77.2356° E',
    date: '15 May 2026',
    timestamp: '15 May 2026, 06:45 AM',
    mediaType: 'image',
    activity: 'Water Quality Audit',
    description: 'Field researcher taking water sample vials using a standardized Secchi disc apparatus to record seasonal visual turbidity.',
    aiDescription: 'Field technician in safety vest collecting water sample into glass container from a stationary river pier.',
    tags: ['water', 'audit', 'sample', 'secchi', 'monitoring', 'delhi'],
    confidence: {
      activityDetection: 97,
      objectDetection: 94,
      sceneContext: 92
    },
    evidenceType: 'Monitoring',
    relatedAssetIds: ['ev-04', 'ev-07'],
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/delhi/yamuna_sampling_1067',
      version: 'v1715733900',
      format: 'jpg',
      bytes: 2894103,
      width: 3840,
      height: 2560,
      resourceType: 'image',
      uploadedAt: '15 May 2026, 06:45 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Visual turbidity shows light transmission improvements compared to pre-intervention baseline',
      'No industrial foam rafts detected during morning monitoring window'
    ]
  },
  {
    id: 'ev-07',
    assetId: 'cld_impact_2026_1074',
    title: 'Waste segregation & weighing logs at temporary marshaling yard',
    projectId: 'yamuna-restoration',
    projectTitle: 'Yamuna Restoration',
    location: 'Noida',
    coordinates: '28.5355° N, 77.3910° E',
    date: '22 Mar 2026',
    timestamp: '22 Mar 2026, 01:20 PM',
    mediaType: 'image',
    activity: 'Waste Segregation',
    description: 'Separation of recovered plastics into LDPE, HDPE, and non-recyclable multi-layered packaging under shaded sorting canopies.',
    aiDescription: 'Organized sorting area with plastic containers, burlap sacks, and volunteers weighing collected materials with a hanging scale.',
    tags: ['sorting', 'plastic', 'segregation', 'recycling', 'cleanup', 'noida'],
    confidence: {
      activityDetection: 95,
      objectDetection: 96,
      sceneContext: 93
    },
    evidenceType: 'Intervention',
    relatedAssetIds: ['ev-01', 'ev-02'],
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/noida/sorting_yard_1074',
      version: 'v1711106400',
      format: 'jpg',
      bytes: 3410294,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '22 Mar 2026, 01:20 PM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'High-volume segregation protocol maintained by field team',
      'Over 22 tagged bulk sacks recorded ready for authorized recyclers'
    ]
  },
  {
    id: 'ev-08',
    assetId: 'cld_impact_2026_2014',
    title: 'Himalayan terraced nursery preparation',
    projectId: 'forest-recovery',
    projectTitle: 'Community Forest Recovery',
    location: 'Uttarakhand',
    coordinates: '30.1450° N, 79.2210° E',
    date: '16 Feb 2026',
    timestamp: '16 Feb 2026, 11:30 AM',
    mediaType: 'image',
    activity: 'Nursery Cultivation',
    description: 'Local women forest stewards setting up organic compost seed beds for indigenous oak and rhododendron seedlings.',
    aiDescription: 'Agricultural workers tending to raised nursery beds in a mountainous valley. Terraced landscape with mist in background.',
    tags: ['forest', 'nursery', 'seedlings', 'uttarakhand', 'mountains', 'community'],
    confidence: {
      activityDetection: 96,
      objectDetection: 94,
      sceneContext: 95
    },
    evidenceType: 'Intervention',
    relatedAssetIds: ['ev-09', 'ev-10'],
    beforeAfterPairId: 'comp-forest-01',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/uttarakhand/forest_nursery_2014',
      version: 'v1708079400',
      format: 'jpg',
      bytes: 4210984,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '16 Feb 2026, 11:30 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Terraced soil beds prepared with indigenous pine needle mulching',
      'Over 2,400 seed germination envelopes catalogued'
    ]
  },
  {
    id: 'ev-09',
    assetId: 'cld_impact_2026_2055',
    title: 'Slope planting along degraded landslide zone',
    projectId: 'forest-recovery',
    projectTitle: 'Community Forest Recovery',
    location: 'Uttarakhand',
    coordinates: '30.1620° N, 79.2450° E',
    date: '12 May 2026',
    timestamp: '12 May 2026, 08:45 AM',
    mediaType: 'image',
    activity: 'Plantation Activity',
    description: 'Community volunteers planting deep-rooted native alder saplings across an eroded slope above the village watershed.',
    aiDescription: 'Volunteers and forestry staff holding saplings on steep terraced hillside. Freshly dug planting pits visible along contour lines.',
    tags: ['plantation', 'trees', 'erosion', 'uttarakhand', 'slope', 'forestry'],
    confidence: {
      activityDetection: 94,
      objectDetection: 95,
      sceneContext: 92
    },
    evidenceType: 'Intervention',
    relatedAssetIds: ['ev-08', 'ev-10'],
    beforeAfterPairId: 'comp-forest-01',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/uttarakhand/slope_plantation_2055',
      version: 'v1715501100',
      format: 'jpg',
      bytes: 3982012,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '12 May 2026, 08:45 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Contour planting applied along natural hydraulic gradient',
      'Sapling protective bamboo stakes secured against grazing livestock'
    ]
  },
  {
    id: 'ev-10',
    assetId: 'cld_impact_2026_2088',
    title: 'Canopy regeneration audit after summer rains',
    projectId: 'forest-recovery',
    projectTitle: 'Community Forest Recovery',
    location: 'Uttarakhand',
    coordinates: '30.1620° N, 79.2450° E',
    date: '20 Jul 2026',
    timestamp: '20 Jul 2026, 10:15 AM',
    mediaType: 'image',
    activity: 'Follow-up Monitoring',
    description: 'Post-monsoon survey showing robust shoot establishment across the replanted terrace contours.',
    aiDescription: 'Lush green mountain slope showing dense foliage growth and healthy saplings established along contour ridges.',
    tags: ['canopy', 'monitoring', 'greenery', 'trees', 'uttarakhand', 'recovery'],
    confidence: {
      activityDetection: 97,
      objectDetection: 96,
      sceneContext: 94
    },
    evidenceType: 'Follow-up',
    relatedAssetIds: ['ev-08', 'ev-09'],
    beforeAfterPairId: 'comp-forest-01',
    imageUrl: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/uttarakhand/canopy_audit_2088',
      version: 'v1721466900',
      format: 'jpg',
      bytes: 4510294,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '20 Jul 2026, 10:15 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Visible vegetation increase detected across replanted slope acreage',
      'Zero landslide fissures observed along stabilized retaining bunds'
    ]
  },
  {
    id: 'ev-11',
    assetId: 'cld_impact_2026_3012',
    title: 'Rooftop photovoltaic installation in Barmer district',
    projectId: 'solar-village',
    projectTitle: 'Solar Village Initiative',
    location: 'Rajasthan',
    coordinates: '25.7532° N, 71.3964° E',
    date: '14 Feb 2026',
    timestamp: '14 Feb 2026, 02:40 PM',
    mediaType: 'image',
    activity: 'Solar Installation',
    description: 'Technicians mounting monocrystalline solar panels on reinforced sandstone residential rooftops.',
    aiDescription: 'Field engineers installing photovoltaic modules on flat village rooftop under clear desert sky. Toolkits and mounting brackets visible.',
    tags: ['solar', 'energy', 'photovoltaic', 'rajasthan', 'infrastructure', 'clean energy'],
    confidence: {
      activityDetection: 98,
      objectDetection: 97,
      sceneContext: 95
    },
    evidenceType: 'Intervention',
    relatedAssetIds: ['ev-12', 'ev-13'],
    beforeAfterPairId: 'comp-solar-01',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/rajasthan/solar_mount_3012',
      version: 'v1707900000',
      format: 'jpg',
      bytes: 3765102,
      width: 4000,
      height: 3000,
      resourceType: 'image',
      uploadedAt: '14 Feb 2026, 02:40 PM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Standardized corrosion-resistant aluminum rails anchored to masonry',
      'Inverter wiring encased in UV-rated conduit to withstand desert heat'
    ]
  },
  {
    id: 'ev-12',
    assetId: 'cld_impact_2026_3045',
    title: 'Solar pump commissioning at village communal well',
    projectId: 'solar-village',
    projectTitle: 'Solar Village Initiative',
    location: 'Rajasthan',
    coordinates: '25.7610° N, 71.4120° E',
    date: '24 Apr 2026',
    timestamp: '24 Apr 2026, 11:15 AM',
    mediaType: 'image',
    activity: 'Commissioning',
    description: 'Testing 5HP solar submersible pump delivering groundwater directly to community distribution header.',
    aiDescription: 'Fresh water flowing from a steel pipe into an open stone cistern. Solar panel array positioned adjacent to the wellhead.',
    tags: ['solar', 'water pump', 'well', 'agriculture', 'rajasthan', 'community'],
    confidence: {
      activityDetection: 96,
      objectDetection: 95,
      sceneContext: 94
    },
    evidenceType: 'Intervention',
    relatedAssetIds: ['ev-11', 'ev-13'],
    imageUrl: 'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/rajasthan/solar_pump_3045',
      version: 'v1713939300',
      format: 'jpg',
      bytes: 3891045,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '24 Apr 2026, 11:15 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Continuous daytime pump operation verified with zero diesel generator reliance',
      'Water pressure verified at 3.2 bar along community delivery spur'
    ]
  },
  {
    id: 'ev-13',
    assetId: 'cld_impact_2026_3078',
    title: 'Local youth apprentice inverter maintenance training',
    projectId: 'solar-village',
    projectTitle: 'Solar Village Initiative',
    location: 'Rajasthan',
    coordinates: '25.7532° N, 71.3964° E',
    date: '10 Jun 2026',
    timestamp: '10 Jun 2026, 03:00 PM',
    mediaType: 'image',
    activity: 'Capacity Building',
    description: 'Field engineer demonstrating multimeter diagnostics and breaker replacement for village youth maintenance committee.',
    aiDescription: 'Instructor demonstrating electrical test meter on an open control panel to four young villagers holding diagnostic manuals.',
    tags: ['training', 'youth', 'solar', 'maintenance', 'capacity', 'rajasthan'],
    confidence: {
      activityDetection: 93,
      objectDetection: 95,
      sceneContext: 91
    },
    evidenceType: 'Community',
    relatedAssetIds: ['ev-11', 'ev-12'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/rajasthan/training_3078',
      version: 'v1718002800',
      format: 'jpg',
      bytes: 3120934,
      width: 3840,
      height: 2560,
      resourceType: 'image',
      uploadedAt: '10 Jun 2026, 03:00 PM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Hands-on technical verification completed for four village youth apprentices',
      'Emergency shut-off drills verified according to standard protocol'
    ]
  },
  {
    id: 'ev-14',
    assetId: 'cld_impact_2026_4021',
    title: 'Gravity sand filter installation at village school',
    projectId: 'clean-water',
    projectTitle: 'Clean Water Access Program',
    location: 'Uttar Pradesh',
    coordinates: '26.8467° N, 80.9462° E',
    date: '18 Mar 2026',
    timestamp: '18 Mar 2026, 09:30 AM',
    mediaType: 'image',
    activity: 'Filtration Setup',
    description: 'Constructing multi-tier bio-sand filter with graded gravel, coarse sand, and activated charcoal chambers.',
    aiDescription: 'Masonry water filtration chamber undergoing construction with layered sand filters and PVC outlet conduits.',
    tags: ['water', 'filter', 'school', 'clean water', 'sanitation', 'uttar pradesh'],
    confidence: {
      activityDetection: 95,
      objectDetection: 94,
      sceneContext: 92
    },
    evidenceType: 'Intervention',
    relatedAssetIds: ['ev-15'],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/up/sand_filter_4021',
      version: 'v1710747000',
      format: 'jpg',
      bytes: 3450912,
      width: 4000,
      height: 3000,
      resourceType: 'image',
      uploadedAt: '18 Mar 2026, 09:30 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Filter chambers sealed with food-grade epoxy sealant',
      'Dual tap manifold installed at child-accessible height'
    ]
  },
  {
    id: 'ev-15',
    assetId: 'cld_impact_2026_4059',
    title: 'Potable water verification at community handpump',
    projectId: 'clean-water',
    projectTitle: 'Clean Water Access Program',
    location: 'Uttar Pradesh',
    coordinates: '26.8520° N, 80.9510° E',
    date: '28 Jun 2026',
    timestamp: '28 Jun 2026, 11:00 AM',
    mediaType: 'image',
    activity: 'Water Quality Audit',
    description: 'Field health worker conducting rapid chemical and biological indicator strip testing at community discharge outlet.',
    aiDescription: 'Health worker testing water sample with test vial and colorimetric chart in front of a community handpump.',
    tags: ['testing', 'potable', 'water audit', 'handpump', 'health', 'uttar pradesh'],
    confidence: {
      activityDetection: 97,
      objectDetection: 96,
      sceneContext: 93
    },
    evidenceType: 'Monitoring',
    relatedAssetIds: ['ev-14'],
    imageUrl: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/up/water_test_4059',
      version: 'v1719558000',
      format: 'jpg',
      bytes: 2980124,
      width: 3840,
      height: 2560,
      resourceType: 'image',
      uploadedAt: '28 Jun 2026, 11:00 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Chemical test indicator confirms parameter compliance within drinking thresholds',
      'Zero visible sediment suspended in treated output stream'
    ]
  },
  {
    id: 'ev-16',
    assetId: 'cld_impact_2026_5019',
    title: 'Decentralized composting bed maintenance in Okhla',
    projectId: 'urban-waste',
    projectTitle: 'Urban Waste Recovery',
    location: 'Delhi',
    coordinates: '28.5300° N, 77.2700° E',
    date: '14 Feb 2026',
    timestamp: '14 Feb 2026, 09:40 AM',
    mediaType: 'image',
    activity: 'Organic Composting',
    description: 'Aerobic windrow composting turned with moisture sensors to accelerate organic degradation from residential fruit markets.',
    aiDescription: 'Workers turning dark organic compost in long ventilated rows under agricultural shade netting.',
    tags: ['composting', 'organic', 'waste', 'soil', 'delhi', 'urban'],
    confidence: {
      activityDetection: 96,
      objectDetection: 94,
      sceneContext: 92
    },
    evidenceType: 'Intervention',
    relatedAssetIds: ['ev-17'],
    imageUrl: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/delhi/compost_bed_5019',
      version: 'v1707896400',
      format: 'jpg',
      bytes: 3670921,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '14 Feb 2026, 09:40 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Core pile temperature logged at 58°C, confirming active aerobic pathogen reduction',
      'Odor management bio-filters operating nominally'
    ]
  },
  {
    id: 'ev-17',
    assetId: 'cld_impact_2026_5062',
    title: 'Baled PET plastic audit before transfer to recycling plant',
    projectId: 'urban-waste',
    projectTitle: 'Urban Waste Recovery',
    location: 'Ghaziabad',
    coordinates: '28.6692° N, 77.4538° E',
    date: '25 May 2026',
    timestamp: '25 May 2026, 04:10 PM',
    mediaType: 'image',
    activity: 'Material Recovery',
    description: 'Hydraulic compressed bales of clear PET bottles labeled with batch QR codes and origin tracking tags.',
    aiDescription: 'Stacked industrial bales of compressed clear plastic bottles in a warehouse staging area with forklift operator.',
    tags: ['recycling', 'plastic', 'bales', 'recovery', 'ghaziabad', 'circular'],
    confidence: {
      activityDetection: 98,
      objectDetection: 97,
      sceneContext: 95
    },
    evidenceType: 'Intervention',
    relatedAssetIds: ['ev-16'],
    imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/ghaziabad/pet_bales_5062',
      version: 'v1716634200',
      format: 'jpg',
      bytes: 3820194,
      width: 4000,
      height: 3000,
      resourceType: 'image',
      uploadedAt: '25 May 2026, 04:10 PM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Standardized density of 380 kg/m³ achieved across 14 documented bales',
      'Batch traceability barcode attached to each unit prior to logistics dispatch'
    ]
  },
  {
    id: 'ev-18',
    assetId: 'cld_impact_2026_1092',
    title: 'Community canoe patrol along Yamuna floodplain',
    projectId: 'yamuna-restoration',
    projectTitle: 'Yamuna Restoration',
    location: 'Delhi',
    coordinates: '28.6820° N, 77.2390° E',
    date: '24 May 2026',
    timestamp: '24 May 2026, 07:15 AM',
    mediaType: 'image',
    activity: 'Community Monitoring',
    description: 'Local volunteer fishermen rowing along the reed margins to inspect floating trash booms and report unauthorized waste dumping.',
    aiDescription: 'Two people in a wooden rowboat on calm river waters near reeds, wearing life jackets with field recording tablets.',
    tags: ['canoe', 'patrol', 'volunteers', 'river', 'monitoring', 'delhi'],
    confidence: {
      activityDetection: 94,
      objectDetection: 95,
      sceneContext: 92
    },
    evidenceType: 'Monitoring',
    relatedAssetIds: ['ev-01', 'ev-04'],
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
    cloudinaryMetadata: {
      publicId: 'field_evidence/2026/delhi/canoe_patrol_1092',
      version: 'v1716534900',
      format: 'jpg',
      bytes: 3590124,
      width: 4032,
      height: 3024,
      resourceType: 'image',
      uploadedAt: '24 May 2026, 07:15 AM IST',
      transformations: [
        { name: 'Original Master', description: 'Raw camera ingest', urlParam: 'f_auto,q_auto' },
        { name: 'Web Optimized', description: 'Responsive delivery', urlParam: 'f_auto,q_auto,w_1200' }
      ]
    },
    visualObservations: [
      'Community boat patrol successfully logged 6 km of shoreline with zero detected dumping violations',
      'Floating boom barrier integrity verified intact'
    ]
  }
];

export const mockJournalEntries: JournalEntry[] = [
  {
    id: 'journal-01',
    projectId: 'yamuna-restoration',
    date: '2026-01-12',
    displayDate: '12 JAN 2026',
    title: 'Baseline documentation & shoreline survey',
    location: 'Wazirabad & Old Railway Bridge, Delhi',
    assetCount: 12,
    activityType: 'Baseline Assessment',
    summary: 'Team completed photographic baseline mapping across 4 designated river sections. High concentrations of single-use plastic waste and unmanaged dumping documented prior to intervention.',
    featuredAssetIds: ['ev-02']
  },
  {
    id: 'journal-02',
    projectId: 'yamuna-restoration',
    date: '2026-03-12',
    displayDate: '12 MAR 2026',
    title: 'Community cleanup and segregation mobilization',
    location: 'Eastern Yamuna Bank, Delhi',
    assetCount: 47,
    activityType: 'Community Cleanup',
    summary: 'Over 80 community volunteers, university students, and local residents assembled for an intensive morning shoreline sweep. 47 distinct media assets logged and indexed.',
    featuredAssetIds: ['ev-01', 'ev-07']
  },
  {
    id: 'journal-03',
    projectId: 'yamuna-restoration',
    date: '2026-04-04',
    displayDate: '04 APR 2026',
    title: 'Plantation of native vetiver buffers & soil terracing',
    location: 'Nigam Bodh Ghat stretch, Delhi',
    assetCount: 32,
    activityType: 'Plantation Activity',
    summary: 'Planted 850 vetiver grass slips and native wetland species along leveled mud embankments to arrest seasonal bank collapse and provide biofiltration.',
    featuredAssetIds: ['ev-03']
  },
  {
    id: 'journal-04',
    projectId: 'yamuna-restoration',
    date: '2026-06-18',
    displayDate: '18 JUN 2026',
    title: 'Pre-monsoon follow-up visit & visual change audit',
    location: 'Wazirabad stretch, Delhi',
    assetCount: 61,
    activityType: 'Follow-up Monitoring',
    summary: 'Follow-up verification confirmed healthy vegetative root establishment and sustained absence of large plastic accumulations. Matched baseline GPS frames.',
    featuredAssetIds: ['ev-04', 'ev-06', 'ev-18']
  }
];

export const mockComparisonPairs: ComparisonPair[] = [
  {
    id: 'comp-yamuna-01',
    projectId: 'yamuna-restoration',
    projectTitle: 'Yamuna Restoration',
    location: 'Delhi (Wazirabad Section)',
    title: 'Shoreline waste reduction & vegetative restoration',
    before: {
      date: 'January 12, 2026',
      assetId: 'cld_impact_2026_1011',
      imageUrl: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=1200&q=80',
      label: 'BEFORE · Baseline Audit',
      notes: 'Heavy visible non-biodegradable waste accumulation on degraded mudflat. No perennial shoreline vegetation.'
    },
    after: {
      date: 'June 18, 2026',
      assetId: 'cld_impact_2026_1089',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      label: 'AFTER · Follow-up Evaluation',
      notes: 'Stabilized green shoreline with established vetiver grass and sustained community maintenance.'
    },
    observations: [
      {
        category: 'Vegetation Cover',
        signal: 'Visible increase',
        detail: 'Dense vegetative colonization along former bare silt embankment.',
        indicator: 'improved'
      },
      {
        category: 'Surface Waste Density',
        signal: 'Lower visible presence',
        detail: 'Substantial reduction in visible discarded plastic packaging within the monitored camera frame.',
        indicator: 'improved'
      },
      {
        category: 'Site Activity & Stewardship',
        signal: 'Increased',
        detail: 'Regular community stewardship and municipal collection points actively maintained.',
        indicator: 'positive'
      },
      {
        category: 'Community Presence',
        signal: 'Detected',
        detail: 'Active local volunteer patrols and maintenance routines documented across multiple visits.',
        indicator: 'detected'
      }
    ],
    sourceAssetIds: ['ev-01', 'ev-02', 'ev-03', 'ev-04', 'ev-05', 'ev-06', 'ev-07', 'ev-18']
  },
  {
    id: 'comp-forest-01',
    projectId: 'forest-recovery',
    projectTitle: 'Community Forest Recovery',
    location: 'Uttarakhand (Kumaon Terraces)',
    title: 'Slope stabilization & sapling establishment',
    before: {
      date: 'February 16, 2026',
      assetId: 'cld_impact_2026_2014',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      label: 'BEFORE · Nursery Preparation',
      notes: 'Degraded dry terrace soil prone to topsoil erosion during winter runoff.'
    },
    after: {
      date: 'July 20, 2026',
      assetId: 'cld_impact_2026_2088',
      imageUrl: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
      label: 'AFTER · Summer Canopy Audit',
      notes: 'Active vegetative ground cover and healthy young tree canopy establishing across terrace contours.'
    },
    observations: [
      {
        category: 'Canopy Density',
        signal: 'Visible increase',
        detail: 'Broadleaf sapling foliage established along terrace contours.',
        indicator: 'improved'
      },
      {
        category: 'Soil Erosion Marks',
        signal: 'Reduced gullies',
        detail: 'Terrace retaining bunds have arrested deep rainwater gully formation.',
        indicator: 'improved'
      },
      {
        category: 'Stewardship Footprint',
        signal: 'Consistent',
        detail: 'Monthly weeding and bamboo stake reinforcement recorded by local Van Panchayat.',
        indicator: 'positive'
      },
      {
        category: 'Moisture Retention',
        signal: 'Detected',
        detail: 'Surface mulching retaining visible soil dampness 5 days post-rain.',
        indicator: 'detected'
      }
    ],
    sourceAssetIds: ['ev-08', 'ev-09', 'ev-10']
  }
];

export const mockMonthlyActivity = [
  { month: 'Jan', assets: 142, label: 'Baseline audits' },
  { month: 'Feb', assets: 188, label: 'Early interventions' },
  { month: 'Mar', assets: 264, label: 'Community campaigns' },
  { month: 'Apr', assets: 215, label: 'Plantations & installations' },
  { month: 'May', assets: 235, label: 'Mid-term audits' },
  { month: 'Jun', assets: 240, label: 'Follow-up evaluations' }
];

export const mockFieldLocations = [
  {
    id: 'loc-delhi',
    name: 'Delhi Riverbank Corridor',
    region: 'Delhi',
    assets: 128,
    activities: 4,
    period: 'Jan — Jun 2026',
    lat: 28.6692,
    lng: 77.2315,
    keyProjects: ['Yamuna Restoration', 'Urban Waste Recovery']
  },
  {
    id: 'loc-noida',
    name: 'Noida Floodplain Marshaling Yards',
    region: 'Noida',
    assets: 54,
    activities: 3,
    period: 'Jan — Jun 2026',
    lat: 28.5355,
    lng: 77.3910,
    keyProjects: ['Yamuna Restoration']
  },
  {
    id: 'loc-ghaziabad',
    name: 'Ghaziabad Material Recovery Center',
    region: 'Ghaziabad',
    assets: 65,
    activities: 2,
    period: 'Feb — Jun 2026',
    lat: 28.6692,
    lng: 77.4538,
    keyProjects: ['Urban Waste Recovery']
  }
];
