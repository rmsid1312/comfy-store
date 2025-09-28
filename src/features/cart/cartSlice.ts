import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../../utils";
import { toast } from "../../hooks/use-toast";

const initialState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

// const getCartFromLocalStorage = (): CartState => {
//   const cartItem = localStorage.getItem("cart");
//   return cartItem ? JSON.parse(cartItem) : initialState;
// };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;
      const item = state.cartItems.find(
        (item) => item.cartID === newCartItem.cartID
      );
      if (item) {
        item.amount += newCartItem.amount;
      } else {
        state.cartItems.push(newCartItem);
      }
      state.numItemsInCart += newCartItem.amount;
      state.cartTotal += Number(newCartItem.price) * newCartItem.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: "Item add to cart." });
    },
    clearItems: () => {
      localStorage.setItem("cart", JSON.stringify(initialState));
      return initialState;
    },
    removeItems: (state, action: PayloadAction<string>) => {
      const cartID = action.payload;
      const cartItem = state.cartItems.find((item) => item.cartID === cartID);
      if (!cartItem) return;
      state.numItemsInCart -= cartItem.amount;
      state.cartTotal -= Number(cartItem.price) * cartItem.amount;
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartItem.cartID
      );
      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: "Item remove to cart." });
    },
    editItems: (
      state,
      action: PayloadAction<{ cartID: string; amount: number }>
    ) => {
      const { cartID, amount } = action.payload;
      const cartItem = state.cartItems.find((item) => item.cartID === cartID);
      if (!cartItem) return;
      state.numItemsInCart += amount - cartItem.amount;
      state.cartTotal += Number(cartItem.price) * (amount - cartItem.amount);
      cartItem.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: "Updated cartItem." });
    },
    calculateTotals: (state) => {
      state.tax = state.cartTotal * 0.1;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addItems, clearItems, removeItems, editItems, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
