import { CloudinaryMetadata, EvidenceItem } from '../types';
import { mockEvidenceItems } from '../data/mockData';

export interface CloudinaryConfig {
  cloudName: string;
  uploadPreset: string;
  apiKeyPlaceholder: string;
}

export const cloudinaryConfig: CloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'pramana-ngo-archive',
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'field_evidence_preset',
  apiKeyPlaceholder: 'CLD_RESTRICTED_CLIENT_KEY'
};

export interface TransformationOption {
  id: string;
  name: string;
  description: string;
  params: string;
  exampleUrl: string;
}

export const cloudinaryService = {
  /**
   * Returns metadata for an asset by its Cloudinary Asset ID
   */
  getAssetMetadata(assetId: string): CloudinaryMetadata | null {
    const item = mockEvidenceItems.find((e) => e.assetId === assetId || e.id === assetId);
    return item ? item.cloudinaryMetadata : null;
  },

  /**
   * Generates a transformed asset URL based on Cloudinary standard URL syntax
   */
  generateTransformationUrl(publicId: string, params: string = 'f_auto,q_auto'): string {
    return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${params}/${publicId}`;
  },

  /**
   * Simulates an asset upload to Cloudinary with EXIF extraction & auto-tagging
   */
  async uploadAsset(file: File | { name: string; size: number }, projectTag: string): Promise<Partial<EvidenceItem>> {
    // Simulated upload latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    const timestamp = new Date().toISOString();
    const mockId = `cld_impact_2026_${Math.floor(1000 + Math.random() * 9000)}`;

    return {
      assetId: mockId,
      projectId: projectTag,
      timestamp,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      cloudinaryMetadata: {
        publicId: `field_evidence/2026/ingest/${mockId}`,
        version: `v${Date.now().toString().slice(0, 10)}`,
        format: 'jpg',
        bytes: file.size || 3420194,
        width: 4032,
        height: 3024,
        resourceType: 'image',
        uploadedAt: new Date().toLocaleString(),
        transformations: [
          { name: 'Original Master', description: 'Raw camera ingest with full EXIF', urlParam: 'f_auto,q_auto' },
          { name: 'Web Optimized', description: 'Modern WebP/AVIF perceptual delivery', urlParam: 'f_auto,q_auto,w_1200' },
          { name: 'Thumbnail', description: 'Smart focal crop for fast index', urlParam: 'c_fill,g_auto,w_400,h_300' }
        ]
      }
    };
  },

  /**
   * Returns the architectural media pipeline description
   */
  getArchitectureOverview() {
    return {
      stages: [
        {
          step: '01',
          name: 'Field Media Ingest',
          service: 'Cloudinary Upload API',
          description: 'Field workers upload raw high-resolution smartphone and drone media with embedded EXIF timestamps and GPS tags directly to secure cloud folders.'
        },
        {
          step: '02',
          name: 'Perceptual Transformation',
          service: 'Cloudinary Dynamic Delivery',
          description: 'Automatically creates bandwidth-optimized AVIF/WebP responsive derivatives and smart focal thumbnails for low-connectivity field review.'
        },
        {
          step: '03',
          name: 'AI Evidence Understanding',
          service: 'Cloudinary AI & Multimodal Engine',
          description: 'Extracts semantic entities, detects cleanup vs. degradation, recognizes equipment and vegetative signals, and indexes visual characteristics.'
        },
        {
          step: '04',
          name: 'Traceable Evidence Graph',
          service: 'PRAMĀṆA Evidence Index',
          description: 'Associates each visual signal with its permanent Cloudinary public ID, preserve-original audit trail, and before/after temporal pairs.'
        },
        {
          step: '05',
          name: 'Editorial Story Generation',
          service: 'PRAMĀṆA Report Studio',
          description: 'Assembles published impact dossiers where every summary sentence remains clickable to the exact Cloudinary master asset.'
        }
      ]
    };
  }
};
