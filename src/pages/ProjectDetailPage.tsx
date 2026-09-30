import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Eye,
  GitCompare,
  BookOpen,
  Camera,
  Activity,
  FileCheck2,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  mockProjects,
  mockEvidenceItems,
  mockJournalEntries,
  mockFieldLocations,
  mockComparisonPairs
} from '../data/mockData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'evidence' | 'timeline' | 'locations'>('overview');
  const [selectedJournalId, setSelectedJournalId] = useState<string>('journal-02');

  const projectId = id || 'yamuna-restoration';
  const project = mockProjects.find((p) => p.id === projectId) || mockProjects[0];

  const projectEvidence = mockEvidenceItems.filter((e) => e.projectId === project.id);
  const comparisonPair = mockComparisonPairs.find((c) => c.projectId === project.id) || mockComparisonPairs[0];

  return (
    <div className="space-y-10">
      {/* Project Hero Banner */}
      <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-2xl overflow-hidden shadow-xs">
        <div className="relative">
          <ImageWithFallback
            src={project.coverImage}
            alt={project.title}
            aspectRatioClass="aspect-[21/9] md:aspect-[24/8]"
            locationStamp={`${project.location}, ${project.country}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#202825]/90 via-[#202825]/30 to-transparent flex items-end p-6 md:p-8">
            <div className="text-white max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-white/80 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#527A5A]" />
                <span>{project.location}, {project.country}</span>
                <span>·</span>
                <Calendar className="w-3.5 h-3.5" />
                <span>{project.period}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                {project.title}
              </h1>
              <p className="text-xs sm:text-sm text-white/80 mt-2 line-clamp-2 leading-relaxed">
                {project.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Project Key Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#D9DED8] bg-[#FFFFFF] border-t border-[#D9DED8]">
          <div className="p-4 sm:p-5 text-center">
            <span className="text-2xl sm:text-3xl font-bold font-sans tabular-nums text-[#202825] block">
              {project.assetCount}
            </span>
            <span className="text-xs text-[#68736E] mt-0.5 block">field assets</span>
          </div>
          <div className="p-4 sm:p-5 text-center">
            <span className="text-2xl sm:text-3xl font-bold font-sans tabular-nums text-[#202825] block">
              {project.fieldVisits}
            </span>
            <span className="text-xs text-[#68736E] mt-0.5 block">field visits</span>
          </div>
          <div className="p-4 sm:p-5 text-center">
            <span className="text-2xl sm:text-3xl font-bold font-sans tabular-nums text-[#202825] block">
              {project.activityTypes}
            </span>
            <span className="text-xs text-[#68736E] mt-0.5 block">activity types</span>
          </div>
          <div className="p-4 sm:p-5 text-center">
            <span className="text-2xl sm:text-3xl font-bold font-sans tabular-nums text-[#202825] block">
              {project.locationsCount}
            </span>
            <span className="text-xs text-[#68736E] mt-0.5 block">locations</span>
          </div>
        </div>

        {/* Compact Project Sub-Navigation */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#F5F3ED] border-t border-[#D9DED8] overflow-x-auto">
          <div className="flex items-center gap-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'evidence', label: `Evidence (${projectEvidence.length})` },
              { id: 'timeline', label: 'Field Journal' },
              { id: 'locations', label: 'Locations' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#FFFFFF] text-[#202825] shadow-xs'
                    : 'text-[#68736E] hover:text-[#202825]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-4">
            <button
              onClick={() => navigate('/compare')}
              className="text-xs font-medium text-[#202825] hover:text-[#527A5A] flex items-center gap-1.5"
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span>Compare</span>
            </button>
            <button
              onClick={() => navigate('/stories')}
              className="text-xs font-semibold text-[#527A5A] hover:text-[#46694d] flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Create Story</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-10">
          {/* Section A: Project Summary */}
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6 sm:p-8">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-semibold mb-2">
              Project Context & Scope
            </h2>
            <p className="text-base sm:text-lg text-[#202825] font-medium leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-[#D9DED8]">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#68736E] mb-2">
                  Documented Objectives
                </h4>
                <ul className="space-y-2 text-xs text-[#202825]">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#527A5A] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F5F3ED] rounded-xl p-4 border border-[#D9DED8] text-xs">
                <span className="text-[11px] font-mono text-[#68736E] block mb-1">
                  Coordinating Partner
                </span>
                <p className="font-semibold text-[#202825] text-sm">
                  {project.coordinatingPartner}
                </p>
                <p className="text-[#68736E] mt-2 leading-relaxed">
                  All field captures maintain strict cryptographic audit hashes in Cloudinary to protect data integrity for municipal environmental audits.
                </p>
              </div>
            </div>
          </div>

          {/* Section B: Field Journal (Clickable Timeline entries) */}
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-[#202825]">Field Journal</h2>
                <p className="text-xs text-[#68736E]">
                  Chronological documentary entries logged by field survey teams
                </p>
              </div>
              <button
                onClick={() => setActiveTab('timeline')}
                className="text-xs font-medium text-[#527A5A] hover:underline"
              >
                Expand detailed view →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockJournalEntries.map((j) => {
                const isSelected = selectedJournalId === j.id;
                return (
                  <div
                    key={j.id}
                    onClick={() => setSelectedJournalId(j.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#527A5A] bg-[#EEF3EF]'
                        : 'border-[#D9DED8] bg-[#F5F3ED] hover:bg-[#FFFFFF]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-[#527A5A]">
                          {j.displayDate}
                        </span>
                        <span className="text-[11px] font-mono text-[#68736E]">
                          {j.assetCount} assets
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-[#202825] mb-1">
                        {j.activityType}
                      </h4>
                      <p className="text-xs text-[#68736E] line-clamp-3 leading-relaxed">
                        {j.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#D9DED8]/60 flex items-center justify-between text-[11px]">
                      <span className="text-[#68736E] truncate max-w-[120px]">{j.location}</span>
                      <span className="text-[#527A5A] font-medium">Inspect</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section C & D: Evidence Highlights & Visible Change Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Visible Change Callout */}
            <div className="lg:col-span-1 bg-[#F5F3ED] border border-[#D9DED8] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#A96752] font-semibold">
                  Visible Change Detected
                </span>
                <h3 className="text-xl font-bold text-[#202825] mt-1 mb-3">
                  Before & After Comparative Audit
                </h3>
                <p className="text-xs text-[#68736E] leading-relaxed mb-4">
                  Visual evidence reveals substantial vegetative recovery and solid waste reduction between the 12 January baseline and the 18 June follow-up survey.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#D9DED8] flex justify-between">
                    <span className="text-[#68736E]">Baseline Date:</span>
                    <span className="font-mono text-[#202825]">12 Jan 2026</span>
                  </div>
                  <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#D9DED8] flex justify-between">
                    <span className="text-[#68736E]">Follow-up Date:</span>
                    <span className="font-mono text-[#202825]">18 Jun 2026</span>
                  </div>
                  <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#D9DED8] flex justify-between">
                    <span className="text-[#68736E]">Linked Source Media:</span>
                    <span className="font-mono text-[#527A5A]">12 Verified Assets</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/compare')}
                className="mt-6 w-full py-2.5 px-4 text-xs font-semibold bg-[#202825] hover:bg-[#343e3a] text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <GitCompare className="w-4 h-4" />
                <span>Launch Interactive Comparison</span>
              </button>
            </div>

            {/* Evidence Highlights (Selected Media Cards) */}
            <div className="lg:col-span-2 bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-[#202825]">Selected Field Evidence</h3>
                  <p className="text-xs text-[#68736E]">
                    Curated documentary captures from the Yamuna field ledger
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('evidence')}
                  className="text-xs font-medium text-[#527A5A] hover:underline"
                >
                  View all assets ({projectEvidence.length}) →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectEvidence.slice(0, 2).map((ev) => (
                  <div
                    key={ev.id}
                    onClick={() => navigate(`/evidence/${ev.id}`)}
                    className="border border-[#D9DED8] rounded-lg overflow-hidden hover:border-[#527A5A] transition-all cursor-pointer group"
                  >
                    <ImageWithFallback
                      src={ev.thumbnailUrl}
                      alt={ev.title}
                      aspectRatioClass="aspect-[16/10]"
                      locationStamp={ev.location}
                    />
                    <div className="p-3">
                      <div className="flex items-center justify-between text-[11px] text-[#68736E] mb-1">
                        <span>{ev.activity}</span>
                        <span className="font-mono">{ev.date}</span>
                      </div>
                      <h4 className="text-xs font-semibold text-[#202825] group-hover:text-[#527A5A] transition-colors truncate">
                        {ev.title}
                      </h4>
                      <p className="text-[11px] text-[#68736E] mt-1 line-clamp-1">
                        {ev.aiDescription}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section E: Evidence-Backed Observations */}
          <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-semibold">
                  Evidence-Backed Observations
                </span>
                <h3 className="text-lg font-bold text-[#202825] mt-1">
                  AI Visual Signals & Synthesis
                </h3>
              </div>
              <div className="bg-[#ECEBE3] px-3 py-1 rounded-md text-[11px] text-[#68736E] flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#527A5A]" />
                <span>Visual evidence suggests · Not a scientific measurement</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#F5F3ED] rounded-xl border border-[#D9DED8] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#527A5A] block mb-1">Observation 01</span>
                  <p className="text-xs font-medium text-[#202825] leading-relaxed">
                    &ldquo;Community cleanup activity documented across multiple field visits with consistent volunteer participation.&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9DED8] flex items-center justify-between text-[11px]">
                  <span className="text-[#68736E]">12 source assets</span>
                  <Link to="/evidence/ev-01" className="text-[#527A5A] font-semibold hover:underline">
                    View evidence →
                  </Link>
                </div>
              </div>

              <div className="p-4 bg-[#F5F3ED] rounded-xl border border-[#D9DED8] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#527A5A] block mb-1">Observation 02</span>
                  <p className="text-xs font-medium text-[#202825] leading-relaxed">
                    &ldquo;Visible vegetation increase detected in selected comparison areas along the Wazirabad floodplain buffer.&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9DED8] flex items-center justify-between text-[11px]">
                  <span className="text-[#68736E]">8 source assets</span>
                  <Link to="/compare" className="text-[#527A5A] font-semibold hover:underline">
                    View evidence →
                  </Link>
                </div>
              </div>

              <div className="p-4 bg-[#F5F3ED] rounded-xl border border-[#D9DED8] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#527A5A] block mb-1">Observation 03</span>
                  <p className="text-xs font-medium text-[#202825] leading-relaxed">
                    &ldquo;Repeated field documentation shows continued community patrol presence and negligible fresh dumping.&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9DED8] flex items-center justify-between text-[11px]">
                  <span className="text-[#68736E]">15 source assets</span>
                  <Link to="/evidence/ev-18" className="text-[#527A5A] font-semibold hover:underline">
                    View evidence →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Evidence Grid */}
      {activeTab === 'evidence' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#202825]">
              Field Evidence for {project.title}
            </h3>
            <span className="text-xs text-[#68736E] font-mono">
              {projectEvidence.length} assets recorded
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectEvidence.map((ev) => (
              <div
                key={ev.id}
                onClick={() => navigate(`/evidence/${ev.id}`)}
                className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl overflow-hidden hover:border-[#527A5A] hover:shadow-xs transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={ev.thumbnailUrl}
                    alt={ev.title}
                    aspectRatioClass="aspect-[4/3]"
                    locationStamp={ev.location}
                  />
                  <span className="absolute bottom-2 right-2 bg-[#202825]/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {ev.evidenceType}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-[#68736E] flex items-center justify-between mb-1">
                      <span>{ev.location}</span>
                      <span className="font-mono">{ev.date}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#202825] group-hover:text-[#527A5A] transition-colors">
                      {ev.title}
                    </h4>
                    <p className="text-xs text-[#68736E] mt-1.5 line-clamp-2 leading-relaxed">
                      {ev.aiDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D9DED8] flex items-center justify-between text-xs">
                    <span className="text-[#68736E] font-mono text-[11px]">
                      {ev.assetId}
                    </span>
                    <span className="text-[#527A5A] font-medium group-hover:underline">
                      View details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Field Journal Detailed Timeline */}
      {activeTab === 'timeline' && (
        <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6 sm:p-8 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#202825]">Field Journal Archive</h3>
            <p className="text-xs text-[#68736E] mt-1">
              Field observations and audit logs arranged in temporal sequence
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#D9DED8]">
            {mockJournalEntries.map((j) => (
              <div key={j.id} className="relative flex items-start gap-6 pl-1">
                <div className="w-6 h-6 rounded-full bg-[#527A5A] text-white flex items-center justify-center shrink-0 z-10 text-xs font-mono mt-1 ring-4 ring-[#FFFFFF]">
                  ✓
                </div>
                <div className="bg-[#F5F3ED] border border-[#D9DED8] rounded-xl p-6 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#527A5A]">
                      {j.displayDate}
                    </span>
                    <span className="text-xs font-mono text-[#68736E]">
                      {j.assetCount} assets documented
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#202825] mb-1">{j.title}</h4>
                  <p className="text-xs text-[#68736E] font-mono mb-3">{j.location}</p>
                  <p className="text-xs sm:text-sm text-[#202825] leading-relaxed">
                    {j.summary}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#D9DED8] flex items-center gap-3">
                    <button
                      onClick={() => navigate('/evidence')}
                      className="text-xs font-semibold text-[#527A5A] hover:underline flex items-center gap-1"
                    >
                      <span>Inspect {j.assetCount} source assets</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Locations (Map Visualization) */}
      {activeTab === 'locations' && (
        <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-[#202825]">Field Locations & Monitoring Stations</h3>
            <p className="text-xs text-[#68736E] mt-1">
              Geographic coordinates and localized evidence clusters across the Delhi NCR corridor
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Schematic Map Representation */}
            <div className="lg:col-span-2 bg-[#F5F3ED] border border-[#D9DED8] rounded-xl p-6 relative overflow-hidden min-h-[340px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-[#68736E]">
                <span className="font-mono">DELHI NCR BASIN SCHEMATIC</span>
                <span>Coordinates: 28.6692° N, 77.2315° E</span>
              </div>

              {/* Grid / Schematic Plot */}
              <div className="my-8 relative h-48 border border-dashed border-[#D9DED8] rounded-lg bg-[#ECEBE3]/40 flex items-center justify-center">
                <div className="absolute top-8 left-1/4 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-[#527A5A] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                    1
                  </div>
                  <span className="text-[11px] font-bold text-[#202825] mt-1">Delhi Riverbank</span>
                  <span className="text-[10px] text-[#68736E]">128 assets</span>
                </div>

                <div className="absolute bottom-10 right-1/3 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-[#4F7C86] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                    2
                  </div>
                  <span className="text-[11px] font-bold text-[#202825] mt-1">Noida Marshaling</span>
                  <span className="text-[10px] text-[#68736E]">54 assets</span>
                </div>

                <div className="absolute top-12 right-12 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-[#A96752] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                    3
                  </div>
                  <span className="text-[11px] font-bold text-[#202825] mt-1">Ghaziabad Center</span>
                  <span className="text-[10px] text-[#68736E]">65 assets</span>
                </div>
              </div>

              <div className="text-[11px] text-[#68736E]">
                Note: GPS coordinates extracted automatically from Cloudinary master EXIF headers upon mobile ingest.
              </div>
            </div>

            {/* Location Cards */}
            <div className="space-y-3">
              {mockFieldLocations.map((loc, idx) => (
                <div key={loc.id} className="p-4 bg-[#F5F3ED] border border-[#D9DED8] rounded-xl">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-[#527A5A] font-bold">Station 0{idx + 1}</span>
                    <span className="font-mono text-[#202825] font-semibold">{loc.assets} assets</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#202825]">{loc.name}</h4>
                  <div className="text-[11px] text-[#68736E] mt-1 space-y-0.5 font-mono">
                    <p>{loc.lat}° N, {loc.lng}° E</p>
                    <p>{loc.activities} activities · {loc.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
