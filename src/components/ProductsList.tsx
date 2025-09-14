import { Link, useLoaderData } from "react-router-dom";
import type { ProductsResponse } from "../utils";
import { Card, CardContent } from "./ui/card";
import { formatAsDollars } from "../utils/formatAsDollars";

export default function ProductsList() {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <div className="mt-12 grid gap-y-8 ">
      {products.map((product, idx) => {
        const { image, title, price, company } = product.attributes;
        const dollarsAmount = formatAsDollars(price);
        return (
          <Link to={`${product.id}`} key={idx}>
            <Card>
              <CardContent className="p-8 gay-y-4 grid md:grid-cols-3">
                <img
                  src={image}
                  alt={title}
                  className="h-64 w-full md:h-48 rounded-md object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold capitalize">{title}</h2>
                  <h4>{company}</h4>
                </div>
                <p className="text-primary md:ml-auto">{dollarsAmount} </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
