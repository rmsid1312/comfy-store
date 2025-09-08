import { Link } from "react-router-dom";
import { Armchair } from "lucide-react";

export default function Logo() {
  return (
    <Link
      to="/"
      className="lg:flex hidden justify-center items-center bg-primary p-2 rounded-lg text-white"
    >
      <Armchair className="h-8 w-8" />
    </Link>
  );
}
