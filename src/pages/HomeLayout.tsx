import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";

export default function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        {isLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}
