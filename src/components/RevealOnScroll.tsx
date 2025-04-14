
import { useEffect, useRef, ReactNode } from "react";
import { RevealDirection } from "@/utils/scrollReveal";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className, 
  direction = 'up',
  delay = 0
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const directionClass = direction ? `reveal-${direction}` : '';
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div 
      ref={sectionRef} 
      className={`reveal-on-scroll ${directionClass} ${className || ""}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
