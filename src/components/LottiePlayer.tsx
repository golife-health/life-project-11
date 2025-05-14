
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottiePlayerProps {
  src: string;
  className?: string;
}

const LottiePlayer = ({ src, className }: LottiePlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: src
    });
    
    return () => {
      animation.destroy();
    };
  }, [src]);

  return <div ref={containerRef} className={className} />;
};

export default LottiePlayer;
