import { useRef } from "react";
import { useInView } from "framer-motion";

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return { ref, isInView };
};
