import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Card } from "../components/ui/card";
import type { CartItem } from "../utils";
import { useAppSelector } from "../hooks";
import { CartItemList, CartTotals, SectionTitle } from "../components";

export default function Cart() {
  const user = useAppSelector((state) => state.userState.user);
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return <SectionTitle text="Empty cart..." />;
  }

  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 gap-8 grid lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 ml-4">
          <CartTotals />
            <Button asChild className="mt-8 w-full">
              {user ? <Link to="/checkout">Proceed to checkout</Link> : <Link to="/login">Please Login</Link>}
            </Button>
        </div>
      </div>
    </>
  );
}
