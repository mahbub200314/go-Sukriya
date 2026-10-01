import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bestSellingProduct, exploreProducts, flashSaleProducts } from "@/lib/products";

type ProductDetailsPageProps = {
  params: Promise<{ collection: string; id: string }>;
};

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { collection, id } = await params;
  const source = collection === "flash-sale"
    ? flashSaleProducts
    : collection === "catalog"
      ? exploreProducts
      : collection === "best-selling"
        ? bestSellingProduct
        : [];
  const product = source.find((item) => item.id === Number(id));

  if (!product) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-[3%] py-10 sm:py-16">
      <Link href="/" className="text-sm text-gray-500 transition hover:text-[#db4444]">
        Continue shopping
      </Link>
      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-square overflow-hidden rounded-sm bg-[#f5f5f5]">
          <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-sm font-medium text-[#db4444]">{product.category}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">{product.name}</h1>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-2xl font-semibold text-[#db4444]">${product.price}</span>
            <span className="text-base text-gray-400 line-through">${product.oldPrice}</span>
            <span className="rounded-sm bg-[#db4444] px-2 py-1 text-xs font-medium text-white">-{product.discount}%</span>
          </div>
          <p className="mt-6 max-w-xl leading-7 text-gray-600">{product.description}</p>
          <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
            <span className="text-[#ffad33]">{product.rating} / 5</span>
            <span>({product.reviews} reviews)</span>
          </div>
          <button type="button" className="mt-8 rounded-sm bg-[#db4444] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#c73535]">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}