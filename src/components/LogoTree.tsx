
import { useEffect, useRef } from 'react';

const LogoTree = ({ className = '' }: { className?: string }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const nodes = svgRef.current.querySelectorAll('.node');
    const connections = svgRef.current.querySelectorAll('.connection');

    nodes.forEach((node, index) => {
      setTimeout(() => {
        node.classList.add('animate-fade-in');
      }, index * 40);
    });

    connections.forEach((connection, index) => {
      setTimeout(() => {
        connection.classList.add('animate-fade-in');
      }, index * 30 + 200);
    });
  }, []);

  return (
    <div className={`rounded-3xl bg-black p-6 ${className}`}>
      <svg 
        ref={svgRef}
        viewBox="0 0 240 240" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full" 
      >
        {/* Connections */}
        <g className="opacity-0">
          <path d="M120 35 L120 55" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M120 85 L120 105" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M120 85 L90 105" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M120 85 L150 105" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M90 135 L90 155" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M90 135 L60 155" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M90 135 L120 155" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M150 135 L150 155" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M150 135 L180 155" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M150 135 L120 155" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M60 185 L60 205" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M60 185 L30 205" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M60 185 L90 205" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M180 185 L180 205" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M180 185 L150 205" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M180 185 L210 205" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M120 185 L120 205" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M120 185 L90 205" stroke="white" strokeWidth="2" className="connection opacity-0" />
          <path d="M120 185 L150 205" stroke="white" strokeWidth="2" className="connection opacity-0" />
        </g>

        {/* Nodes */}
        <g>
          <circle cx="120" cy="35" r="8" fill="white" className="node opacity-0" />
          <circle cx="120" cy="65" r="8" fill="white" className="node opacity-0" />
          <circle cx="120" cy="85" r="8" fill="white" className="node opacity-0" />
          <circle cx="90" cy="105" r="8" fill="white" className="node opacity-0" />
          <circle cx="120" cy="105" r="8" fill="white" className="node opacity-0" />
          <circle cx="150" cy="105" r="8" fill="white" className="node opacity-0" />
          <circle cx="90" cy="135" r="8" fill="white" className="node opacity-0" />
          <circle cx="150" cy="135" r="8" fill="white" className="node opacity-0" />
          <circle cx="60" cy="155" r="8" fill="white" className="node opacity-0" />
          <circle cx="90" cy="155" r="8" fill="white" className="node opacity-0" />
          <circle cx="120" cy="155" r="8" fill="white" className="node opacity-0" />
          <circle cx="150" cy="155" r="8" fill="white" className="node opacity-0" />
          <circle cx="180" cy="155" r="8" fill="white" className="node opacity-0" />
          <circle cx="60" cy="185" r="8" fill="white" className="node opacity-0" />
          <circle cx="120" cy="185" r="8" fill="white" className="node opacity-0" />
          <circle cx="180" cy="185" r="8" fill="white" className="node opacity-0" />
          <circle cx="30" cy="205" r="8" fill="white" className="node opacity-0" />
          <circle cx="60" cy="205" r="8" fill="white" className="node opacity-0" />
          <circle cx="90" cy="205" r="8" fill="white" className="node opacity-0" />
          <circle cx="120" cy="205" r="8" fill="white" className="node opacity-0" />
          <circle cx="150" cy="205" r="8" fill="white" className="node opacity-0" />
          <circle cx="180" cy="205" r="8" fill="white" className="node opacity-0" />
          <circle cx="210" cy="205" r="8" fill="white" className="node opacity-0" />
        </g>
      </svg>
    </div>
  );
};

export default LogoTree;
