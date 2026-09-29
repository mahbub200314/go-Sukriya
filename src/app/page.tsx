import Categories from "@/components/home/categories";
import ExploreProducts from "@/components/home/exploreProducts";
import FlashSale from "@/components/home/flashSale";
import Hero from "@/components/home/hero";

const Page = () => (
  <div className="px-[3%] py-2">
    <Hero />
    <FlashSale />
    <Categories />
    <ExploreProducts />
  </div>
);

export default Page;
