import type { LoaderFunction } from "react-router-dom";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { useAppSelector } from "../hooks";
import type { ReduxStore } from "../store";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<null> => {
    console.log(store);
    return null;
  };

export default function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) return <SectionTitle text="Your cart is empty" />;

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid grid-cols-2 ">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}
