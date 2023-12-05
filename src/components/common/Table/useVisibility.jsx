// // useVisibility.js
// import { useEffect, useState, useRef } from "react";

// export default function useIsVisible(ref) {
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) =>
//       setIntersecting(entry.isIntersecting)
//     );

//     observer.observe(ref.current);
//     return () => {
//       observer.disconnect();
//     };
//   }, [ref]);

//   return isIntersecting;
// }


import { useEffect, useState } from "react";

export default function useIsVisible(ref, containerRef) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        root: document.getElementById(containerRef),
        rootMargin: '400px 1500px', // Increased rootMargin
        // threshold: Array.from({ length: 101 }, (_, i) => i * 0.01) // Array [0, 0.01, 0.02, ..., 1]
        threshold: 0
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, containerRef]);

  return isIntersecting;
}
