import { redirect, useLoaderData, type LoaderFunction } from "react-router-dom";
import type { ReduxStore } from "../store";
import { customFetch, type OrdersResponse } from "../utils";
import { toast } from "../hooks/use-toast";
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from "../components";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrdersResponse | null | Response> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please login to continue" });
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch.get<OrdersResponse>("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });

      return { ...response.data };
    } catch (error) {
      console.log(error);
      toast({ description: "Failed to fetch orders" });
      return null;
    }
  };

export default function Orders() {
  const { meta } = useLoaderData() as OrdersResponse;
  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }
  return (
    <>
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
}
