import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useToast } from "../hooks/use-toast";
import { clearItems } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const user = useAppSelector((state) => state.userState.user);
  const handleLogout = () => {
    dispatch(clearItems());
    dispatch(logoutUser());
    toast({ description: "Logged Out" });
    navigate("/");
  };
  return (
    <header>
      <div className="align-element flex justify-center items-center sm:justify-end py-2">
        {/* {User} */}
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-6 justify-center items-center -mr-4">
            {/*  https://ui.shadcn.com/docs/components/button => asChild 옵션은 하위 컴포넌트를 버튼처럼 보이게 한다. */}
            <Button asChild variant="link" size="sm">
              <Link to="/login">Sign in / Guest</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
