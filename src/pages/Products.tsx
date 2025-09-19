import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch, type ProductsResponse } from "../utils";
import { type LoaderFunction } from "react-router-dom";

const url = "/products";

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponse> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  console.log(params);
  const response = await customFetch<ProductsResponse>(url, { params });
  return { ...response.data };
};

export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
