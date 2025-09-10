import React, { useState } from "react";
import { BottomSectionContainer, LogoutButton } from "./styles";
import { FiSun, FiMoon, FiLogOut } from "react-icons/fi";

const BottomSection = () => {
  return (
    <BottomSectionContainer>
      <LogoutButton>
        <FiLogOut /> Logout
      </LogoutButton>
    </BottomSectionContainer>
  );
};

export default BottomSection;