import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mp3Url: string;
  mp3Name: string;
}


function getMimeType(url: string): string {
  const extension = url.split('.').pop()?.toLowerCase();

  switch (extension) {
    case "mp3":
      return "audio/mpeg";
    case "m4a":
      return "audio/mp4";
    case "flac":
      return "audio/flac";
    case "wav":
      return "audio/wav";
    case "ogg":
      return "audio/ogg";
    case "mid":
    case "midi":
      return "audio/midi";
    default:
      return "audio/*";
  }
}



export default function Modal({ isOpen, onClose, mp3Url, mp3Name }: ModalProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-slate-600 rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">{mp3Name}</h2>
          <button onClick={onClose} className="text-white">
            X
          </button>
        </div>
        <audio ref={audioRef} controls className="w-full">
          <source src={mp3Url} type={getMimeType(mp3Url)} />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
