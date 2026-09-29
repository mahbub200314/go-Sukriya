import Image from "next/image";
import Link from "next/link";
import { FiEye, FiHeart, FiStar } from "react-icons/fi";
import ProductCardHover from "./product-card-hover";
import { exploreProducts as products, type Product } from "@/lib/products";

function ProductCard({ product }: { product: Product }) {
  const detailsHref = `/products/catalog/${product.id}`;

  return (
    <ProductCardHover>
      <article className="group min-w-0 cursor-pointer">
        <div className="relative aspect-3/2 overflow-hidden rounded-sm bg-[#f5f5f5]">
          <span className="pointer-events-none absolute left-2 top-2 z-10 rounded-sm bg-[#db4444] px-2 py-1 text-[10px] font-medium text-white sm:left-3 sm:top-3 sm:text-xs">
            -{product.discount}%
          </span>
          <div className="absolute right-2 top-2 z-20 flex flex-col gap-2 sm:right-3 sm:top-3">
            <button type="button" aria-label={`Add ${product.name} to wishlist`} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:bg-[#db4444] hover:text-white">
              <FiHeart size={16} />
            </button>
            <button type="button" aria-label={`Quick view ${product.name}`} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:bg-[#db4444] hover:text-white">
              <FiEye size={16} />
            </button>
          </div>
          <Link href={detailsHref} aria-label={`View ${product.name}`} className="absolute inset-0 z-[1] block cursor-pointer">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="product-image object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <span className="add-to-cart invisible absolute bottom-0 left-0 right-0 bg-black py-3 text-center text-xs font-medium text-white sm:text-sm">
              Add To Cart
            </span>
          </Link>
        </div>
        <Link href={detailsHref} className="block cursor-pointer pt-4 hover:underline">
          <p className="mb-1 text-xs text-gray-500">{product.category}</p>
          <h2 className="truncate text-sm font-medium text-black">{product.name}</h2>
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
    </ProductCardHover>
  );
}

export default function ExploreProducts({ showViewAll = true }: { showViewAll?: boolean }) {
  return (
    <section className="w-full bg-white py-16 sm:py-20" aria-labelledby="explore-products-heading">
      <div className="mx-auto">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-7 w-3 rounded-sm bg-[#db4444]" />
            <span className="text-sm font-semibold text-[#db4444]">Our Products</span>
          </div>
          <h2 id="explore-products-heading" className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Explore Our Products
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Browse popular picks across electronics, sports, health, and everyday essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>

        {showViewAll && (
          <div className="mt-12 flex justify-center">
            <Link href="/products" className="inline-flex items-center justify-center rounded-sm bg-[#db4444] px-10 py-4 text-sm font-medium text-white transition hover:bg-[#c73535]">
              View All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
