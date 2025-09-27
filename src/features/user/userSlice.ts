import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { toast } from "../../hooks/use-toast";

export type User = { username: string; jwt: string };
export type UserState = { user: User | null };
const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (!user) return null;
  return JSON.parse(user);
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      if (user.username === "demo user") {
        toast({ description: "Welcome Guest Users" });
        return;
      }
      toast({ description: "Login successful" });
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export default userSlice.reducer;
export const { loginUser, logoutUser } = userSlice.actions;
