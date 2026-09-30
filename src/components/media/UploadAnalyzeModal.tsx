import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, ArrowRight, ShieldCheck, Database, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UploadAnalyzeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
}

export const UploadAnalyzeModal: React.FC<UploadAnalyzeModalProps> = ({
  isOpen,
  onClose,
  onComplete
}) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState('yamuna-restoration');

  const steps = [
    {
      title: 'Reading media',
      detail: 'Extracting EXIF geodata, camera focal data, and Cloudinary master hash',
      icon: Database
    },
    {
      title: 'Identifying visual signals',
      detail: 'Detecting vegetative density, shoreline waste clusters, and worker presence',
      icon: Layers
    },
    {
      title: 'Generating metadata',
      detail: 'Assigning normalized taxonomy, contextual tags, and confidence scores',
      icon: ShieldCheck
    },
    {
      title: 'Linking evidence',
      detail: 'Matching GPS baselines, project timelines, and before/after pairs',
      icon: CheckCircle2
    }
  ];

  const handleStartAnalysis = () => {
    setIsProcessing(true);
    setCurrentStep(1);
  };

  useEffect(() => {
    if (!isProcessing) return;

    if (currentStep >= 1 && currentStep <= 4) {
      const timer = setTimeout(() => {
        if (currentStep === 4) {
          setIsProcessing(false);
          setIsFinished(true);
        } else {
          setCurrentStep((prev) => prev + 1);
        }
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [isProcessing, currentStep]);

  if (!isOpen) return null;

  const handleViewEvidence = () => {
    onClose();
    if (onComplete) onComplete();
    navigate('/evidence');
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsProcessing(false);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#202825]/40 backdrop-blur-xs p-4">
      <div className="bg-[#FFFFFF] border border-[#D9DED8] rounded-xl max-w-xl w-full p-6 md:p-8 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-[#D9DED8]">
          <div>
            <h3 className="text-lg font-semibold text-[#202825]">
              {isFinished ? 'Analysis Complete' : 'Ingest & Analyze Field Evidence'}
            </h3>
            <p className="text-xs text-[#68736E] mt-0.5">
              Simulated Cloudinary asset ingestion & AI evidence structuring
            </p>
          </div>
          <button
            onClick={() => {
              handleReset();
              onClose();
            }}
            className="p-1 rounded-md text-[#68736E] hover:text-[#202825] hover:bg-[#ECEBE3] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isProcessing && !isFinished && (
          <div className="mt-6 space-y-5">
            <div>
              <label className="block text-xs font-medium text-[#202825] mb-1.5">
                Assign to Project
              </label>
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full text-sm border border-[#D9DED8] bg-[#F5F3ED] rounded-lg px-3 py-2 text-[#202825] focus:outline-none focus:border-[#527A5A]"
              >
                <option value="yamuna-restoration">Yamuna Restoration (Delhi)</option>
                <option value="forest-recovery">Community Forest Recovery (Uttarakhand)</option>
                <option value="solar-village">Solar Village Initiative (Rajasthan)</option>
                <option value="clean-water">Clean Water Access Program (Uttar Pradesh)</option>
                <option value="urban-waste">Urban Waste Recovery (Delhi NCR)</option>
              </select>
            </div>

            <div className="border-2 border-dashed border-[#D9DED8] rounded-xl p-6 text-center bg-[#F5F3ED]/50 hover:bg-[#F5F3ED] transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[#ECEBE3] flex items-center justify-center mx-auto text-[#527A5A] mb-2">
                <Database className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-[#202825]">
                12 field captures selected from today&apos;s field patrol
              </p>
              <p className="text-xs text-[#68736E] mt-1">
                Batch: Wazirabad Sector 4 · 4032x3024 JPG · EXIF GPS intact
              </p>
            </div>

            <div className="bg-[#ECEBE3]/60 rounded-lg p-3 text-xs text-[#68736E] leading-relaxed">
              <span className="font-medium text-[#202825]">Cloudinary Backbone:</span> High-resolution assets are uploaded directly to the Cloudinary storage pipeline. Visual analysis extracts structured observations without altering the original master file.
            </div>

            <div className="flex justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#68736E] hover:text-[#202825] transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleStartAnalysis}
                className="px-4 py-2 text-xs font-medium bg-[#527A5A] hover:bg-[#46694d] text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Analyze new evidence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {isProcessing && (
          <div className="mt-6 py-4">
            <div className="flex items-center gap-3 mb-6">
              <Loader2 className="w-5 h-5 animate-spin text-[#527A5A]" />
              <div>
                <p className="text-sm font-medium text-[#202825]">Analyzing field media...</p>
                <p className="text-xs text-[#68736E]">Simulating local evidence processing pipeline</p>
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((step, idx) => {
                const stepNum = idx + 1;
                const isDone = currentStep > stepNum;
                const isCurrent = currentStep === stepNum;
                const StepIcon = step.icon;

                return (
                  <div
                    key={step.title}
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${
                      isCurrent
                        ? 'border-[#527A5A] bg-[#EEF3EF]'
                        : isDone
                        ? 'border-[#D9DED8] bg-[#FFFFFF] opacity-90'
                        : 'border-transparent bg-transparent opacity-40'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-[#527A5A]" />
                      ) : isCurrent ? (
                        <Loader2 className="w-4 h-4 animate-spin text-[#527A5A]" />
                      ) : (
                        <StepIcon className="w-4 h-4 text-[#68736E]" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#68736E]">Step {stepNum}</span>
                        <h4 className="text-xs font-medium text-[#202825]">{step.title}</h4>
                      </div>
                      <p className="text-[11px] text-[#68736E] mt-0.5">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {isFinished && (
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-[#EEF3EF] border border-[#527A5A]/30 rounded-lg flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#527A5A] shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-[#202825]">12 assets analyzed</h4>
                <p className="text-xs text-[#68736E]">
                  All media structured and indexed into Yamuna Restoration evidence ledger.
                </p>
              </div>
            </div>

            <div className="border border-[#D9DED8] rounded-lg divide-y divide-[#D9DED8] text-xs">
              <div className="p-3 flex justify-between">
                <span className="text-[#68736E]">Cloudinary Ingest Batch:</span>
                <span className="font-mono text-[#202825]">cld_batch_2026_wazirabad_04</span>
              </div>
              <div className="p-3 flex justify-between">
                <span className="text-[#68736E]">Primary Activity Detected:</span>
                <span className="font-medium text-[#202825]">Community Cleanup & Riparian Survey</span>
              </div>
              <div className="p-3 flex justify-between">
                <span className="text-[#68736E]">Generated Semantic Tags:</span>
                <span className="text-[#202825]">cleanup · riverbank · volunteers · waste audit</span>
              </div>
              <div className="p-3 flex justify-between">
                <span className="text-[#68736E]">GPS Benchmark Link:</span>
                <span className="text-[#527A5A] font-medium">Matched to Jan 12 Baseline Site</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-xs font-medium text-[#68736E] hover:text-[#202825] transition-colors"
              >
                Upload another batch
              </button>
              <button
                type="button"
                onClick={handleViewEvidence}
                className="px-4 py-2 text-xs font-medium bg-[#527A5A] hover:bg-[#46694d] text-white rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>View in Evidence Library</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
