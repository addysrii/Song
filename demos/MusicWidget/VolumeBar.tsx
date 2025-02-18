import { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2Icon, VolumeIcon, VolumeOffIcon } from "lucide-react";

type VolumeBarProps = {
  volume: number;
  setVolume: (volume: number) => void;
  muted: boolean;
  setMuted: (muted: boolean) => void;
};

const VolumeBar: FC<VolumeBarProps> = ({
  volume,
  setVolume,
  muted,
  setMuted,
}) => {
  const [previousVolume, setPreviousVolume] = useState(volume);
  const range = useRef<HTMLInputElement>(null);
  const [dragStartY, setDragStartY] = useState(0);
  const [volumeAtDragStart, setVolumeAtDragStart] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setVolume(Math.min(1, volume + 0.05));
      } else if (e.key === "ArrowDown") {
        setVolume(Math.max(0, volume - 0.05));
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [volume, setVolume]);

  useEffect(() => {
    if (!muted) {
      setPreviousVolume(volume);
    }
  }, [volume, muted]);

  const handleVolumeClick = () => {
    if (muted) {
      setVolume(previousVolume);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
    }
    setMuted(!muted);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 overflow-hidden translate-x-36">
      <div
        ref={range}
        className="flex h-40 w-5 items-end overflow-hidden rounded-full bg-zinc-300"
      >
        <div
          className="flex w-full items-start justify-center bg-zinc-500"
          style={{ height: `${volume * 100}%` }}
        >
          <motion.div
            className="absolute left-0 top-1/2 h-full w-full cursor-grab rounded-full -translate-y-1/2 active:cursor-grabbing"
            drag="y"
            dragConstraints={range}
            dragElastic={0}
            dragMomentum={false}
            onDragStart={(_, info) => {
              setDragStartY(info.point.y);
              setVolumeAtDragStart(volume);
            }}
            onDrag={(_, info) => {
              if (!range.current) return;
              setMuted(false);

              const rect = range.current.getBoundingClientRect();
              const dragDelta = info.point.y - dragStartY;
              const heightPercentage = dragDelta / rect.height;
              const newVolume = volumeAtDragStart - heightPercentage;
              const clampedVolume = Math.max(0, Math.min(1, newVolume));

              setVolume(Number(clampedVolume.toFixed(2)));
            }}
          ></motion.div>
        </div>
      </div>

      <button
        className="z-10 flex items-center justify-center text-zinc-500"
        onClick={handleVolumeClick}
      >
        {!muted ? (
          volume === 0 ? (
            <VolumeIcon className="translate-x-1" />
          ) : volume < 0.5 ? (
            <VolumeIcon />
          ) : (
            <Volume2Icon />
          )
        ) : (
          <VolumeOffIcon />
        )}
      </button>
    </div>
  );
};

export default VolumeBar;