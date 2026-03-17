import { useRef, useState, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return { position, ref, handleMouseMove, handleMouseLeave };
};
