import Categories from "@/components/home/categories";
import BestSellingProduct from "@/components/home/bestSellingProduct";
import ExploreProducts from "@/components/home/exploreProducts";
import FlashSale from "@/components/home/flashSale";
import Hero from "@/components/home/hero";
import NewArrival from "@/components/home/newArrival";

const Page = () => (
  <div className="px-[3%] py-2">
    <Hero />
    <FlashSale />
    <Categories />
    <BestSellingProduct />
    <ExploreProducts />
    <NewArrival/>
    <BestSellingProduct/>
  </div>
);

export default Page;
