import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { customFetch, type SingleProductResponse } from "../utils";
import { formatAsDollars } from "../utils/formatAsDollars";
import { useState } from "react";

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
  return <h1 className="text-4xl">SingleProduct Page</h1>;
}
