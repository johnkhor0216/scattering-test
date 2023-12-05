"use client";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  href: string;
  isActive?: boolean;
  children: ReactNode;
}

const MenuItem = ({ href, isActive, children }: MenuItemProps) => {
  return (
    <NavLink to={href} className={isActive ? "font-extrabold" : ""}>
      {children}
    </NavLink>
  );
};

const NavBar = () => {
  const path = usePathname();
  return (
    <>
      <MenuItem href="/trade" isActive={path === "/trade"}>
        Trade
      </MenuItem>
      <MenuItem href="/market" isActive={path.startsWith("/market")}>
        Market
      </MenuItem>
      <MenuItem href="/liquidity" isActive={path.startsWith("/liquidity")}>
        Liquidity
      </MenuItem>
      <MenuItem href="/airdrop" isActive={path.startsWith("/airdrop")}>
        Airdrop
      </MenuItem>
    </>
  );
};

export default NavBar;
