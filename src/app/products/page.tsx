import ExploreProducts from "@/components/home/exploreProducts";

export const metadata = {
  title: "Explore Products | GoSukriya",
  description: "Explore electronics, sports, medicine, and everyday products at GoSukriya.",
};

export default function ProductsPage() {
  return (
    <div className="px-[3%] py-2">
      <h1 className="sr-only">Explore Our Products</h1>
      <ExploreProducts showViewAll={false} />
    </div>
  );
}
