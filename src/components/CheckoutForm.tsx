import React from "react";
import { Form, type ActionFunction } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { store, type ReduxStore } from "../store";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null> => {
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
