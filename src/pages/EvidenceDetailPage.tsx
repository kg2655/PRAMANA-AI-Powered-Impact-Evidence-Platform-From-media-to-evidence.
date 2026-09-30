import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Layers,
  Database,
  ShieldCheck,
  ExternalLink,
  GitCompare,
  FileCheck2,
  Copy,
  Check,
  Eye,
  Camera,
  Download,
  AlertCircle
} from 'lucide-react';
import { mockEvidenceItems, mockProjects } from '../data/mockData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { cloudinaryService } from '../services/cloudinaryService';

export const EvidenceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [activeTransformation, setActiveTransformation] = useState<string>('Web Optimized');
  const [viewOriginalModal, setViewOriginalModal] = useState(false);

  // Look up evidence item by id or assetId
  const evidence = mockEvidenceItems.find((e) => e.id === id || e.assetId === id) || mockEvidenceItems[0];
  const project = mockProjects.find((p) => p.id === evidence.projectId);

  // Related assets
  const relatedItems = mockEvidenceItems.filter((e) => evidence.relatedAssetIds.includes(e.id));

  const handleCopyAssetId = () => {
    navigator.clipboard?.writeText(evidence.assetId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Back button and breadcrumb navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#D9DED8]">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#68736E] hover:text-[#202825] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Library</span>
        </button>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#68736E]">Project:</span>
          <Link
            to={`/projects/${evidence.projectId}`}
            className="font-medium text-[#527A5A] hover:underline"
          >
            {evidence.projectTitle}
          </Link>
          <span className="text-[#68736E]">/</span>
          <span className="font-mono text-[#202825]">{evidence.assetId}</span>
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Large Media Preview (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-2xl overflow-hidden shadow-xs">
            <div className="relative bg-[#ECEBE3]">
              <ImageWithFallback
                src={evidence.imageUrl}
                alt={evidence.title}
                aspectRatioClass="aspect-[4/3] sm:aspect-[16/11]"
                locationStamp={evidence.location}
                coordinates={evidence.coordinates}
              />
              <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-mono font-medium text-[#202825] border border-[#D9DED8]">
                {evidence.evidenceType} Stage
              </div>
            </div>

            {/* Media Action Strip */}
            <div className="p-4 bg-[#FFFFFF] border-t border-[#D9DED8] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="text-[#68736E] font-mono text-[11px]">
                  Format: {evidence.cloudinaryMetadata.format.toUpperCase()} · {evidence.cloudinaryMetadata.width}x{evidence.cloudinaryMetadata.height}px
                </span>
                <span className="text-[#68736E]">·</span>
                <span className="text-[#68736E] font-mono text-[11px]">
                  {(evidence.cloudinaryMetadata.bytes / (1024 * 1024)).toFixed(2)} MB
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewOriginalModal(true)}
                  className="px-3 py-1.5 rounded-lg border border-[#D9DED8] bg-[#F5F3ED] hover:bg-[#ECEBE3] text-[#202825] font-medium transition-colors flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Original</span>
                </button>

                {evidence.beforeAfterPairId && (
                  <button
                    onClick={() => navigate('/compare')}
                    className="px-3 py-1.5 rounded-lg bg-[#527A5A] hover:bg-[#46694d] text-white font-medium transition-colors flex items-center gap-1.5"
                  >
                    <GitCompare className="w-3.5 h-3.5" />
                    <span>Compare Pair</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Field Observer Notes */}
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-semibold">
              Field Observer Context
            </h3>
            <p className="text-xs sm:text-sm text-[#202825] leading-relaxed">
              {evidence.description}
            </p>
            {evidence.fieldNotes && (
              <div className="p-3 bg-[#F5F3ED] rounded-lg border border-[#D9DED8] text-xs text-[#68736E]">
                <strong className="text-[#202825]">Field Dispatch Note: </strong>
                {evidence.fieldNotes}
              </div>
            )}
          </div>

          {/* Visual Observations List */}
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#202825] font-semibold">
              Verified Visual Signals
            </h3>
            <ul className="space-y-2 text-xs text-[#202825]">
              {evidence.visualObservations.map((obs, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#527A5A] mt-1.5 shrink-0" />
                  <span>{obs}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: Evidence Intelligence & Traceability (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Intelligence Card */}
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-bold block mb-1">
                Evidence Intelligence
              </span>
              <h2 className="text-xl font-bold text-[#202825] tracking-tight">
                {evidence.activity.toUpperCase()}
              </h2>
            </div>

            {/* AI Description Block */}
            <div className="p-4 bg-[#F5F3ED] rounded-xl border border-[#D9DED8] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#68736E] font-semibold block">
                AI Description
              </span>
              <p className="text-xs text-[#202825] font-medium leading-relaxed">
                &ldquo;{evidence.aiDescription}&rdquo;
              </p>
            </div>

            {/* Structured Metadata Definition List */}
            <div className="space-y-3.5 text-xs divide-y divide-[#D9DED8]">
              <div className="flex items-center justify-between pt-1">
                <span className="text-[#68736E]">Activity:</span>
                <span className="font-semibold text-[#202825]">{evidence.activity}</span>
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-[#68736E]">Location:</span>
                <span className="font-medium text-[#202825]">{evidence.location}, India</span>
              </div>
              {evidence.coordinates && (
                <div className="flex items-center justify-between pt-3">
                  <span className="text-[#68736E]">Coordinates:</span>
                  <span className="font-mono text-[#202825]">{evidence.coordinates}</span>
                </div>
              )}
              <div className="flex items-center justify-between pt-3">
                <span className="text-[#68736E]">Date Ingested:</span>
                <span className="font-mono text-[#202825]">{evidence.date}</span>
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-[#68736E]">Evidence Type:</span>
                <span className="font-semibold text-[#527A5A]">{evidence.evidenceType} Documentation</span>
              </div>
            </div>

            {/* AI Tags unboxed with typographic dots */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#68736E] block mb-2">
                AI Tags
              </span>
              <div className="text-xs text-[#202825] leading-relaxed">
                {evidence.tags.join(' · ')}
              </div>
            </div>

            {/* AI Confidence Breakdown */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#68736E] block">
                AI Confidence
              </span>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#68736E]">Activity detection</span>
                    <span className="font-mono font-semibold text-[#202825]">
                      {evidence.confidence.activityDetection}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-[#ECEBE3] rounded-full overflow-hidden">
                    <div
                      style={{ width: `${evidence.confidence.activityDetection}%` }}
                      className="h-full bg-[#527A5A] rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#68736E]">Object detection</span>
                    <span className="font-mono font-semibold text-[#202825]">
                      {evidence.confidence.objectDetection}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-[#ECEBE3] rounded-full overflow-hidden">
                    <div
                      style={{ width: `${evidence.confidence.objectDetection}%` }}
                      className="h-full bg-[#527A5A] rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#68736E]">Scene context</span>
                    <span className="font-mono font-semibold text-[#202825]">
                      {evidence.confidence.sceneContext}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-[#ECEBE3] rounded-full overflow-hidden">
                    <div
                      style={{ width: `${evidence.confidence.sceneContext}%` }}
                      className="h-full bg-[#527A5A] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EVIDENCE-BACKED & RELATED ASSETS */}
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-bold block">
                  EVIDENCE-BACKED
                </span>
                <h3 className="text-sm font-bold text-[#202825] mt-0.5">
                  {evidence.relatedAssetIds.length + 1} linked source assets
                </h3>
              </div>
              <button
                onClick={() => navigate('/evidence')}
                className="text-xs text-[#527A5A] font-medium hover:underline"
              >
                View all in library →
              </button>
            </div>

            {/* Related thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {relatedItems.slice(0, 4).map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigate(`/evidence/${rel.id}`)}
                  className="rounded-lg border border-[#D9DED8] overflow-hidden cursor-pointer hover:border-[#527A5A] transition-colors group"
                >
                  <ImageWithFallback
                    src={rel.thumbnailUrl}
                    alt={rel.title}
                    aspectRatioClass="aspect-square"
                  />
                  <div className="p-1 bg-[#FFFFFF] text-[10px] font-mono text-[#68736E] truncate text-center">
                    {rel.date.slice(0, 6)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOURCE & TRACEABILITY (Cloudinary Deep Trace) */}
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#4F7C86] font-bold">
                SOURCE & TRACEABILITY
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#4F7C86]/10 text-[#4F7C86] font-semibold">
                Cloudinary Master
              </span>
            </div>

            <div className="p-3 bg-[#F5F3ED] rounded-lg border border-[#D9DED8] space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#68736E]">Asset ID:</span>
                <div className="flex items-center gap-1.5">
                  <code className="font-mono text-[#202825] font-semibold">
                    {evidence.assetId}
                  </code>
                  <button
                    onClick={handleCopyAssetId}
                    className="p-1 text-[#68736E] hover:text-[#202825]"
                    title="Copy Asset ID"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#527A5A]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#68736E]">Public ID:</span>
                <span className="font-mono text-[#202825] text-[11px] truncate max-w-[180px]">
                  {evidence.cloudinaryMetadata.publicId}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#68736E]">Original uploaded:</span>
                <span className="font-mono text-[#202825] text-[11px]">
                  {evidence.cloudinaryMetadata.uploadedAt}
                </span>
              </div>
            </div>

            {/* Transformations List */}
            <div>
              <span className="text-xs font-medium text-[#202825] block mb-2">
                Available Transformations:
              </span>
              <div className="space-y-1.5">
                {evidence.cloudinaryMetadata.transformations.map((t) => {
                  const isActive = activeTransformation === t.name;
                  return (
                    <div
                      key={t.name}
                      onClick={() => setActiveTransformation(t.name)}
                      className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                        isActive
                          ? 'border-[#527A5A] bg-[#EEF3EF]'
                          : 'border-[#D9DED8] bg-[#FFFFFF] hover:bg-[#F5F3ED]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#202825]">{t.name}</span>
                        <code className="text-[10px] font-mono text-[#68736E]">
                          {t.urlParam}
                        </code>
                      </div>
                      <p className="text-[11px] text-[#68736E] mt-0.5">{t.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => setViewOriginalModal(true)}
              className="w-full py-2.5 px-4 text-xs font-semibold bg-[#202825] hover:bg-[#343e3a] text-white rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Original Cloudinary Master</span>
            </button>
          </div>
        </div>
      </div>

      {/* View Original Modal */}
      {viewOriginalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#202825]/60 backdrop-blur-xs p-4">
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl max-w-3xl w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9DED8]">
              <div>
                <h3 className="text-base font-bold text-[#202825]">
                  Cloudinary Master Asset Inspector
                </h3>
                <p className="text-xs font-mono text-[#68736E]">
                  {evidence.cloudinaryMetadata.publicId}
                </p>
              </div>
              <button
                onClick={() => setViewOriginalModal(false)}
                className="text-xs font-medium text-[#68736E] hover:text-[#202825]"
              >
                Close
              </button>
            </div>

            <div className="max-h-[60vh] overflow-hidden rounded-lg bg-[#ECEBE3]">
              <img
                src={evidence.imageUrl}
                alt={evidence.title}
                className="w-full h-auto object-contain max-h-[55vh] mx-auto"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs">
              <span className="font-mono text-[#68736E]">
                EXIF GPS: {evidence.coordinates || 'Station Wazirabad 28.6692° N, 77.2315° E'}
              </span>
              <button
                onClick={() => {
                  alert(`Master file ${evidence.assetId} downloaded for audit verification.`);
                  setViewOriginalModal(false);
                }}
                className="px-3.5 py-1.5 bg-[#527A5A] text-white rounded-lg text-xs font-medium flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Master Archive</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
