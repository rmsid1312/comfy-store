import { Form, Link } from "react-router-dom";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Filters() {
  return (
    <Form className="border rounded-md px-8 py-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid gap-4">
      <div className="mb-2">
        <Label htmlFor="search">Search Product</Label>
        <Input id="search" name="search" type="text" defaultValue="" />
      </div>
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
