
import ExploreProducts from "@/components/home/exploreProducts";
import { bestSellingProduct } from "@/lib/products";

const BestSellingProduct = () => {
  return (
    <ExploreProducts
      products={bestSellingProduct}
      heading="Best Selling Products"
      eyebrow="This Month"
      description="Customer favorites across electronics, sports, and everyday essentials."
      collection="best-selling"
      showViewAll={false}
    />
  );
};

export default BestSellingProduct;