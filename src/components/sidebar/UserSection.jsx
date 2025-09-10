import React from "react";
import { UserSectionContainer, Avatar, UserName } from "./styles";

const UserSection = ({ user }) => (
  <UserSectionContainer>
    <Avatar>{user?.nome_completo?.[0]}</Avatar>
    <UserName>{user?.nome_completo || "Usuário"}</UserName>
  </UserSectionContainer>
);

export default UserSection;