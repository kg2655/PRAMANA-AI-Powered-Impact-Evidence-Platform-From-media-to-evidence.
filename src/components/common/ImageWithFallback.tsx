import React, { useState } from 'react';
import { Camera, MapPin } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
  locationStamp?: string;
  coordinates?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackLabel,
  locationStamp,
  coordinates,
  aspectRatioClass = 'aspect-[4/3]',
  className = '',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-[#ECEBE3] border border-[#D9DED8] flex flex-col items-center justify-center p-6 text-center select-none ${aspectRatioClass} ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-[#D9DED8]/60 flex items-center justify-center text-[#68736E] mb-3">
          <Camera className="w-6 h-6 stroke-[1.5]" />
        </div>
        <p className="text-xs font-medium text-[#202825] max-w-[200px] leading-snug line-clamp-2">
          {fallbackLabel || alt || 'Field Photographic Plate'}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#68736E]">
          <MapPin className="w-3 h-3 text-[#527A5A]" />
          <span>{locationStamp || 'Field Monitored Station'}</span>
        </div>
        {coordinates && (
          <span className="mt-1 text-[10px] font-mono text-[#68736E]/80 tracking-wider">
            {coordinates}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#ECEBE3] ${aspectRatioClass} ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#ECEBE3] animate-pulse flex items-center justify-center">
          <Camera className="w-5 h-5 text-[#68736E]/40" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
