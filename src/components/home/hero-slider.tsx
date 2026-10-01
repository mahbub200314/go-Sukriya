"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/button";
import { FaCircleDot } from "react-icons/fa6";
gsap.registerPlugin(useGSAP);

const slides = [
  {
    eyebrow: "Electronics",
    title: "Smart tech for everyday life",
    description: "Discover useful gadgets and electronics for work, home, and play.",
    action: "Shop electronics",
    href: "/shop?category=electronics",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "Sports & Outdoor",
    title: "Get ready to move",
    description: "Find gear and active essentials for your next workout or outdoor adventure.",
    action: "Shop sports",
    href: "/shop?category=sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "Medicine & Health",
    title: "Care essentials, close at hand",
    description: "Browse everyday medicine and health essentials in one convenient place.",
    action: "Shop medicine",
    href: "/shop?category=medicine",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (!contentRef.current || !backgroundRef.current) return;

    const timeline = gsap.timeline();
    timeline
      .fromTo(contentRef.current, { autoAlpha: 0, y: 20 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
      })
      .fromTo(backgroundRef.current, { scale: 1.08 }, {
        scale: 1,
        duration: 1.1,
        ease: "power2.out",
      }, 0);
  }, { dependencies: [activeSlide], revertOnUpdate: true });

  return (
    <section
      aria-label="Featured collections"
      className="relative isolate flex min-h-[75vh] items-center overflow-hidden rounded-sm bg-black px-8 py-14 text-white sm:px-12 lg:px-16"
    >
      <div
        ref={backgroundRef}
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url('${slide.image}')` }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      <div ref={contentRef} className="max-w-xl">
        <p className="mb-5 text-md font-semibold tracking-wide text-white/80 flex items-center gap-2"> <FaCircleDot className="text-[1.2rem]  text-primary"/> {slide.eyebrow}</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{slide.title}</h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-white/80">{slide.description}</p>
        <div className="mt-8">
          <Button href={slide.href} variant="light">{slide.action} <span aria-hidden="true" className="ml-2">→</span></Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3" aria-label="Choose a slide">
        {slides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show slide ${index + 1}: ${item.title}`}
            aria-pressed={activeSlide === index}
            onClick={() => setActiveSlide(index)}
            className={`h-3 w-3 rounded-full border-2 border-white transition-colors ${activeSlide === index ? "bg-primary" : "bg-transparent hover:bg-white/60"}`}
          />
        ))}
      </div>
      <span className="sr-only" aria-live="polite">Slide {activeSlide + 1} of {slides.length}</span>
    </section>
  );
}
