import { editItems, removeItems } from "../features/cart/cartSlice";
import { useAppDispatch } from "../hooks";
import { formatAsDollars } from "../utils/formatAsDollars";
import SelectProductAmount, { Mode } from "./SelectProductAmount";
import { Button } from "./ui/button";

export const FirstColumn = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <img
      src={image}
      alt={title}
      className="h-24 w-24 rounded-lg sm:h-32 sm:w-32"
    />
  );
};

export const SecondColumn = ({
  title,
  company,
  productColor,
}: {
  title: string;
  company: string;
  productColor: string;
}) => {
  return (
    <div className="sm:ml-4 md:ml-12 sm:w-48">
      <h3 className="capitalize font-semibold mb-2">{title}</h3>
      <span className="mb-2 capitalize">{company}</span>
      <p className="text-sm capitalize flex items-center gap-x-2">
        color :
        <span
          className="rounded-full"
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: productColor,
          }}
        ></span>
      </p>
    </div>
  );
};

export const ThirdColumn = ({
  amount,
  cartID,
}: {
  amount: number;
  cartID: string;
}) => {
  const dispatch = useAppDispatch();
  const removeItemFromCart = () => {
    dispatch(removeItems(cartID));
  };

  const setAmount = (value: number) => {
    dispatch(editItems({ cartID, amount: value }));
  };

  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={setAmount}
        mode={Mode.CartItem}
      />
      <Button variant="link" className="-ml-4" onClick={removeItemFromCart}>
        remove
      </Button>
    </div>
  );
};

export const FourthColumn = ({ price }: { price: string }) => {
  return <p className="ml-auto font-medium">{formatAsDollars(price)}</p>;
};
