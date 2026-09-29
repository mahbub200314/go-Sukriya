"use client";

import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiEye,
  FiHeart,
  FiStar,
} from "react-icons/fi";

import { flashSaleProducts as products, type Product } from "@/lib/products";

const sliderProducts = [...products, ...products, ...products];

const FlashSale = () => {
  const [time, setTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  const sliderTrackRef = useRef<HTMLDivElement>(null);
  const slideDirectionRef = useRef<((direction: -1 | 1) => void) | null>(null);

  // Countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              if (days > 0) {
                days--;
              }
            }
          }
        }

        return {
          days,
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = sliderTrackRef.current;
    if (!track) return;

    const productCount = products.length;
    let currentIndex = productCount;
    let tween: gsap.core.Tween | undefined;
    const getOffset = (index: number) =>
      (track.children[index] as HTMLElement).offsetLeft;

    gsap.set(track, { x: -getOffset(currentIndex) });

    const moveSlide = (direction: -1 | 1) => {
      if (tween?.isActive()) return;

      const nextIndex = currentIndex + direction;
      tween = gsap.to(track, {
        x: -getOffset(nextIndex),
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          currentIndex = nextIndex;

          if (currentIndex === productCount * 2) {
            currentIndex = productCount;
            gsap.set(track, { x: -getOffset(currentIndex) });
          } else if (currentIndex === productCount - 1) {
            currentIndex = productCount * 2 - 1;
            gsap.set(track, { x: -getOffset(currentIndex) });
          }
        },
      });
    };

    slideDirectionRef.current = moveSlide;

    const interval = window.setInterval(() => moveSlide(1), 4000);
    const handleResize = () => {
      tween?.kill();
      tween = undefined;
      gsap.set(track, { x: -getOffset(currentIndex) });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      tween?.kill();
      slideDirectionRef.current = null;
      gsap.set(track, { clearProps: "transform" });
    };
  }, []);

  const handleNext = () => slideDirectionRef.current?.(1);
  const handlePrevious = () => slideDirectionRef.current?.(-1);

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto ">

        {/* ================= HEADER ================= */}
        <div className="mb-8">

          {/* Today's */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-7 w-3 rounded-sm bg-[#db4444]" />

            <span className="text-[1.4rem] font-semibold text-[#db4444]">
              Today's
            </span>
          </div>

          {/* Heading + Countdown + Buttons */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            {/* Title + Countdown */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-12">

              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                Flash Sales
              </h2>

              {/* Countdown */}
              <div className="flex items-center gap-3">

                <TimeBox
                  label="Days"
                  value={time.days}
                />

                <span className="mb-1 text-2xl font-semibold text-[#db4444]">
                  :
                </span>

                <TimeBox
                  label="Hours"
                  value={time.hours}
                />

                <span className="mb-1 text-2xl font-semibold text-[#db4444]">
                  :
                </span>

                <TimeBox
                  label="Minutes"
                  value={time.minutes}
                />

                <span className="mb-1 text-2xl font-semibold text-[#db4444]">
                  :
                </span>

                <TimeBox
                  label="Seconds"
                  value={time.seconds}
                />

              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2">

              <button
                onClick={handlePrevious}
                aria-label="Previous products"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f5] text-black transition hover:bg-[#db4444] hover:text-white"
              >
                <FiArrowLeft size={18} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next products"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f5] text-black transition hover:bg-[#db4444] hover:text-white"
              >
                <FiArrowRight size={18} />
              </button>

            </div>
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="overflow-hidden">
          <div ref={sliderTrackRef} className="relative flex">
            {sliderProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="w-1/2 shrink-0 px-2 lg:w-1/3 xl:w-1/5"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* ================= VIEW ALL ================= */}
        <div className="mt-12 flex justify-center">

          <button className="rounded-sm bg-[#db4444] px-10 py-4 text-sm font-medium text-white transition hover:bg-[#c73535]">
            View All Products
          </button>

        </div>

      </div>
    </section>
  );
};

export default FlashSale;


/* ================================================= */
/* TIME BOX */
/* ================================================= */

interface TimeBoxProps {
  label: string;
  value: number;
}

const TimeBox = ({ label, value }: TimeBoxProps) => {
  return (
    <div className="flex flex-col">

      <span className="text-[10px] font-medium text-black sm:text-xs">
        {label}
      </span>

      <span className="text-2xl font-bold leading-none text-black sm:text-3xl">
        {String(value).padStart(2, "0")}
      </span>

    </div>
  );
};


/* ================================================= */
/* PRODUCT CARD */
/* ================================================= */

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const detailsHref = `/products/flash-sale/${product.id}`;

  return (
    <article className="group min-w-0 cursor-pointer">
      <div className="relative aspect-3/2 overflow-hidden rounded-sm bg-[#f5f5f5]">
        <span className="pointer-events-none absolute left-2 top-2 z-10 rounded-sm bg-[#db4444] px-2 py-1 text-[10px] font-medium text-white sm:left-3 sm:top-3 sm:text-xs">
          -{product.discount}%
        </span>
        <div className="absolute right-2 top-2 z-10 flex flex-col gap-2 sm:right-3 sm:top-3">
          <button type="button" aria-label={`Add ${product.name} to wishlist`} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:bg-[#db4444] hover:text-white">
            <FiHeart size={16} />
          </button>
          <button type="button" aria-label={`Quick view ${product.name}`} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:bg-[#db4444] hover:text-white">
            <FiEye size={16} />
          </button>
        </div>
        <Link href={detailsHref} aria-label={`View ${product.name}`} className="absolute inset-0 z-0 block cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-black py-3 text-center text-xs font-medium text-white transition-transform duration-300 group-hover:translate-y-0 sm:text-sm">
            Add To Cart
          </span>
        </Link>
      </div>
      <Link href={detailsHref} className="block cursor-pointer pt-4 hover:underline">
        <p className="mb-1 text-xs text-gray-500">{product.category}</p>
        <h3 className="truncate text-sm font-medium text-black">{product.name}</h3>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-sm font-medium text-[#db4444]">${product.price}</span>
          <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-0.5" aria-label={`${product.rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, index) => (
              <FiStar key={index} size={14} className={index < product.rating ? "fill-[#ffad33] text-[#ffad33]" : "text-gray-300"} />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
      </Link>
    </article>
  );
};