import { useAppSelector } from "../hooks";
import { formatAsDollars } from "../utils/formatAsDollars";
import { Card, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
export default function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
    (state) => state.cartState
  );
  return (
    <Card className="p-8 bg-muted rounded-lg">
      <CardTotalRow label="Subtotal" amount={cartTotal} />
      <CardTotalRow label="Shpping" amount={shipping} />
      <CardTotalRow label="Tax" amount={tax} />
      <CardTitle className="mt-8">
        <CardTotalRow label="Order Total" amount={orderTotal} lastRow />
      </CardTitle>
    </Card>
  );
}

function CardTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatAsDollars(amount)}</span>
      </div>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
}
