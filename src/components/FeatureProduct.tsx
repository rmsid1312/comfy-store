import ProductGrid from "./ProductGrid";
import SectionTitle from "./SectionTitle";

export default function FeatureProduct() {
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductGrid />
    </section>
  );
}
