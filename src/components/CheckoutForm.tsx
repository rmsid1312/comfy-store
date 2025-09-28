import React from "react";
import { Form, redirect, type ActionFunction } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { store, type ReduxStore } from "../store";
import { toast } from "../hooks/use-toast";
import { customFetch, type Checkout } from "../utils";
import { formatAsDollars } from "../utils/formatAsDollars";
import { clearItems } from "../features/cart/cartSlice";
import axios from "axios";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;

    if (!name || !address) {
      toast({ description: "please fill out all fields" });
      return null;
    }

    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "please login to place an order" });
      return redirect("/login");
    }
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const result = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      console.log(result);
      store.dispatch(clearItems());
      toast({ description: "order placed" });
      return redirect("/orders");
    } catch (error) {
      toast({ description: "order failed" });
      return null;
    }
    return null;
  };

export default function CheckoutForm() {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <SubmitBtn text="Place Your Order" className="mt-4" />
    </Form>
  );
}
