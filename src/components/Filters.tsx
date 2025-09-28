import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "./ui/button";
import type { ProductsResponseWithParams } from "../utils";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

export default function Filters() {
  console.log(useLoaderData() as ProductsResponseWithParams);
  const { meta } = useLoaderData() as ProductsResponseWithParams;
  // const { search } = params;

  return (
    <Form className="border rounded-md px-8 py-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid gap-4">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue=""
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        options={meta.categories}
        defaultValue=""
      />
      {/* COMPANIES */}
      <FormSelect
        label="select companies"
        name="company"
        options={meta.companies}
        defaultValue=""
      />

      {/* ORDER */}
      <FormSelect
        label="order by"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue=""
      />

      {/* PRICE */}
      <FormRange label="price" name="price" defaultValue="100000" />

      {/* SHIPPING */}
      <FormCheckbox
        label="free shpping"
        name="shpping"
        defaultValue="shpping"
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
