import { useAppSelector } from "../hooks";
import {
  FirstColumn,
  FourthColumn,
  SecondColumn,
  ThirdColumn,
} from "./CartItemColumns";
import { Card } from "./ui/card";

export default function CartItemList() {
  const cartItems = useAppSelector((state) => state.cartState.cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        const { cartID, title, price, image, amount, company, productColor } =
          item;
        return (
          <Card
            key={cartID}
            className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8"
          >
            <FirstColumn image={image} title={title} />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdColumn amount={amount} cartID={cartID} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}
