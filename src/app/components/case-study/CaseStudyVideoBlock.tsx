import { useRef, useState } from "react";

type CaseStudyVideoBlockProps = {
  coverSrc: string;
  videoSrc: string;
  alt: string;
};

export function CaseStudyVideoBlock({ coverSrc, videoSrc, alt }: CaseStudyVideoBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    requestAnimationFrame(() => {
      void videoRef.current?.play();
    });
  };

  return (
    <div className="relative w-full overflow-hidden bg-neutral-900">
      {!isPlaying ? (
        <button
          type="button"
          onClick={handlePlay}
          className="group relative block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
          aria-label={`Play ${alt}`}
        >
          <img src={coverSrc} alt={alt} className="h-auto w-full object-cover" style={{marginTop: "-5px", marginBottom: "-5px"}} />
          <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
            <span className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur-sm sm:size-20">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden
                className="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      ) : (
        <video
          ref={videoRef}
          className="h-auto w-full"
          controls
          playsInline
          preload="metadata"
          poster={coverSrc}
        >
          <source src={videoSrc} type="video/quicktime" />
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support embedded video playback.
        </video>
      )}
    </div>
  );
}
