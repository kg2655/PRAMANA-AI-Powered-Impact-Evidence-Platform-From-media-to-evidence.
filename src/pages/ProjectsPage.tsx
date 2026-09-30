import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight, Search, Calendar, Layers, Activity } from 'lucide-react';
import { mockProjects } from '../data/mockData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { ProjectCategory } from '../types';

export const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'restoration', label: 'River & Forest Recovery' },
    { id: 'marine', label: 'Water Access' },
    { id: 'energy', label: 'Solar & Clean Energy' },
    { id: 'infrastructure', label: 'Waste Infrastructure' }
  ];

  const filteredProjects = mockProjects.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#D9DED8]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#202825] tracking-tight">
            Field Projects
          </h1>
          <p className="text-sm text-[#68736E] mt-1">
            Active environmental and community field initiatives cataloguing photographic and sensor evidence.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#ECEBE3] rounded-lg overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === c.id
                  ? 'bg-[#FFFFFF] text-[#202825] shadow-xs'
                  : 'text-[#68736E] hover:text-[#202825]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#68736E] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter projects by title or state..."
            className="w-full text-xs bg-[#FFFFFF] border border-[#D9DED8] rounded-lg pl-9 pr-3 py-2 text-[#202825] placeholder:text-[#68736E] focus:outline-none focus:border-[#527A5A]"
          />
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          return (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl overflow-hidden hover:border-[#527A5A] hover:shadow-md transition-all cursor-pointer flex flex-col group"
            >
              {/* Cover Image */}
              <div className="relative">
                <ImageWithFallback
                  src={project.coverImage}
                  alt={project.title}
                  aspectRatioClass="aspect-[16/10]"
                  locationStamp={project.location}
                />
                <div
                  style={{ borderLeftColor: project.accentColor }}
                  className="absolute top-3 left-3 bg-[#FFFFFF]/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono font-medium text-[#202825] border-l-3 border border-[#D9DED8]"
                >
                  {project.period}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#68736E] mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#527A5A]" />
                    <span>{project.location}, {project.state}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#202825] group-hover:text-[#527A5A] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#68736E] mt-2 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics ribbon */}
                <div className="mt-6 pt-4 border-t border-[#D9DED8]">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
                    <div className="bg-[#F5F3ED] p-2 rounded-lg">
                      <span className="font-mono font-bold text-[#202825] block">
                        {project.assetCount}
                      </span>
                      <span className="text-[10px] text-[#68736E]">Assets</span>
                    </div>
                    <div className="bg-[#F5F3ED] p-2 rounded-lg">
                      <span className="font-mono font-bold text-[#202825] block">
                        {project.fieldVisits}
                      </span>
                      <span className="text-[10px] text-[#68736E]">Visits</span>
                    </div>
                    <div className="bg-[#F5F3ED] p-2 rounded-lg">
                      <span className="font-mono font-bold text-[#202825] block">
                        {project.locationsCount}
                      </span>
                      <span className="text-[10px] text-[#68736E]">Stations</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#68736E] truncate max-w-[150px]">
                      {project.coordinatingPartner}
                    </span>
                    <span className="text-[#527A5A] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Enter Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
