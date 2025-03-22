
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
      }, index * 30);
    });

    connections.forEach((connection, index) => {
      setTimeout(() => {
        connection.classList.add('animate-fade-in');
      }, index * 20 + 150);
    });
  }, []);

  return (
    <div className={`rounded-3xl p-6 ${className}`}>
      <svg 
        ref={svgRef}
        viewBox="0 0 240 240" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full" 
      >
        {/* Connections */}
        <g className="opacity-0">
          <path d="M120 30 L120 50" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M120 70 L120 90" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M120 70 L90 90" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M120 70 L150 90" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M120 110 L120 130" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M120 110 L90 130" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M120 110 L150 130" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M90 150 L60 170" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M90 150 L90 170" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M90 150 L120 170" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M150 150 L120 170" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M150 150 L150 170" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M150 150 L180 170" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M90 90 L60 110" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M90 90 L90 110" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M150 90 L150 110" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M150 90 L180 110" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M60 170 L30 190" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M60 170 L60 190" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M90 170 L90 190" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M120 170 L120 190" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M150 170 L150 190" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M180 170 L180 190" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
          <path d="M180 170 L210 190" stroke="white" strokeWidth="1.5" className="connection opacity-0" />
        </g>

        {/* Nodes */}
        <g>
          <circle cx="120" cy="30" r="4" fill="white" className="node opacity-0" />
          <circle cx="120" cy="50" r="4" fill="white" className="node opacity-0" />
          <circle cx="120" cy="70" r="4" fill="white" className="node opacity-0" />
          <circle cx="90" cy="90" r="4" fill="white" className="node opacity-0" />
          <circle cx="120" cy="90" r="4" fill="white" className="node opacity-0" />
          <circle cx="150" cy="90" r="4" fill="white" className="node opacity-0" />
          <circle cx="60" cy="110" r="4" fill="white" className="node opacity-0" />
          <circle cx="90" cy="110" r="4" fill="white" className="node opacity-0" />
          <circle cx="120" cy="110" r="4" fill="white" className="node opacity-0" />
          <circle cx="150" cy="110" r="4" fill="white" className="node opacity-0" />
          <circle cx="180" cy="110" r="4" fill="white" className="node opacity-0" />
          <circle cx="90" cy="130" r="4" fill="white" className="node opacity-0" />
          <circle cx="120" cy="130" r="4" fill="white" className="node opacity-0" />
          <circle cx="150" cy="130" r="4" fill="white" className="node opacity-0" />
          <circle cx="90" cy="150" r="4" fill="white" className="node opacity-0" />
          <circle cx="120" cy="150" r="4" fill="white" className="node opacity-0" />
          <circle cx="150" cy="150" r="4" fill="white" className="node opacity-0" />
          <circle cx="60" cy="170" r="4" fill="white" className="node opacity-0" />
          <circle cx="90" cy="170" r="4" fill="white" className="node opacity-0" />
          <circle cx="120" cy="170" r="4" fill="white" className="node opacity-0" />
          <circle cx="150" cy="170" r="4" fill="white" className="node opacity-0" />
          <circle cx="180" cy="170" r="4" fill="white" className="node opacity-0" />
          <circle cx="30" cy="190" r="4" fill="white" className="node opacity-0" />
          <circle cx="60" cy="190" r="4" fill="white" className="node opacity-0" />
          <circle cx="90" cy="190" r="4" fill="white" className="node opacity-0" />
          <circle cx="120" cy="190" r="4" fill="white" className="node opacity-0" />
          <circle cx="150" cy="190" r="4" fill="white" className="node opacity-0" />
          <circle cx="180" cy="190" r="4" fill="white" className="node opacity-0" />
          <circle cx="210" cy="190" r="4" fill="white" className="node opacity-0" />
        </g>
      </svg>
    </div>
  );
};

export default LogoTree;
