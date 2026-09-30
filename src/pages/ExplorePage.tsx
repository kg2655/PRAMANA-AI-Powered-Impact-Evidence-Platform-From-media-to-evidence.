import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Sparkles, ArrowRight, CornerDownRight, CheckCircle2, Filter, Layers, Camera } from 'lucide-react';
import { searchService, sampleQueries, InterpretedQuery, SearchResult } from '../services/searchService';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const ExplorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialQuery = searchParams.get('q') || 'Show cleanup activities around Delhi from March';
  const [inputQuery, setInputQuery] = useState(initialQuery);
  const [activeQuery, setActiveQuery] = useState(initialQuery);

  const [interpreted, setInterpreted] = useState<InterpretedQuery | null>(null);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const executeSearch = (queryStr: string) => {
    setActiveQuery(queryStr);
    setIsSearching(true);

    setTimeout(() => {
      const parsed = searchService.interpretQuery(queryStr);
      const searchRes = searchService.searchEvidence(queryStr);
      setInterpreted(parsed);
      setResults(searchRes);
      setIsSearching(false);
      setSearchParams({ q: queryStr });
    }, 200);
  };

  useEffect(() => {
    executeSearch(initialQuery);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputQuery.trim()) {
      executeSearch(inputQuery.trim());
    }
  };

  const handleSampleClick = (q: string) => {
    setInputQuery(q);
    executeSearch(q);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="pb-2 border-b border-[#D9DED8]">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#202825] tracking-tight">
          Explore your evidence
        </h1>
        <p className="text-sm text-[#68736E] mt-1">
          Ask questions in natural language. Find the evidence behind your projects.
        </p>
      </div>

      {/* Prominent Semantic Search Input */}
      <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <form onSubmit={handleFormSubmit} className="relative">
          <Search className="w-5 h-5 text-[#527A5A] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Ask anything, e.g. Show cleanup activities around Delhi from March..."
            className="w-full text-sm sm:text-base bg-[#F5F3ED] border border-[#D9DED8] rounded-xl pl-12 pr-28 py-3.5 text-[#202825] placeholder:text-[#68736E] focus:outline-none focus:border-[#527A5A] transition-colors"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 text-xs font-semibold bg-[#527A5A] hover:bg-[#46694d] text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <span>Search</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Suggested Queries */}
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#68736E] block mb-2">
            Suggested field queries:
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleQueries.map((sq) => (
              <button
                key={sq}
                type="button"
                onClick={() => handleSampleClick(sq)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors text-left ${
                  activeQuery === sq
                    ? 'border-[#527A5A] bg-[#EEF3EF] text-[#527A5A] font-medium'
                    : 'border-[#D9DED8] bg-[#F5F3ED] hover:bg-[#ECEBE3] text-[#202825]'
                }`}
              >
                &ldquo;{sq}&rdquo;
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* UNDERSTOOD AS PANEL */}
      {interpreted && (
        <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9DED8]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#527A5A]" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-bold">
                UNDERSTOOD AS
              </h3>
            </div>
            <span className="text-xs text-[#68736E] font-mono">
              Semantic Query Translation
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-[#F5F3ED] rounded-lg border border-[#D9DED8]">
              <span className="text-[11px] font-mono text-[#68736E] block mb-1">Activity</span>
              <p className="font-semibold text-[#202825]">
                {interpreted.activity || 'All Activities'}
              </p>
            </div>

            <div className="p-3 bg-[#F5F3ED] rounded-lg border border-[#D9DED8]">
              <span className="text-[11px] font-mono text-[#68736E] block mb-1">Location</span>
              <p className="font-semibold text-[#202825]">
                {interpreted.location || 'All Monitored Locations'}
              </p>
            </div>

            <div className="p-3 bg-[#F5F3ED] rounded-lg border border-[#D9DED8]">
              <span className="text-[11px] font-mono text-[#68736E] block mb-1">Time</span>
              <p className="font-semibold text-[#202825]">
                {interpreted.timeframe || 'All Seasons'}
              </p>
            </div>

            <div className="p-3 bg-[#F5F3ED] rounded-lg border border-[#D9DED8]">
              <span className="text-[11px] font-mono text-[#68736E] block mb-1">Media</span>
              <p className="font-semibold text-[#202825]">
                {interpreted.mediaType || 'Images + Videos'}
              </p>
            </div>
          </div>

          {interpreted.detectedKeywords.length > 0 && (
            <div className="pt-1 text-xs text-[#68736E] flex items-center gap-2">
              <span className="font-medium text-[#202825]">Extracted signals:</span>
              <span>{interpreted.detectedKeywords.join(' · ')}</span>
            </div>
          )}
        </div>
      )}

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-[#68736E] px-1">
        <div>
          <span className="text-base font-bold text-[#202825] font-sans mr-2">
            {results.length} relevant results
          </span>
          <span>matched against Cloudinary metadata index</span>
        </div>
        <span className="font-mono text-[11px]">Ranked by semantic proximity</span>
      </div>

      {/* Semantic Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {results.map(({ item, matchScore, matchReasons }) => (
          <div
            key={item.id}
            onClick={() => navigate(`/evidence/${item.id}`)}
            className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl overflow-hidden hover:border-[#527A5A] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="relative">
                <ImageWithFallback
                  src={item.thumbnailUrl}
                  alt={item.title}
                  aspectRatioClass="aspect-[4/3]"
                  locationStamp={item.location}
                  coordinates={item.coordinates}
                />
                <div className="absolute top-2.5 left-2.5 bg-[#FFFFFF]/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono text-[#202825] border border-[#D9DED8]">
                  {matchScore}% Match
                </div>
              </div>

              <div className="p-4">
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
                  {item.aiDescription}
                </p>

                {/* Match Reason pills */}
                <div className="mt-3 p-2 bg-[#F5F3ED] rounded-lg border border-[#D9DED8]/60 text-[11px] text-[#527A5A]">
                  <span className="font-medium text-[#202825]">Semantic Hit: </span>
                  {matchReasons[0]}
                </div>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-[#D9DED8] bg-[#F5F3ED]/40 flex items-center justify-between text-xs">
              <span className="font-mono text-[10px] text-[#68736E]">
                {item.assetId}
              </span>
              <span className="text-[#527A5A] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Inspect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
