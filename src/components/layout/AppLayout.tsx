import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderKanban,
  Library,
  Compass,
  GitCompare,
  BookOpen,
  Cpu,
  HelpCircle,
  Plus,
  Search,
  ExternalLink,
  Menu,
  X,
  Shield,
  Layers
} from 'lucide-react';
import { UploadAnalyzeModal } from '../media/UploadAnalyzeModal';
import { CloudinaryArchitectureModal } from '../media/CloudinaryArchitectureModal';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [archModalOpen, setArchModalOpen] = useState(false);
  const [headerSearch, setHeaderSearch] = useState('');

  const navItems = [
    { label: 'Overview', to: '/dashboard', icon: LayoutDashboard },
    { label: 'Projects', to: '/projects', icon: FolderKanban },
    { label: 'Evidence', to: '/evidence', icon: Library },
    { label: 'Explore', to: '/explore', icon: Compass },
    { label: 'Compare', to: '/compare', icon: GitCompare },
    { label: 'Stories', to: '/stories', icon: BookOpen }
  ];

  const handleHeaderSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (headerSearch.trim()) {
      navigate(`/explore?q=${encodeURIComponent(headerSearch.trim())}`);
      setHeaderSearch('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F5F3ED] text-[#202825]">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#FFFFFF] border-b border-[#D9DED8] sticky top-0 z-40">
        <NavLink to="/dashboard" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[#527A5A] text-white flex items-center justify-center font-bold text-xs tracking-tight">
            PR
          </div>
          <span className="font-bold text-sm tracking-wider text-[#202825]">PRAMĀṆA</span>
        </NavLink>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setUploadModalOpen(true)}
            className="p-1.5 rounded-lg bg-[#527A5A] text-white text-xs font-medium flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            <span className="text-[11px]">Upload</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#68736E] hover:text-[#202825] hover:bg-[#ECEBE3]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* LEFT SIDEBAR (Desktop 240px) */}
      <aside
        className={`fixed md:sticky top-0 h-screen w-[240px] shrink-0 bg-[#FFFFFF] border-r border-[#D9DED8] flex flex-col z-40 transition-transform duration-200 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 border-b border-[#D9DED8] flex items-center justify-between">
          <NavLink
            to="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded bg-[#527A5A] text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:bg-[#46694d] transition-colors tracking-tight">
              PR
            </div>
            <div>
              <span className="font-bold text-sm tracking-widest text-[#202825] block leading-none">
                PRAMĀṆA
              </span>
              <span className="text-[10px] text-[#527A5A] font-medium tracking-tight mt-1 block">
                From media to evidence
              </span>
            </div>
          </NavLink>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <div className="text-[10px] font-semibold text-[#68736E] uppercase tracking-wider px-3 pb-1">
            Workspace
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.to ||
              (item.to === '/dashboard' && location.pathname === '/') ||
              (item.to === '/projects' && location.pathname.startsWith('/projects/')) ||
              (item.to === '/evidence' && location.pathname.startsWith('/evidence/'));

            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-[#EEF3EF] text-[#527A5A]'
                    : 'text-[#68736E] hover:text-[#202825] hover:bg-[#F5F3ED]'
                }`}
              >
                <Icon className={`w-4 h-4 stroke-[1.75] ${isActive ? 'text-[#527A5A]' : 'text-[#68736E]'}`} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <div className="pt-4 pb-1">
            <div className="h-px bg-[#D9DED8] mx-2" />
          </div>

          <div className="text-[10px] font-semibold text-[#68736E] uppercase tracking-wider px-3 pb-1 pt-2">
            System & Media
          </div>

          <button
            onClick={() => {
              setArchModalOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-[#68736E] hover:text-[#202825] hover:bg-[#F5F3ED] transition-colors text-left"
          >
            <Cpu className="w-4 h-4 stroke-[1.75] text-[#4F7C86]" />
            <span className="flex-1">Cloudinary Pipeline</span>
            <span className="text-[9px] font-mono bg-[#4F7C86]/10 text-[#4F7C86] px-1.5 py-0.5 rounded">
              v1
            </span>
          </button>

          <NavLink
            to="/landing"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-[#68736E] hover:text-[#202825] hover:bg-[#F5F3ED] transition-colors"
          >
            <ExternalLink className="w-4 h-4 stroke-[1.75] text-[#68736E]" />
            <span>Public Landing</span>
          </NavLink>

          <button
            onClick={() => {
              alert('PRAMĀṆA Field Guide: From media to evidence. Use Overview to track projects, Evidence to inspect Cloudinary-backed source media, Compare to assess temporal change, and Stories to assemble traceable NGO audit dossiers.');
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-[#68736E] hover:text-[#202825] hover:bg-[#F5F3ED] transition-colors text-left"
          >
            <HelpCircle className="w-4 h-4 stroke-[1.75] text-[#68736E]" />
            <span>Field Help & Guide</span>
          </button>
        </div>

        {/* Cloudinary Integration Trust Ribbon */}
        <div className="p-3 mx-3 my-2 bg-[#F5F3ED] border border-[#D9DED8] rounded-lg">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-[#202825]">
            <Shield className="w-3.5 h-3.5 text-[#527A5A]" />
            <span>Cloudinary Verified</span>
          </div>
          <p className="text-[10px] text-[#68736E] mt-1 leading-snug">
            Media master files preserved with cryptographic hash & EXIF preservation.
          </p>
        </div>

        {/* User Profile at Bottom */}
        <div className="p-3 border-t border-[#D9DED8] bg-[#FFFFFF]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#ECEBE3] border border-[#D9DED8] flex items-center justify-center text-xs font-semibold text-[#527A5A]">
              KG
            </div>
            <div className="overflow-hidden flex-1">
              <p className="text-xs font-medium text-[#202825] truncate">Kannu Goyal</p>
              <p className="text-[11px] text-[#68736E] truncate">Lead Field Auditor</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA + TOP HEADER */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Content Header */}
        <header className="hidden md:flex items-center justify-between px-8 py-3.5 bg-[#FFFFFF] border-b border-[#D9DED8] sticky top-0 z-30">
          {/* Quick Search */}
          <form onSubmit={handleHeaderSearchSubmit} className="relative w-80 max-w-sm">
            <Search className="w-4 h-4 text-[#68736E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={headerSearch}
              onChange={(e) => setHeaderSearch(e.target.value)}
              placeholder="Search evidence or ask a field query..."
              className="w-full text-xs bg-[#F5F3ED] border border-[#D9DED8] rounded-lg pl-9 pr-3 py-2 text-[#202825] placeholder:text-[#68736E] focus:outline-none focus:border-[#527A5A] transition-colors"
            />
          </form>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setArchModalOpen(true)}
              className="text-xs font-medium text-[#4F7C86] hover:text-[#3e636b] px-3 py-1.5 rounded-lg border border-[#4F7C86]/30 bg-[#4F7C86]/5 transition-colors flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Architecture</span>
            </button>

            <button
              type="button"
              onClick={() => setUploadModalOpen(true)}
              className="text-xs font-medium bg-[#527A5A] hover:bg-[#46694d] text-white px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>+ Upload Evidence</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

      {/* Upload and AI Analysis simulation modal */}
      <UploadAnalyzeModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
      />

      {/* Cloudinary Architecture Modal */}
      <CloudinaryArchitectureModal
        isOpen={archModalOpen}
        onClose={() => setArchModalOpen(false)}
      />
    </div>
  );
};
