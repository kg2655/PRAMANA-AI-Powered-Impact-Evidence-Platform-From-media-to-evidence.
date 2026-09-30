import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Database, Layers, Eye, BookOpen, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      step: '01',
      title: 'COLLECT',
      desc: 'Field teams upload photos and videos directly from the field with GPS coordinates, camera timestamps, and environmental contexts preserved in Cloudinary.',
      badge: 'Raw Ingest'
    },
    {
      step: '02',
      title: 'UNDERSTAND',
      desc: 'AI identifies activities, objects, locations and visual signals — distinguishing cleanup actions from baseline degradation without modifying original assets.',
      badge: 'Perceptual AI'
    },
    {
      step: '03',
      title: 'CONNECT',
      desc: 'Evidence is organized across projects, locations and timelines into a structured evidence index with permanent Cloudinary asset identifiers.',
      badge: 'Evidence Graph'
    },
    {
      step: '04',
      title: 'SHOW IMPACT',
      desc: 'Teams search, compare before-and-after conditions, and generate audit-grade impact stories with every statement linked to supporting evidence.',
      badge: 'Traceable Stories'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F3ED] text-[#202825]">
      {/* Top Navbar */}
      <nav className="border-b border-[#D9DED8] bg-[#FFFFFF]/90 backdrop-blur-xs sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#527A5A] text-white flex items-center justify-center font-bold text-xs tracking-tight">
              PR
            </div>
            <div>
              <span className="font-bold text-base tracking-widest text-[#202825]">PRAMĀṆA</span>
              <span className="text-[10px] text-[#68736E] uppercase tracking-wider block">
                Impact Evidence Platform
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-medium text-[#68736E] hover:text-[#202825] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="px-4 py-2 text-xs font-medium bg-[#527A5A] hover:bg-[#46694d] text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Explore the Platform</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-12 pb-16 md:pt-16 md:pb-24 max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#527A5A] bg-[#EEF3EF] px-3 py-1 rounded-md border border-[#527A5A]/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#527A5A]" />
            <span>AI-Powered Impact Evidence Platform</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#202825] leading-[1.12] mb-4">
            From media to evidence.
          </h1>

          <p className="font-editorial text-xl sm:text-2xl text-[#527A5A] italic mb-6">
            &ldquo;Every field story deserves evidence.&rdquo;
          </p>

          <p className="text-base sm:text-lg text-[#68736E] leading-relaxed max-w-2xl mb-8">
            PRAMĀṆA helps organizations understand, organize, compare and communicate thousands of field images and videos — while keeping every insight connected to its original evidence.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 text-sm font-semibold bg-[#202825] hover:bg-[#343e3a] text-white rounded-lg transition-colors flex items-center gap-2 shadow-xs"
            >
              <span>Explore the platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-3 text-sm font-medium border border-[#D9DED8] bg-[#FFFFFF] hover:bg-[#ECEBE3] text-[#202825] rounded-lg transition-colors"
            >
              See how it works
            </button>
          </div>
        </div>

        {/* Large Authentic Field Hero Image */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D9DED8] shadow-lg bg-[#ECEBE3]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80"
            alt="Field team and community volunteers conducting river restoration and riparian planting"
            aspectRatioClass="aspect-[16/9] md:aspect-[21/9]"
            locationStamp="Yamuna River Basin, Delhi"
            coordinates="28.6692° N, 77.2315° E"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#202825]/90 via-[#202825]/40 to-transparent p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-white/80">
                  Field Documentation Archive · Delhi Basin
                </span>
                <p className="text-base sm:text-lg font-medium text-white mt-1">
                  Vegetative buffer stabilization & shoreline debris recovery
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-white/80">
                <span>Asset ID: cld_impact_2026_1048</span>
                <span>·</span>
                <span>Audit Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Step Section */}
      <section id="how-it-works" className="px-6 py-16 bg-[#FFFFFF] border-y border-[#D9DED8]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#527A5A] font-semibold">
              The Evidence Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202825] mt-1.5">
              From raw field captures to indisputable evidence
            </h2>
            <p className="text-sm text-[#68736E] mt-2 leading-relaxed">
              We do not just store media. We help organizations understand the evidence inside it with complete traceability back to the Cloudinary source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-[#F5F3ED] border border-[#D9DED8] rounded-xl p-6 flex flex-col justify-between hover:border-[#527A5A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono font-bold text-[#527A5A]">{s.step}</span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#ECEBE3] text-[#68736E]">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#202825] tracking-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#68736E] leading-relaxed">{s.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D9DED8]/60 flex items-center gap-1.5 text-[11px] font-medium text-[#527A5A]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Cloudinary Provenance</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Quote / Philosophy */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <blockquote className="font-editorial text-2xl sm:text-3xl text-[#202825] leading-snug">
          &ldquo;When funders and communities ask what changed on the ground, the answer is not a vague statistic — it is visible, traceable evidence.&rdquo;
        </blockquote>
        <p className="text-xs uppercase tracking-widest font-mono text-[#68736E] mt-6">
          PRAMĀṆA · AI-Powered Impact Evidence Platform
        </p>

        <div className="mt-10">
          <button
            onClick={() => navigate('/dashboard')}
            className="px-8 py-3.5 text-sm font-semibold bg-[#527A5A] hover:bg-[#46694d] text-white rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>Enter Digital Field Office</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D9DED8] bg-[#FFFFFF] px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68736E]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#202825]">PRAMĀṆA</span>
            <span>·</span>
            <span>AI-Powered Impact Evidence Platform with Cloudinary Backbone</span>
          </div>
          <div>
            <span>From media to evidence</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
