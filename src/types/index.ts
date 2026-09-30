export type ProjectCategory = 'restoration' | 'marine' | 'community' | 'infrastructure' | 'energy';

export interface Project {
  id: string;
  title: string;
  location: string;
  state: string;
  country: string;
  period: string;
  category: ProjectCategory;
  accentColor: string;
  accentBg: string;
  assetCount: number;
  fieldVisits: number;
  activityTypes: number;
  locationsCount: number;
  coverImage: string;
  summary: string;
  objectives: string[];
  coordinatingPartner: string;
}

export type MediaType = 'image' | 'video';

export interface CloudinaryMetadata {
  publicId: string;
  version: string;
  format: string;
  bytes: number;
  width: number;
  height: number;
  resourceType: 'image' | 'video';
  uploadedAt: string;
  transformations: {
    name: string;
    description: string;
    urlParam: string;
  }[];
}

export interface EvidenceItem {
  id: string;
  assetId: string; // e.g. cld_impact_2026_1032
  title: string;
  projectId: string;
  projectTitle: string;
  location: string;
  coordinates?: string;
  date: string;
  timestamp: string;
  mediaType: MediaType;
  activity: string;
  description: string;
  aiDescription: string;
  tags: string[];
  confidence: {
    activityDetection: number; // e.g. 94%
    objectDetection: number; // e.g. 97%
    sceneContext: number; // e.g. 91%
  };
  evidenceType: 'Baseline' | 'Intervention' | 'Monitoring' | 'Community' | 'Follow-up';
  relatedAssetIds: string[];
  beforeAfterPairId?: string;
  imageUrl: string;
  thumbnailUrl: string;
  cloudinaryMetadata: CloudinaryMetadata;
  visualObservations: string[];
  fieldNotes?: string;
}

export interface JournalEntry {
  id: string;
  projectId: string;
  date: string;
  displayDate: string;
  title: string;
  location: string;
  assetCount: number;
  activityType: string;
  summary: string;
  featuredAssetIds: string[];
}

export interface ComparisonPair {
  id: string;
  projectId: string;
  projectTitle: string;
  location: string;
  title: string;
  before: {
    date: string;
    assetId: string;
    imageUrl: string;
    label: string;
    notes: string;
  };
  after: {
    date: string;
    assetId: string;
    imageUrl: string;
    label: string;
    notes: string;
  };
  observations: {
    category: string;
    signal: string;
    detail: string;
    indicator: 'positive' | 'neutral' | 'improved' | 'detected';
  }[];
  sourceAssetIds: string[];
}

export interface StoryConfig {
  projectId: string;
  includeExecutiveSummary: boolean;
  includeTimeline: boolean;
  includeFieldActivities: boolean;
  includeBeforeAfter: boolean;
  includeCommunityParticipation: boolean;
  includeVisualEvidence: boolean;
  includeKeyObservations: boolean;
  includeSources: boolean;
}
