import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl sm:text-6xl tracking-tight">
          We are changin the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quos
          repellat obcaecati nisi. Obcaecati possimus temporibus, facilis esse
          excepturi rerum repudiandae magnam unde. Pariatur tenetur obcaecati
          dolores odio qui molestiae.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link to="products">Our Products </Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
