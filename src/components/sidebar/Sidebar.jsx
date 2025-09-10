import React, { useEffect, useState } from "react";
import { SidebarContainer, Logo } from "./styles";
import UserSection from "./UserSection";
import NavList from "./NavList";
import BottomSection from "./BottomSection";
import { get } from "../../utils/api";

const Sidebar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    get("/usuarios/1").then((data) => setUser(data));
  }, []);

  return (
    <SidebarContainer>
      <Logo>
        vivo
        <button
          style={{
            background: "none",
            border: "none",
            color: "#7A2EFF",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          <strong>-</strong>
        </button>
      </Logo>
      <UserSection user={user} />
      <NavList />
      <BottomSection />
    </SidebarContainer>
  );
};

export default Sidebar;