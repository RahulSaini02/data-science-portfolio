import gsap from "gsap";
import { useEffect } from "react";

export const useCarouselAnimation = (
  carouselRef: React.RefObject<HTMLDivElement>,
  options = { duration: 30, ease: "none", repeat: -1 }
) => {
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Prevent multiple duplications by checking if items are already cloned
    if (carousel.dataset.duplicated) return;
    carousel.dataset.duplicated = "true"; // Mark as duplicated

    // Clone elements for seamless looping
    const items = Array.from(carousel.children) as HTMLElement[];
    items.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      carousel.appendChild(clone);
    });

    // Create GSAP animation
    const animation = gsap.to(carousel, {
      x: "-50%", // Adjust based on content width
      duration: options.duration,
      ease: options.ease,
      repeat: options.repeat,
    });
    return () => {
      animation.kill(); // Cleanup animation on unmount
    };
  }, [carouselRef]);
};
