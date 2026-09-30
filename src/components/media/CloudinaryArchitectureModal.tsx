import React from 'react';
import { X, Database, Layers, ArrowRight, ShieldCheck, FileText, Cpu, Eye, ExternalLink } from 'lucide-react';
import { cloudinaryService, cloudinaryConfig } from '../../services/cloudinaryService';

interface CloudinaryArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CloudinaryArchitectureModal: React.FC<CloudinaryArchitectureModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const architecture = cloudinaryService.getArchitectureOverview();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#202825]/45 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl max-w-2xl w-full p-6 md:p-8 shadow-2xl my-8">
        <div className="flex items-start justify-between pb-4 border-b border-[#D9DED8]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#4F7C86] font-semibold">
              Platform Architecture · Cloudinary Backbone
            </span>
            <h3 className="text-xl font-semibold text-[#202825] mt-1">
              Evidence Intelligence & Traceability Pipeline
            </h3>
            <p className="text-xs text-[#68736E] mt-1">
              How raw field media transforms into structured, queryable, and verifiable impact narratives.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#68736E] hover:text-[#202825] hover:bg-[#ECEBE3] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Pipeline flow */}
        <div className="mt-6 bg-[#F5F3ED] border border-[#D9DED8] rounded-xl p-4 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[520px] text-xs font-medium text-[#202825]">
            <div className="flex flex-col items-center text-center p-2 rounded-lg bg-[#FFFFFF] border border-[#D9DED8] w-24">
              <Database className="w-4 h-4 text-[#527A5A] mb-1" />
              <span>RAW MEDIA</span>
              <span className="text-[9px] text-[#68736E]">Field Uploads</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#68736E] shrink-0" />
            <div className="flex flex-col items-center text-center p-2 rounded-lg bg-[#FFFFFF] border border-[#4F7C86] w-28">
              <Cpu className="w-4 h-4 text-[#4F7C86] mb-1" />
              <span>CLOUDINARY</span>
              <span className="text-[9px] text-[#68736E]">Transform & AI</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#68736E] shrink-0" />
            <div className="flex flex-col items-center text-center p-2 rounded-lg bg-[#FFFFFF] border border-[#D9DED8] w-24">
              <Layers className="w-4 h-4 text-[#B38A4A] mb-1" />
              <span>EVIDENCE</span>
              <span className="text-[9px] text-[#68736E]">Tags & Index</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#68736E] shrink-0" />
            <div className="flex flex-col items-center text-center p-2 rounded-lg bg-[#FFFFFF] border border-[#D9DED8] w-24">
              <Eye className="w-4 h-4 text-[#A96752] mb-1" />
              <span>COMPARE</span>
              <span className="text-[9px] text-[#68736E]">Before / After</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#68736E] shrink-0" />
            <div className="flex flex-col items-center text-center p-2 rounded-lg bg-[#FFFFFF] border border-[#527A5A] w-24">
              <FileText className="w-4 h-4 text-[#527A5A] mb-1" />
              <span>STORIES</span>
              <span className="text-[9px] text-[#68736E]">Audit Reports</span>
            </div>
          </div>
        </div>

        {/* Cloudinary Config Details */}
        <div className="mt-6 border border-[#D9DED8] rounded-xl overflow-hidden text-xs">
          <div className="bg-[#ECEBE3] px-4 py-2.5 font-medium text-[#202825] flex items-center justify-between">
            <span>Cloudinary Service Abstraction Parameters</span>
            <span className="text-[11px] font-mono text-[#68736E]">Client-Safe SDK Interface</span>
          </div>
          <div className="p-4 space-y-3 bg-[#FFFFFF]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="text-[#68736E] block mb-0.5">Configured Cloud Name:</span>
                <code className="text-[#202825] bg-[#F5F3ED] px-2 py-1 rounded text-[11px] border border-[#D9DED8] inline-block font-mono">
                  {cloudinaryConfig.cloudName}
                </code>
              </div>
              <div>
                <span className="text-[#68736E] block mb-0.5">Upload Preset:</span>
                <code className="text-[#202825] bg-[#F5F3ED] px-2 py-1 rounded text-[11px] border border-[#D9DED8] inline-block font-mono">
                  {cloudinaryConfig.uploadPreset}
                </code>
              </div>
            </div>
            <div>
              <span className="text-[#68736E] block mb-0.5">Deterministic Transformation Presets:</span>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="bg-[#F5F3ED] p-2 rounded border border-[#D9DED8]">
                  <span className="font-medium text-[#202825] block">Web Delivery</span>
                  <code className="text-[10px] text-[#527A5A] font-mono">f_auto,q_auto,w_1200</code>
                </div>
                <div className="bg-[#F5F3ED] p-2 rounded border border-[#D9DED8]">
                  <span className="font-medium text-[#202825] block">Smart Thumbnail Crop</span>
                  <code className="text-[10px] text-[#527A5A] font-mono">c_fill,g_auto,w_400,h_300</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Stages */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#202825]">
            Traceability & Integrity Guarantees
          </h4>
          <div className="space-y-2.5">
            {architecture.stages.map((stage) => (
              <div
                key={stage.step}
                className="flex items-start gap-3 p-3 bg-[#F5F3ED]/70 rounded-lg border border-[#D9DED8]"
              >
                <span className="text-xs font-mono font-bold text-[#527A5A] shrink-0 mt-0.5">
                  {stage.step}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#202825]">{stage.name}</span>
                    <span className="text-[11px] text-[#4F7C86] font-mono">· {stage.service}</span>
                  </div>
                  <p className="text-xs text-[#68736E] mt-0.5 leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#D9DED8] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#527A5A]">
            <ShieldCheck className="w-4 h-4" />
            <span>Master files remain tamper-evident in Cloudinary archive</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-[#202825] hover:bg-[#343e3a] text-white rounded-lg transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
