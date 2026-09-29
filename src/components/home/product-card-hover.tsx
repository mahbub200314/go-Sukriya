"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { ReactNode } from "react";

gsap.registerPlugin(useGSAP);

type ProductCardHoverProps = {
  children: ReactNode;
};

export default function ProductCardHover({ children }: ProductCardHoverProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP(() => {
    const addToCart = cardRef.current?.querySelector(".add-to-cart");
    gsap.set(addToCart, { autoAlpha: 0, y: 44 });
  }, { scope: cardRef });

  const handlePointerEnter = contextSafe(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card.querySelector(".product-image"), {
      scale: 1.05,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(card.querySelector(".add-to-cart"), {
      autoAlpha: 1,
      y: 0,
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  const handlePointerLeave = contextSafe(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card.querySelector(".product-image"), {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(card.querySelector(".add-to-cart"), {
      autoAlpha: 0,
      y: 12,
      duration: 0.2,
      ease: "power2.in",
      overwrite: "auto",
    });
  });

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className="min-w-0 cursor-pointer"
    >
      {children}
    </div>
  );
}
