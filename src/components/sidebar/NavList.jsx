import React from "react";
import { NavListContainer, NavItem } from "./styles";

const navItems = [
  { label: "Geral", active: true },
  { label: "Minhas Trilhas" },
  { label: "Meus Certificados" },
  { label: "Documentos" },
  { label: "Ajuda" },
];

const NavList = () => (
  <NavListContainer>
    {navItems.map((item) => (
      <NavItem key={item.label} active={item.active}>
        {item.label}
      </NavItem>
    ))}
  </NavListContainer>
);

export default NavList;