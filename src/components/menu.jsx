import logoVivoMenu from "../assets/img/VivoLogoMenu.svg";
import iconBack from "../assets/img/icon-back.svg";
import imgPerfil from "../assets/img/img-perfil.png";
import iconHome from "../assets/img/icon-home.svg";
import iconTrilhas from "../assets/img/icon-trilhas.svg";
import iconCertificados from "../assets/img/icon-certificados.svg";
import iconDocs from "../assets/img/icon-docs.svg";
import iconHelp from "../assets/img/icon-help.svg";
import iconLogout from "../assets/img/icon-logout.svg";
import '../assets/css/global.css';
import '../assets/css/menu.css';
import { useEffect, useState } from "react";
import { get } from "../utils/api";
import { Avatar } from "@telefonica/mistica";

export default function Menu() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        get("/usuarios/1").then((data) => setUser(data));
    }, []);

    return (
        <div className="container-menu">
            <div className="menu-padding">
                <img src={logoVivoMenu} alt='Logo da Vivo' className="img-logo-menu" />
                <div className="menu-text-minimize">
                    <img src={iconBack} alt='Icone de retorno' />
                    <p>Minimizar</p>
                </div>
                <div className="menu-info-perfil">
                    <Avatar size={64} backgroundColor={"var(--cor-roxo-escuro)"}/>
                    <p>{user?.nome_completo || "Nome Completo"}</p>
                </div>
            </div>
            <div className="menu-container-options">
                <div className="menu-options" id="option-principal">
                    <div className="menu-option">
                        <img src={iconHome} alt='Icone de Home' />
                        <p>Geral</p>
                    </div>
                    <div className="menu-option">
                        <img src={iconTrilhas} alt='Icone de Home' />
                        <p>Minhas Trilhas</p>
                    </div>
                    <div className="menu-option">
                        <img src={iconCertificados} alt='Icone de Home' />
                        <p>Meus Certificados</p>
                    </div>
                    <div className="menu-option">
                        <img src={iconDocs} alt='Icone de Home' />
                        <p>Documentos</p>
                    </div>
                    <div className="menu-option">
                        <img src={iconHelp} alt='Icone de Home' />
                        <p>Ajuda</p>
                    </div>
                </div>
                <div className="menu-options">
                    <div className="menu-option">
                        <img src={iconLogout} alt='Icone de Home' />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}