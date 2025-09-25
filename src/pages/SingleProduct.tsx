import { Link, useLoaderData, type LoaderFunction } from "react-router-dom";
import { customFetch, type SingleProductResponse } from "../utils";
import { formatAsDollars } from "../utils/formatAsDollars";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { SelectProductAmount, SelectProductColor } from "../components";

export const loader: LoaderFunction = async ({ params }) => {
  const response = await customFetch<SingleProductResponse>(
    `/products/${params.id}`
  );

  console.log(response);
  return { ...response.data };
};

export default function SingleProduct() {
  const { data: product } = useLoaderData() as SingleProductResponse;
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatAsDollars(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const addToCart = () => {
    console.log("add to cart");
  };
  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <Button asChild variant="link" size="sm">
          <Link to="/">Home </Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant="link" size="sm">
          <Link to="/products">Product </Link>
        </Button>
      </div>

      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image first col */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 rounded-lg lg:w-full"
        />
        {/* Product info second col */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8">{description}</p>
          {/* Colors */}
          <SelectProductColor
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />
          {/* Amount */}
          <SelectProductAmount />
          {/* Cart Button */}
          <Button size="lg" className="mt-10" onClick={addToCart}>
            Add to bag
          </Button>
        </div>
      </div>
    </section>
  );
}
