import type { LoaderFunction } from "react-router-dom";

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params);
  return null;
};

export default function SingleProduct() {
  return <h1 className="text-4xl">SingleProduct Page</h1>;
}
