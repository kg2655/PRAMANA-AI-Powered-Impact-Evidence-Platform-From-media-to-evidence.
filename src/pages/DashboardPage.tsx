import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Plus, Sparkles, Filter, ChevronRight, BarChart2 } from 'lucide-react';
import { mockProjects, mockMonthlyActivity, mockEvidenceItems } from '../data/mockData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { UploadAnalyzeModal } from '../components/media/UploadAnalyzeModal';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const recentProjects = mockProjects.slice(0, 3);
  const recentEvidence = mockEvidenceItems.slice(0, 4);

  // Maximum monthly value for normalization in chart
  const maxAssets = Math.max(...mockMonthlyActivity.map((m) => m.assets));

  return (
    <div className="space-y-10">
      {/* Page Heading & Header CTA */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#D9DED8]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#202825] tracking-tight">
            Your impact, in view.
          </h1>
          <p className="text-sm text-[#68736E] mt-1">
            A living overview of the evidence collected across your projects.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setUploadModalOpen(true)}
          className="px-4 py-2 text-xs font-semibold bg-[#527A5A] hover:bg-[#46694d] text-white rounded-lg transition-colors inline-flex items-center gap-2 self-start sm:self-auto shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>+ Upload Evidence</span>
        </button>
      </div>

      {/* Four Understated Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#68736E] block mb-1">
            Total Archives
          </span>
          <div className="text-3xl font-bold font-sans tabular-nums text-[#202825]">
            1,284
          </div>
          <p className="text-xs text-[#68736E] mt-1.5">
            Field Assets preserved in Cloudinary
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#68736E] block mb-1">
            Active Portfolios
          </span>
          <div className="text-3xl font-bold font-sans tabular-nums text-[#202825]">
            32
          </div>
          <p className="text-xs text-[#68736E] mt-1.5">
            Projects with verified field streams
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#68736E] block mb-1">
            Geographic Scope
          </span>
          <div className="text-3xl font-bold font-sans tabular-nums text-[#202825]">
            18
          </div>
          <p className="text-xs text-[#68736E] mt-1.5">
            Monitored field locations & basins
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#68736E] block mb-1">
            Synthesized Clusters
          </span>
          <div className="text-3xl font-bold font-sans tabular-nums text-[#202825]">
            74
          </div>
          <p className="text-xs text-[#68736E] mt-1.5">
            Evidence groups linked to baselines
          </p>
        </div>
      </div>

      {/* Evidence Activity: Clean Monthly Visualization */}
      <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#527A5A] font-semibold">
              Temporal Index
            </span>
            <h2 className="text-lg font-bold text-[#202825] mt-0.5">
              EVIDENCE ACTIVITY
            </h2>
            <p className="text-xs text-[#68736E]">
              Media volume uploaded, analyzed, and linked to project baselines (Jan — Jun 2026)
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#68736E]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#527A5A]" />
              <span>Verified Ingest</span>
            </div>
          </div>
        </div>

        {/* Clean Bar Visualization */}
        <div className="grid grid-cols-6 gap-2 sm:gap-6 pt-6 pb-2 items-end border-b border-[#D9DED8]">
          {mockMonthlyActivity.map((m) => {
            const heightPercent = Math.round((m.assets / maxAssets) * 100);
            return (
              <div key={m.month} className="flex flex-col items-center gap-2 group">
                <span className="text-[11px] font-mono tabular-nums text-[#68736E] group-hover:text-[#202825] transition-colors">
                  {m.assets}
                </span>
                <div className="w-full bg-[#ECEBE3] rounded-t-md h-36 flex items-end p-1">
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className="w-full bg-[#527A5A]/85 group-hover:bg-[#527A5A] transition-all rounded-t-sm"
                  />
                </div>
                <span className="text-xs font-medium text-[#202825] mt-1">
                  {m.month}
                </span>
                <span className="text-[10px] text-[#68736E] text-center hidden sm:block truncate max-w-[90px]">
                  {m.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#68736E] gap-2">
          <span>Total volume across 6 months: 1,284 field assets</span>
          <button
            onClick={() => navigate('/explore')}
            className="text-[#527A5A] hover:underline font-medium flex items-center gap-1"
          >
            <span>Explore semantic distribution</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-[#202825]">Recent Projects</h2>
            <p className="text-xs text-[#68736E]">
              Key field initiatives actively logging documentary evidence
            </p>
          </div>
          <button
            onClick={() => navigate('/projects')}
            className="text-xs font-medium text-[#527A5A] hover:text-[#46694d] flex items-center gap-1"
          >
            <span>View all 32 projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/projects/${p.id}`)}
              className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl overflow-hidden hover:border-[#527A5A] hover:shadow-md transition-all cursor-pointer flex flex-col group"
            >
              <div className="relative">
                <ImageWithFallback
                  src={p.coverImage}
                  alt={p.title}
                  aspectRatioClass="aspect-[16/10]"
                  locationStamp={p.location}
                />
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono font-medium text-[#202825] border border-[#D9DED8]">
                  {p.period}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#68736E] mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#527A5A]" />
                    <span>{p.location}, {p.country}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#202825] group-hover:text-[#527A5A] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#68736E] mt-2 line-clamp-2 leading-relaxed">
                    {p.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#D9DED8] flex items-center justify-between text-xs">
                  <span className="font-mono tabular-nums text-[#202825] font-semibold">
                    {p.assetCount} assets
                  </span>
                  <span className="text-[#527A5A] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Open Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Field Evidence Stream */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-[#202825]">Latest Field Captures</h2>
            <p className="text-xs text-[#68736E]">
              Fresh arrivals processed through Cloudinary & indexed with AI observations
            </p>
          </div>
          <button
            onClick={() => navigate('/evidence')}
            className="text-xs font-medium text-[#527A5A] hover:text-[#46694d] flex items-center gap-1"
          >
            <span>Explore library</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentEvidence.map((ev) => (
            <div
              key={ev.id}
              onClick={() => navigate(`/evidence/${ev.id}`)}
              className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl overflow-hidden hover:border-[#527A5A] transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative">
                <ImageWithFallback
                  src={ev.thumbnailUrl}
                  alt={ev.title}
                  aspectRatioClass="aspect-[4/3]"
                  locationStamp={ev.location}
                  coordinates={ev.coordinates}
                />
                <span className="absolute bottom-2 right-2 bg-[#202825]/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {ev.evidenceType}
                </span>
              </div>

              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-[#68736E] flex items-center justify-between mb-1">
                    <span>{ev.location}</span>
                    <span className="font-mono">{ev.date}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-[#202825] group-hover:text-[#527A5A] transition-colors line-clamp-1">
                    {ev.title}
                  </h4>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#D9DED8] flex items-center justify-between text-[11px]">
                  <span className="text-[#68736E] font-mono truncate max-w-[120px]">
                    {ev.assetId}
                  </span>
                  <span className="text-[#527A5A] font-medium group-hover:underline">
                    View evidence →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <UploadAnalyzeModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
      />
    </div>
  );
};
