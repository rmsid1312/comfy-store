import { useState } from "react";
import { Label } from "./ui/label";
import { formatAsDollars } from "../utils/formatAsDollars";
import { Slider } from "./ui/slider";

type FormRangeProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

export default function FormRange({
  name,
  label,
  defaultValue,
}: FormRangeProps) {
  const step = 1000; // cents
  const maxPrice = 100000;
  const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
  const [selectedPrice, setSelectPrice] = useState(defaultPrice);

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize flex justify-between">
        {label || name}
        <span>{formatAsDollars(selectedPrice)}</span>
      </Label>
      <Slider
        id={name}
        name={name}
        step={step}
        max={maxPrice}
        value={[selectedPrice]}
        onValueChange={(value) => setSelectPrice(value[0])}
        className="mt-4"
      />
    </div>
  );
}
