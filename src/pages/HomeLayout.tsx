import { Outlet } from "react-router-dom";
import { Header } from "../components";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <nav>navbar</nav>
      <Outlet />
    </>
  );
}
