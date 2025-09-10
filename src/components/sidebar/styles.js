import styled from "styled-components";
import theme from "../../theme/theme";

export const SidebarContainer = styled.aside`
  width: 260px;
  background: ${theme.colors.background};
  min-height: 100vh;
  box-shadow: 2px 0 10px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  padding: 32px 0;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  color: ${theme.colors.primary};
  padding: 0 32px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserSectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 32px 24px;
`;

export const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${theme.colors.primary};
`;

export const UserName = styled.div`
  font-weight: 500;
  color: #222;
`;

export const NavListContainer = styled.ul`
  list-style: none;
  padding: 0 0 0 32px;
  margin: 0;
  flex: 1;
`;

export const NavItem = styled.li`
  padding: 12px 0;
  font-size: 1rem;
  color: ${({ active }) => (active ? theme.colors.primary : "#222")};
  background: ${({ active }) => (active ? theme.colors.listActiveBg : "transparent")};
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 4px;
`;

export const BottomSectionContainer = styled.div`
  padding: 0 32px 24px;
  `;

export const DarkModeToggle = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  font-size: 1rem;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #E53D3D;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  cursor: pointer;
`;