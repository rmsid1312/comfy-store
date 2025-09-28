import { redirect, type LoaderFunction } from "react-router-dom";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { useAppSelector } from "../hooks";
import type { ReduxStore } from "../store";
import { toast } from "../hooks/use-toast";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<null | Response> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please login to continue" });
      return redirect("/login");
    }
    return null;
  };

export default function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) return <SectionTitle text="Your cart is empty" />;

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid grid-cols-2 items-center justify-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}
