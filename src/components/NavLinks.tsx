import { NavLink } from "react-router-dom";
import { links } from "../utils";
export default function NavLinks() {
  return (
    <div className="hidden lg:flex gap-x-4 justify-center items-center">
      {links.map((link) => {
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) => {
              return `capitalize font-light tracking-wide ${
                isActive ? "text-blue-500" : ""
              }`;
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}
