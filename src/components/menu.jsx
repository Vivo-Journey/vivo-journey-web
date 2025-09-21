import {
  Avatar,
  IconChevronLeftRegular,
  IconChevronRightRegular,
  IconDigitalLibraryRegular,
  IconFolderRegular,
  IconHomeRegular,
  IconLogoutRegular,
  IconQuestionRegular,
  IconStarRegular,
  Inline,
  Text1,
} from "@telefonica/mistica";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/menu.css";
import logoVivoMenu from "../assets/img/VivoLogoMenu.svg";
import { get } from "../utils/api";

const Menu = ({ collapsed, setCollapsed }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    get("/vivo-journey/usuarios/3").then((data) => setUser(data));
  }, []);

  const usuario = user ?? { primeiro_nome: "Vivo", ultimo_nome: "Journey" };

  return (
    <div
      className={`container-menu-block ${collapsed ? "collapsed" : ""}`}
      style={{
        width: collapsed ? "72px" : "320px",
        transition: "width 0.3s ease",
        overflow: "hidden",
      }}
    >
      <div className="container-menu-flex">
        {/* MENU PADDING */}
        <div className="menu-padding">
          {/* LOGO VIVO */}
          <div
            className="img-logo-menu"
            style={{ justifyContent: collapsed ? "center" : "flex-start" }}
          >
            <img
              src={logoVivoMenu}
              alt="Logo Vivo"
              style={{ width: collapsed ? "32px" : "96px" }}
            />
          </div>

          {/* BOTÃO COLAPSAR */}
          <div
            className="menu-text-minimize"
            style={{
              justifyContent: collapsed ? "center" : "flex-start",
            }}
          >
            <button onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? (
                <IconChevronRightRegular color={"#6B6C6F"} size={20} />
              ) : (
                <>
                  <IconChevronLeftRegular color={"#6B6C6F"} size={20} />
                  <p>Minimizar</p>
                </>
              )}
            </button>
          </div>

          {/* AVATAR E NOME */}
          <Inline space={8} alignItems="center">
            <Avatar
              size={collapsed ? 64 : 64}
              initials={usuario?.primeiro_nome?.[0] + usuario?.ultimo_nome?.[0]}
            />
            {!collapsed && (
              <Text1>
                {usuario?.primeiro_nome + " " + usuario?.ultimo_nome}
              </Text1>
            )}
          </Inline>
        </div>

        {/* OPÇÕES */}
        <div
          className="menu-container-options"
          style={{ alignItems: collapsed ? "center" : "" }}
        >
          <div className="menu-options" id="option-principal">
            <button
              className="menu-option"
              onClick={() => navigate("/dashboard")}
            >
              <IconHomeRegular size={20} />
              {!collapsed && <p>Geral</p>}
            </button>
            <button
              className="menu-option"
              onClick={() => navigate("/lista-trilhas")}
            >
              <IconDigitalLibraryRegular size={20} />
              {!collapsed && <p>Minhas Trilhas</p>}
            </button>
            <button 
              className="menu-option"
              onClick={() => navigate("/lista-certificados")}>
              <IconStarRegular size={20} />
              {!collapsed && <p>Meus Certificados</p>}
            </button>
            <button 
              className="menu-option"
              onClick={() => navigate("/lista-documentos")}>
              <IconFolderRegular size={20} />
              {!collapsed && <p>Documentos</p>}
            </button>
            <button 
              className="menu-option"
              onClick={() => navigate("/suporte")}>
              <IconQuestionRegular size={20} />
              {!collapsed && <p>Ajuda</p>}
            </button>
            <button 
              className="menu-option"
              onClick={() => navigate("/")}>
              <IconLogoutRegular size={20} />
              {!collapsed && <p>Logout</p>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
