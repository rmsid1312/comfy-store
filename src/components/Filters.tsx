import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "./ui/button";
import type { ProductsResponseWithParams } from "../utils";
import FormInput from "./FormInput";

export default function Filters() {
  console.log(useLoaderData() as ProductsResponseWithParams);
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  // const { search } = params;

  return (
    <Form className="border rounded-md px-8 py-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid gap-4">
      {/* {search} */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue=""
      />
      <Button type="submit" size="sm" className="mb-2 self-end ">
        search
      </Button>
      <Button
        type="reset"
        size="sm"
        className="mb-2 self-end"
        variant="outline"
        asChild
      >
        <Link to="/products">reset</Link>
      </Button>
    </Form>
  );
}
