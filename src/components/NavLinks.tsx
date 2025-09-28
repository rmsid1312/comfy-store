import { NavLink } from "react-router-dom";
import { links } from "../utils";
import { useAppSelector } from "../hooks";
export default function NavLinks() {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <div className="hidden lg:flex gap-x-4 justify-center items-center">
      {links.map((link) => {
        const restrictedRoutes = link.href === 'checkout' || link.href === 'orders';
        if(restrictedRoutes && !user) return null;
        
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
