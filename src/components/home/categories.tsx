"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import {
  FaCouch,
  FaTshirt,
  FaMobileAlt,
  FaCamera,
  FaLaptop,
  FaPills,
  FaGamepad,
  FaPaintBrush,
  FaFutbol,
  FaShoePrints,
} from "react-icons/fa";

import { GiClothes } from "react-icons/gi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import type { IconType } from "react-icons";

interface Category {
  id: number;
  name: string;
  icon: IconType;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Furniture",
    icon: FaCouch,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "T-Shirt",
    icon: FaTshirt,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Saree",
    icon: FaTshirt,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Phone",
    icon: FaMobileAlt,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Camera",
    icon: FaCamera,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Computer",
    icon: FaLaptop,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Medicine",
    icon: FaPills,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Gaming",
    icon: FaGamepad,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Beauty",
    icon: FaPaintBrush,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Sports",
    icon: FaFutbol,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Jersey",
    icon: GiClothes,
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Shoes",
    icon: FaShoePrints,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
];

const Categories = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * ============================================
   * RESPONSIVE CARD COUNT
   * ============================================
   */

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 768) {
        setVisibleCount(3);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(4);
      } else {
        setVisibleCount(6);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  /*
   * ============================================
   * MAX SLIDE INDEX
   * ============================================
   */

  const maxIndex = Math.max(
    0,
    categories.length - visibleCount
  );

  /*
   * ============================================
   * GSAP SLIDER ANIMATION
   * ============================================
   */

  const animateSlider = (index: number) => {
    if (!sliderRef.current) return;

    const percentage = (index * 100) / visibleCount;

    gsap.to(sliderRef.current, {
      x: `-${percentage}%`,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  /*
   * ============================================
   * NEXT BUTTON
   * ============================================
   */

  const handleNext = () => {
    const nextIndex =
      currentIndex >= maxIndex
        ? 0
        : currentIndex + 1;

    setCurrentIndex(nextIndex);

    animateSlider(nextIndex);
  };

  /*
   * ============================================
   * PREVIOUS BUTTON
   * ============================================
   */

  const handlePrevious = () => {
    const previousIndex =
      currentIndex <= 0
        ? maxIndex
        : currentIndex - 1;

    setCurrentIndex(previousIndex);

    animateSlider(previousIndex);
  };

  /*
   * ============================================
   * RESET SLIDER WHEN SCREEN CHANGES
   * ============================================
   */

  useEffect(() => {
    setCurrentIndex(0);

    if (sliderRef.current) {
      gsap.set(sliderRef.current, {
        x: 0,
      });
    }
  }, [visibleCount]);

  /*
   * ============================================
   * AUTO SLIDER
   * ============================================
   */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex =
          prev >= maxIndex
            ? 0
            : prev + 1;

        if (sliderRef.current) {
          const percentage =
            (nextIndex * 100) / visibleCount;

          gsap.to(sliderRef.current, {
            x: `-${percentage}%`,
            duration: 0.7,
            ease: "power3.out",
          });
        }

        return nextIndex;
      });
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [
    isPaused,
    maxIndex,
    visibleCount,
  ]);

  /*
   * ============================================
   * GO TO SPECIFIC SLIDE
   * ============================================
   */

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);

    animateSlider(index);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto">

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="mb-8">

          {/* Small Red Label */}

          <div className="mb-4 flex items-center gap-3">

            <span className="h-7 w-3 rounded-sm bg-[#db4444]" />

            <span className="text-sm font-semibold text-[#db4444]">
              Categories
            </span>

          </div>

          {/* Heading + Navigation */}

          <div className="flex items-end justify-between gap-5">

            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Browse By Category
            </h2>

            {/* Navigation Buttons */}

            <div className="flex shrink-0 items-center gap-2">

              {/* Previous */}

              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous categories"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f5f5f5]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#db4444]
                  hover:text-white
                  active:scale-90
                "
              >
                <FiArrowLeft size={18} />
              </button>

              {/* Next */}

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next categories"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f5f5f5]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#db4444]
                  hover:text-white
                  active:scale-90
                "
              >
                <FiArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

        {/* =====================================
            CATEGORY SLIDER
        ====================================== */}

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <div
            ref={sliderRef}
            className="flex"
            style={{
              width: `${
                (categories.length * 100) /
                visibleCount
              }%`,
            }}
          >

            {categories.map((category) => {

              const Icon = category.icon;

              return (
                <div
                  key={category.id}
                  className="px-2"
                  style={{
                    width: `${
                      100 / categories.length
                    }%`,
                  }}
                >

                  {/* =================================
                      CATEGORY CARD
                  ================================== */}

                  <button
                    type="button"
                    className="
                      group
                      relative
                      h-44
                      w-full
                      overflow-hidden
                      rounded-xl
                      border
                      border-gray-200
                      bg-black
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-[#db4444]
                      hover:shadow-xl
                      hover:shadow-[#db4444]/20
                      sm:h-48
                      cursor-pointer
                    "
                  >

                    {/* =================================
                        BACKGROUND IMAGE
                    ================================== */}

                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="
                        (max-width: 639px) 50vw,
                        (max-width: 767px) 33vw,
                        (max-width: 1023px) 25vw,
                        16vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* =================================
                        DARK OVERLAY
                    ================================== */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/50
                        transition-all
                        duration-500
                        group-hover:bg-[#db4444]/75
                      "
                    />

                    {/* =================================
                        CONTENT
                    ================================== */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-full
                        flex-col
                        items-center
                        justify-center
                        gap-4
                      "
                    >

                      {/* =================================
                          ICON
                      ================================== */}

                      <span
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          bg-white/95
                          text-black
                          shadow-lg
                          backdrop-blur-sm
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:bg-white
                          group-hover:text-[#db4444]
                        "
                      >
                        <Icon size={28} />
                      </span>

                      {/* =================================
                          CATEGORY NAME
                      ================================== */}

                      <span
                        className="
                          text-sm
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          group-hover:tracking-wide
                          sm:text-base
                        "
                      >
                        {category.name}
                      </span>

                    </div>

                  </button>

                </div>
              );
            })}

          </div>

        </div>

        {/* =====================================
            SLIDER INDICATORS
        ====================================== */}

        <div className="mt-7 flex justify-center gap-1.5">

          {Array.from({
            length: maxIndex + 1,
          }).map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() =>
                handleIndicatorClick(index)
              }
              aria-label={`Go to category slide ${
                index + 1
              }`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                ${
                  currentIndex === index
                    ? "w-8 bg-[#db4444]"
                    : "w-2 bg-gray-300"
                }
              `}
            />

          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;