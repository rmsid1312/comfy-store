import { Outlet } from "react-router-dom";
import { Header } from "../components";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <div className="align-element py-20">navbar</div>
      <Outlet />
    </>
  );
}
