import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, X, ArrowRight, Camera, Video, Sparkles, MapPin, Calendar } from 'lucide-react';
import { mockEvidenceItems, mockProjects } from '../data/mockData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { EvidenceItem } from '../types';

export const EvidenceLibraryPage: React.FC = () => {
  const navigate = useNavigate();

  // Primary tab filter
  const [mediaTypeFilter, setMediaTypeFilter] = useState<'all' | 'image' | 'video' | 'before_after'>('all');

  // Search input
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Dropdown filters
  const [selectedProject, setSelectedProject] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedActivity, setSelectedActivity] = useState<string>('all');
  const [selectedEvidenceType, setSelectedEvidenceType] = useState<string>('all');

  // Distinct filter options
  const locations = useMemo(() => {
    return Array.from(new Set(mockEvidenceItems.map((e) => e.location)));
  }, []);

  const activities = useMemo(() => {
    return Array.from(new Set(mockEvidenceItems.map((e) => e.activity)));
  }, []);

  const evidenceTypes = ['Baseline', 'Intervention', 'Monitoring', 'Community', 'Follow-up'];

  // Filtered evidence items
  const filteredEvidence = useMemo(() => {
    return mockEvidenceItems.filter((item) => {
      // Primary filter
      if (mediaTypeFilter === 'image' && item.mediaType !== 'image') return false;
      if (mediaTypeFilter === 'video' && item.mediaType !== 'video') return false;
      if (mediaTypeFilter === 'before_after' && !item.beforeAfterPairId) return false;

      // Project filter
      if (selectedProject !== 'all' && item.projectId !== selectedProject) return false;

      // Location filter
      if (selectedLocation !== 'all' && item.location !== selectedLocation) return false;

      // Activity filter
      if (selectedActivity !== 'all' && item.activity !== selectedActivity) return false;

      // Evidence type
      if (selectedEvidenceType !== 'all' && item.evidenceType !== selectedEvidenceType) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        const matchesLoc = item.location.toLowerCase().includes(q);
        const matchesAssetId = item.assetId.toLowerCase().includes(q);
        return matchesTitle || matchesDesc || matchesTags || matchesLoc || matchesAssetId;
      }

      return true;
    });
  }, [
    mediaTypeFilter,
    selectedProject,
    selectedLocation,
    selectedActivity,
    selectedEvidenceType,
    searchQuery
  ]);

  const hasActiveFilters =
    selectedProject !== 'all' ||
    selectedLocation !== 'all' ||
    selectedActivity !== 'all' ||
    selectedEvidenceType !== 'all' ||
    searchQuery.trim() !== '' ||
    mediaTypeFilter !== 'all';

  const handleResetFilters = () => {
    setMediaTypeFilter('all');
    setSelectedProject('all');
    setSelectedLocation('all');
    setSelectedActivity('all');
    setSelectedEvidenceType('all');
    setSearchQuery('');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-2 border-b border-[#D9DED8]">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#202825] tracking-tight">
          Evidence Library
        </h1>
        <p className="text-sm text-[#68736E] mt-1">
          1,284 pieces of field evidence, organized by project, place and time.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-5 space-y-4">
        {/* Large Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#68736E] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your evidence by activity, tag, location, or Cloudinary asset ID..."
            className="w-full text-sm bg-[#F5F3ED] border border-[#D9DED8] rounded-lg pl-10 pr-4 py-2.5 text-[#202825] placeholder:text-[#68736E] focus:outline-none focus:border-[#527A5A]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#68736E] hover:text-[#202825]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Tab Controls & Dropdowns */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#D9DED8]/60">
          {/* Media Type Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#ECEBE3] rounded-lg">
            {[
              { id: 'all', label: 'All Evidence' },
              { id: 'image', label: 'Images' },
              { id: 'video', label: 'Videos' },
              { id: 'before_after', label: 'Before / After' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMediaTypeFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  mediaTypeFilter === tab.id
                    ? 'bg-[#FFFFFF] text-[#202825] shadow-xs'
                    : 'text-[#68736E] hover:text-[#202825]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Secondary Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Project */}
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="bg-[#F5F3ED] border border-[#D9DED8] rounded-md px-2.5 py-1.5 text-[#202825] focus:outline-none focus:border-[#527A5A]"
            >
              <option value="all">All Projects</option>
              {mockProjects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>

            {/* Location */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-[#F5F3ED] border border-[#D9DED8] rounded-md px-2.5 py-1.5 text-[#202825] focus:outline-none focus:border-[#527A5A]"
            >
              <option value="all">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            {/* Activity */}
            <select
              value={selectedActivity}
              onChange={(e) => setSelectedActivity(e.target.value)}
              className="bg-[#F5F3ED] border border-[#D9DED8] rounded-md px-2.5 py-1.5 text-[#202825] focus:outline-none focus:border-[#527A5A]"
            >
              <option value="all">All Activities</option>
              {activities.map((act) => (
                <option key={act} value={act}>
                  {act}
                </option>
              ))}
            </select>

            {/* Evidence Type */}
            <select
              value={selectedEvidenceType}
              onChange={(e) => setSelectedEvidenceType(e.target.value)}
              className="bg-[#F5F3ED] border border-[#D9DED8] rounded-md px-2.5 py-1.5 text-[#202825] focus:outline-none focus:border-[#527A5A]"
            >
              <option value="all">All Stages</option>
              {evidenceTypes.map((et) => (
                <option key={et} value={et}>
                  {et}
                </option>
              ))}
            </select>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="px-2.5 py-1.5 text-[#68736E] hover:text-[#202825] underline text-[11px]"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between text-xs text-[#68736E] px-1">
        <span>
          Showing <strong className="text-[#202825]">{filteredEvidence.length}</strong> verified field assets
        </span>
        <span className="font-mono text-[11px]">Cloudinary Master Sync Active</span>
      </div>

      {/* Evidence Cards Grid */}
      {filteredEvidence.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvidence.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/evidence/${item.id}`)}
              className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl overflow-hidden hover:border-[#527A5A] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Media Thumbnail */}
                <div className="relative">
                  <ImageWithFallback
                    src={item.thumbnailUrl}
                    alt={item.title}
                    aspectRatioClass="aspect-[4/3]"
                    locationStamp={item.location}
                    coordinates={item.coordinates}
                  />

                  {/* Clean unboxed stage watermark */}
                  <div className="absolute top-2.5 left-2.5 bg-[#FFFFFF]/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono text-[#202825] border border-[#D9DED8]">
                    {item.evidenceType}
                  </div>

                  {item.beforeAfterPairId && (
                    <div className="absolute top-2.5 right-2.5 bg-[#527A5A] text-white px-2 py-0.5 rounded text-[10px] font-mono font-medium">
                      B/A Pair
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-4">
                  {/* Minimal metadata: Clean unboxed text with typographic separators */}
                  <div className="flex items-center gap-1.5 text-xs text-[#68736E] mb-1">
                    <span>{item.activity}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{item.date}</span>
                  </div>

                  <h3 className="text-sm font-bold text-[#202825] group-hover:text-[#527A5A] transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#68736E] mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* AI Tags unboxed with bullet separators */}
                  <div className="mt-3 text-[11px] text-[#68736E] truncate">
                    <span className="text-[#202825] font-medium">AI tags: </span>
                    {item.tags.slice(0, 4).join(' · ')}
                  </div>
                </div>
              </div>

              {/* Card Footer with hover reveal */}
              <div className="px-4 py-3 border-t border-[#D9DED8] bg-[#F5F3ED]/40 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-[#68736E] truncate max-w-[120px]">
                  {item.assetId}
                </span>
                <span className="text-[#527A5A] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View evidence</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-12 text-center max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#ECEBE3] flex items-center justify-center mx-auto text-[#68736E] mb-3">
            <Camera className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#202825]">No field evidence matches your filter</h3>
          <p className="text-xs text-[#68736E] mt-1 mb-4 leading-relaxed">
            Try adjusting your search query, location, or activity selections to view available field documentation.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 text-xs font-semibold bg-[#202825] hover:bg-[#343e3a] text-white rounded-lg transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};
