import { useState, useEffect } from "react";

const useIsMobile = (maxWidth: number = 720): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" && window.matchMedia(`(max-width: ${maxWidth}px)`).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Add listener
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [maxWidth]);

  return isMobile;
};

export default useIsMobile;
