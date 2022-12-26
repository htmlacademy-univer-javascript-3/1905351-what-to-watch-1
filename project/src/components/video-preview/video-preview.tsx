import { useEffect, useRef } from 'react';

type VideoPreviewProps = { videoPreview: string; poster: string };

function VideoPreview({
  videoPreview,
  poster
}: VideoPreviewProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const delay = setTimeout(() => videoRef.current?.play(), 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <video ref={videoRef} poster={poster} width='280' height='175' loop muted style={{objectFit: 'cover'}}>
      <source src={videoPreview} />
      Video is not supported by your browser.
    </video>
  );
}

export default VideoPreview;
