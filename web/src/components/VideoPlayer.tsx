import { useRef, useEffect } from 'react';
import Hls from 'hls.js';

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const videoSource = "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSource);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSource; 
    }
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <video ref={videoRef} controls className="w-full h-auto"></video>
    </div>
  );
}