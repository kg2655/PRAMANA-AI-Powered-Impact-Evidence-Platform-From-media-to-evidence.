import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Download,
  Share2,
  CheckSquare,
  Square,
  ArrowRight,
  Eye,
  ShieldCheck,
  CheckCircle,
  Printer,
  Sparkles,
  ExternalLink,
  Layers,
  Calendar,
  MapPin
} from 'lucide-react';
import { mockProjects, mockEvidenceItems, mockJournalEntries, mockComparisonPairs } from '../data/mockData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const StoriesPage: React.FC = () => {
  const navigate = useNavigate();

  // Project selector
  const [selectedProjectId, setSelectedProjectId] = useState<string>('yamuna-restoration');
  const project = mockProjects.find((p) => p.id === selectedProjectId) || mockProjects[0];

  // Story Content Section toggles
  const [sections, setSections] = useState({
    executiveSummary: true,
    timeline: true,
    fieldActivities: true,
    beforeAfter: true,
    communityParticipation: true,
    visualEvidence: true,
    keyObservations: true,
    sources: true
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleSection = (key: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleExport = () => {
    setToastMessage('Impact story prepared for export. Generating traceable institutional dossier (PDF)...');
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const projectEvidence = mockEvidenceItems.filter((e) => e.projectId === project.id);
  const comparisonPair = mockComparisonPairs.find((c) => c.projectId === project.id) || mockComparisonPairs[0];

  return (
    <div className="space-y-8 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#202825] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-[#527A5A]">
          <CheckCircle className="w-5 h-5 text-[#527A5A]" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#D9DED8]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#202825] tracking-tight">
            Impact Stories
          </h1>
          <p className="text-sm text-[#68736E] mt-1">
            Turn evidence into clear, traceable stories for teams, partners and communities.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-3.5 py-2 text-xs font-medium border border-[#D9DED8] bg-[#FFFFFF] hover:bg-[#ECEBE3] text-[#202825] rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print View</span>
          </button>
          <button
            onClick={handleExport}
            className="px-4 py-2 text-xs font-semibold bg-[#527A5A] hover:bg-[#46694d] text-white rounded-lg transition-colors flex items-center gap-2 shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Export Story</span>
          </button>
        </div>
      </div>

      {/* Main 2-Panel Story Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT PANEL: Story Builder Controls (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-5 space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-bold block mb-1">
                Story Configuration
              </span>
              <h3 className="text-base font-bold text-[#202825]">
                Select Initiative
              </h3>
            </div>

            <div>
              <select
                value={selectedProjectId}
                onChange={(e) => setSelectedProjectId(e.target.value)}
                className="w-full text-xs font-medium bg-[#F5F3ED] border border-[#D9DED8] rounded-lg px-3 py-2.5 text-[#202825] focus:outline-none focus:border-[#527A5A]"
              >
                {mockProjects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} ({p.period})
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2 border-t border-[#D9DED8]">
              <span className="text-xs font-semibold text-[#202825] block mb-3">
                Include Story Sections
              </span>

              <div className="space-y-2.5">
                {[
                  { key: 'executiveSummary', label: 'Executive Summary' },
                  { key: 'timeline', label: 'Project Timeline' },
                  { key: 'fieldActivities', label: 'Field Activities' },
                  { key: 'beforeAfter', label: 'Before / After Comparison' },
                  { key: 'communityParticipation', label: 'Community Participation' },
                  { key: 'visualEvidence', label: 'Visual Evidence Plates' },
                  { key: 'keyObservations', label: 'Key Observations' },
                  { key: 'sources', label: 'Traceable Source Ledger' }
                ].map(({ key, label }) => {
                  const isChecked = sections[key as keyof typeof sections];
                  return (
                    <div
                      key={key}
                      onClick={() => toggleSection(key as any)}
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#F5F3ED] cursor-pointer text-xs transition-colors"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#527A5A]" />
                      ) : (
                        <Square className="w-4 h-4 text-[#68736E]" />
                      )}
                      <span className={isChecked ? 'font-medium text-[#202825]' : 'text-[#68736E]'}>
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-3 bg-[#EEF3EF] border border-[#527A5A]/30 rounded-lg text-[11px] text-[#202825] space-y-1">
              <span className="font-semibold block text-[#527A5A]">Traceability Guarantee:</span>
              <p className="text-[#68736E] leading-relaxed">
                Every exported paragraph embeds direct hyperlinks to Cloudinary immutable asset master records.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Professional Document Preview (8 cols) */}
        <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#D9DED8] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 font-sans">
          {/* Document Header */}
          <div className="border-b border-[#D9DED8] pb-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#68736E]">
              <span className="font-mono uppercase tracking-widest text-[#527A5A]">
                Impact Story · Digital Dossier
              </span>
              <span className="font-mono">{project.period}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl text-[#202825] font-semibold leading-tight">
              {project.title.toUpperCase()}
            </h2>

            <p className="text-xs text-[#68736E] font-mono">
              Prepared for: Stakeholder Audit, Community Ledger & Funder Review · {project.location}, India
            </p>
          </div>

          {/* Hero Field Photograph */}
          <div className="rounded-xl overflow-hidden border border-[#D9DED8]">
            <ImageWithFallback
              src={project.coverImage}
              alt={project.title}
              aspectRatioClass="aspect-[16/9]"
              locationStamp={project.location}
            />
            <div className="p-3 bg-[#F5F3ED] text-[11px] text-[#68736E] flex justify-between">
              <span>Fig 1. Shoreline monitoring benchmark at Wazirabad sector</span>
              <span className="font-mono">Cloudinary Master: cld_impact_2026_1032</span>
            </div>
          </div>

          {/* Section: Executive Summary */}
          {sections.executiveSummary && (
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-bold">
                Executive Summary
              </h3>
              <p className="text-sm sm:text-base text-[#202825] leading-relaxed font-medium">
                Field evidence collected across multiple visits documents cleanup, plantation and follow-up activities along selected areas of the {project.title} project.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('/evidence')}
                  className="text-xs text-[#527A5A] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>View supporting evidence →</span>
                </button>
              </div>
            </div>
          )}

          {/* Section: Timeline */}
          {sections.timeline && (
            <div className="space-y-4 pt-4 border-t border-[#D9DED8]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-bold">
                Project Timeline & Milestones
              </h3>
              <div className="space-y-3">
                {mockJournalEntries.map((j) => (
                  <div key={j.id} className="p-3.5 bg-[#F5F3ED] rounded-lg border border-[#D9DED8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-mono font-bold text-[#527A5A] mr-2">
                        {j.displayDate}:
                      </span>
                      <strong className="text-[#202825]">{j.activityType}</strong>
                      <p className="text-[#68736E] mt-0.5 line-clamp-1">{j.summary}</p>
                    </div>
                    <span className="font-mono text-[#68736E] text-[11px] shrink-0">
                      {j.assetCount} assets
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate(`/projects/${project.id}`)}
                className="text-xs text-[#527A5A] font-semibold hover:underline flex items-center gap-1"
              >
                <span>View supporting field journal →</span>
              </button>
            </div>
          )}

          {/* Section: Before / After */}
          {sections.beforeAfter && (
            <div className="space-y-4 pt-4 border-t border-[#D9DED8]">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-bold">
                  Visual Change Comparison
                </h3>
                <span className="text-xs text-[#68736E]">Wazirabad Riparian Stretch</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <ImageWithFallback
                    src={comparisonPair.before.imageUrl}
                    alt="Before condition"
                    aspectRatioClass="aspect-[4/3]"
                  />
                  <div className="text-[11px] font-mono text-[#68736E]">
                    BEFORE: {comparisonPair.before.date}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <ImageWithFallback
                    src={comparisonPair.after.imageUrl}
                    alt="After condition"
                    aspectRatioClass="aspect-[4/3]"
                  />
                  <div className="text-[11px] font-mono text-[#527A5A] font-semibold">
                    AFTER: {comparisonPair.after.date}
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#68736E] leading-relaxed">
                Visual observations confirm substantial vegetative density progression and marked diminution in visible surface non-biodegradable packaging along the 200m shoreline corridor.
              </p>

              <button
                onClick={() => navigate('/compare')}
                className="text-xs text-[#527A5A] font-semibold hover:underline flex items-center gap-1"
              >
                <span>View full comparative audit breakdown →</span>
              </button>
            </div>
          )}

          {/* Section: Key Observations */}
          {sections.keyObservations && (
            <div className="space-y-3 pt-4 border-t border-[#D9DED8]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-bold">
                Synthesized Field Observations
              </h3>
              <ul className="space-y-2 text-xs text-[#202825]">
                <li className="p-3 bg-[#F5F3ED] rounded-lg border border-[#D9DED8]">
                  <strong>Community cleanup activity: </strong>
                  Documented across 4 distinct field visits with over 80 participating residents.
                </li>
                <li className="p-3 bg-[#F5F3ED] rounded-lg border border-[#D9DED8]">
                  <strong>Vegetation cover expansion: </strong>
                  Vetiver grass root structures established along stabilized terraces.
                </li>
                <li className="p-3 bg-[#F5F3ED] rounded-lg border border-[#D9DED8]">
                  <strong>Continued community surveillance: </strong>
                  Volunteer canoe patrol logs confirm minimal recurrence of unauthorized dumping.
                </li>
              </ul>
              <button
                onClick={() => navigate('/evidence')}
                className="text-xs text-[#527A5A] font-semibold hover:underline flex items-center gap-1"
              >
                <span>View supporting evidence →</span>
              </button>
            </div>
          )}

          {/* Section: Sources & Traceability */}
          {sections.sources && (
            <div className="space-y-3 pt-4 border-t border-[#D9DED8]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#4F7C86] font-bold">
                Traceable Source Evidence Ledger
              </h3>
              <p className="text-xs text-[#68736E]">
                All assets securely archived on Cloudinary with SHA-256 integrity validation and EXIF metadata preservation.
              </p>
              <div className="border border-[#D9DED8] rounded-xl overflow-hidden divide-y divide-[#D9DED8] text-xs">
                <div className="p-2.5 bg-[#ECEBE3] font-medium text-[#202825] grid grid-cols-4">
                  <span>Asset Identifier</span>
                  <span>Activity</span>
                  <span>Capture Date</span>
                  <span>Resolution</span>
                </div>
                {projectEvidence.slice(0, 4).map((item) => (
                  <div key={item.id} className="p-2.5 grid grid-cols-4 text-[#202825] font-mono text-[11px]">
                    <span className="font-semibold text-[#527A5A]">{item.assetId}</span>
                    <span className="font-sans">{item.activity}</span>
                    <span>{item.date}</span>
                    <span>{item.cloudinaryMetadata.width}x{item.cloudinaryMetadata.height}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/evidence')}
                className="text-xs text-[#527A5A] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Inspect complete master index in Evidence Library →</span>
              </button>
            </div>
          )}

          {/* Document Signoff / Institutional Seal */}
          <div className="pt-6 border-t border-[#D9DED8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#68736E]">
            <div>
              <p className="font-semibold text-[#202825]">PRAMĀṆA Evidence Dossier</p>
              <p className="text-[11px] font-mono">Issued by: Delhi Wetland Conservation Trust & Community Volunteers</p>
            </div>
            <div className="flex items-center gap-2 text-[#527A5A] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Cryptographically Traceable Media Ingest</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
