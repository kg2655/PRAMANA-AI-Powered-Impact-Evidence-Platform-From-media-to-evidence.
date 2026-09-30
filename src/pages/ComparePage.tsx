import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GitCompare,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Eye,
  Sliders,
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles
} from 'lucide-react';
import { mockComparisonPairs, mockProjects, mockEvidenceItems } from '../data/mockData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const ComparePage: React.FC = () => {
  const navigate = useNavigate();

  const [selectedPairId, setSelectedPairId] = useState<string>('comp-yamuna-01');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // For interactive split slider
  const [viewMode, setViewMode] = useState<'side-by-side' | 'slider'>('side-by-side');

  const pair = mockComparisonPairs.find((c) => c.id === selectedPairId) || mockComparisonPairs[0];
  const sourceEvidence = mockEvidenceItems.filter((e) => pair.sourceAssetIds.includes(e.id));

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="pb-2 border-b border-[#D9DED8]">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#202825] tracking-tight">
          What changed?
        </h1>
        <p className="text-sm text-[#68736E] mt-1">
          Compare field evidence across time.
        </p>
      </div>

      {/* Control Strip */}
      <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-xs">
          {/* Project selector */}
          <div>
            <label className="text-[11px] font-mono text-[#68736E] block mb-1">
              Project Portfolio
            </label>
            <select
              value={selectedPairId}
              onChange={(e) => setSelectedPairId(e.target.value)}
              className="bg-[#F5F3ED] border border-[#D9DED8] rounded-lg px-3 py-2 text-[#202825] font-semibold focus:outline-none focus:border-[#527A5A]"
            >
              {mockComparisonPairs.map((cp) => (
                <option key={cp.id} value={cp.id}>
                  {cp.projectTitle} · {cp.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[11px] font-mono text-[#68736E] block mb-1">
              Location
            </label>
            <div className="bg-[#F5F3ED] border border-[#D9DED8] rounded-lg px-3 py-2 text-[#202825] font-medium">
              {pair.location}
            </div>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#ECEBE3] rounded-lg text-xs">
          <button
            onClick={() => setViewMode('side-by-side')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              viewMode === 'side-by-side'
                ? 'bg-[#FFFFFF] text-[#202825] shadow-xs'
                : 'text-[#68736E] hover:text-[#202825]'
            }`}
          >
            Side-by-Side
          </button>
          <button
            onClick={() => setViewMode('slider')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              viewMode === 'slider'
                ? 'bg-[#FFFFFF] text-[#202825] shadow-xs'
                : 'text-[#68736E] hover:text-[#202825]'
            }`}
          >
            Split Overlay Slider
          </button>
        </div>
      </div>

      {/* COMPARISON DISPLAY */}
      {viewMode === 'side-by-side' ? (
        /* Side by Side Mode */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* BEFORE */}
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-2xl overflow-hidden shadow-xs">
            <div className="p-4 bg-[#F5F3ED] border-b border-[#D9DED8] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#A96752]">
                  BEFORE
                </span>
                <h3 className="text-sm font-bold text-[#202825]">
                  {pair.before.date}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#68736E]">
                {pair.before.assetId}
              </span>
            </div>

            <ImageWithFallback
              src={pair.before.imageUrl}
              alt={pair.before.label}
              aspectRatioClass="aspect-[4/3] sm:aspect-[16/11]"
              locationStamp={pair.location}
            />

            <div className="p-4 bg-[#FFFFFF]">
              <p className="text-xs text-[#68736E] leading-relaxed">
                {pair.before.notes}
              </p>
              <div className="mt-3 pt-3 border-t border-[#D9DED8] flex items-center justify-between text-[11px]">
                <span className="text-[#68736E]">Baseline Environmental Audit</span>
                <button
                  onClick={() => navigate(`/evidence/${pair.before.assetId}`)}
                  className="text-[#527A5A] font-semibold hover:underline"
                >
                  View baseline asset →
                </button>
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-2xl overflow-hidden shadow-xs">
            <div className="p-4 bg-[#EEF3EF] border-b border-[#D9DED8] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#527A5A]">
                  AFTER
                </span>
                <h3 className="text-sm font-bold text-[#202825]">
                  {pair.after.date}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#68736E]">
                {pair.after.assetId}
              </span>
            </div>

            <ImageWithFallback
              src={pair.after.imageUrl}
              alt={pair.after.label}
              aspectRatioClass="aspect-[4/3] sm:aspect-[16/11]"
              locationStamp={pair.location}
            />

            <div className="p-4 bg-[#FFFFFF]">
              <p className="text-xs text-[#68736E] leading-relaxed">
                {pair.after.notes}
              </p>
              <div className="mt-3 pt-3 border-t border-[#D9DED8] flex items-center justify-between text-[11px]">
                <span className="text-[#68736E]">Follow-up Evaluation Audit</span>
                <button
                  onClick={() => navigate(`/evidence/${pair.after.assetId}`)}
                  className="text-[#527A5A] font-semibold hover:underline"
                >
                  View follow-up asset →
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Interactive Split Slider Mode */
        <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono font-bold text-[#A96752]">
              BEFORE ({pair.before.date})
            </span>
            <span className="text-[#68736E]">Drag slider horizontally to reveal change</span>
            <span className="font-mono font-bold text-[#527A5A]">
              AFTER ({pair.after.date})
            </span>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#D9DED8] select-none">
            {/* Background: AFTER image */}
            <img
              src={pair.after.imageUrl}
              alt="After state"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Foreground: BEFORE image clipped */}
            <div
              style={{ width: `${sliderPosition}%` }}
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-xl"
            >
              <img
                src={pair.before.imageUrl}
                alt="Before state"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Divider Handle */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute inset-y-0 -ml-3 flex items-center justify-center pointer-events-none"
            >
              <div className="w-6 h-6 rounded-full bg-white text-[#202825] shadow-lg flex items-center justify-center text-xs font-bold">
                ↔
              </div>
            </div>

            {/* Interactive invisible slider input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>
        </div>
      )}

      {/* AI VISUAL ANALYSIS */}
      <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#D9DED8]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-bold">
              AI VISUAL ANALYSIS
            </span>
            <h3 className="text-lg font-bold text-[#202825] mt-0.5">
              Observable Changes & Signals
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#68736E] bg-[#F5F3ED] px-3 py-1.5 rounded-lg border border-[#D9DED8]">
            <AlertCircle className="w-3.5 h-3.5 text-[#527A5A] shrink-0" />
            <span>AI observations are based on visual evidence and are not a substitute for scientific field measurements.</span>
          </div>
        </div>

        {/* 4 Observations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pair.observations.map((obs) => (
            <div
              key={obs.category}
              className="p-5 bg-[#F5F3ED] rounded-xl border border-[#D9DED8] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#68736E] uppercase tracking-wider block mb-1">
                  {obs.category}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#527A5A]" />
                  <span className="text-sm font-bold text-[#202825]">
                    {obs.signal}
                  </span>
                </div>
                <p className="text-xs text-[#68736E] mt-2 leading-relaxed">
                  {obs.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D9DED8]/60 text-[11px] font-mono text-[#527A5A]">
                Visual Signal Verified
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EVIDENCE USED / TRACEABILITY SECTION */}
      <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-bold block">
              EVIDENCE USED
            </span>
            <h3 className="text-base font-bold text-[#202825]">
              {sourceEvidence.length} source assets substantiate this comparison
            </h3>
          </div>
          <button
            onClick={() => navigate('/evidence')}
            className="text-xs font-semibold text-[#527A5A] hover:underline flex items-center gap-1"
          >
            <span>View source evidence in library</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
          {sourceEvidence.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/evidence/${item.id}`)}
              className="bg-[#F5F3ED] rounded-xl border border-[#D9DED8] overflow-hidden cursor-pointer hover:border-[#527A5A] transition-colors group"
            >
              <ImageWithFallback
                src={item.thumbnailUrl}
                alt={item.title}
                aspectRatioClass="aspect-[4/3]"
                locationStamp={item.location}
              />
              <div className="p-3">
                <div className="text-[10px] font-mono text-[#68736E] truncate">
                  {item.assetId} · {item.date}
                </div>
                <h4 className="text-xs font-semibold text-[#202825] group-hover:text-[#527A5A] truncate mt-1">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
