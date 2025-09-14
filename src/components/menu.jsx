import { Avatar, Inline, Text } from "@telefonica/mistica";
import '../assets/css/global.css';
import '../assets/css/menu.css';
import logoVivoMenu from "../assets/img/VivoLogoMenu.svg";
import iconBack from "../assets/img/icon-back.svg";
import iconCertificados from "../assets/img/icon-certificados.svg";
import iconDocs from "../assets/img/icon-docs.svg";
import iconHelp from "../assets/img/icon-help.svg";
import iconHome from "../assets/img/icon-home.svg";
import iconLogout from "../assets/img/icon-logout.svg";
import iconTrilhas from "../assets/img/icon-trilhas.svg";

export default function Menu({ user }) {

    const usuario = user ?? { primeiro_nome: 'Vivo', ultimo_nome: 'Journey' };

    return (
        <div className="container-menu">
            <div className="menu-padding">
                <img src={logoVivoMenu} alt='Logo da Vivo' className="img-logo-menu" />
                <div className="menu-text-minimize">
                    <img src={iconBack} alt='Icone de retorno' />
                    <p>Minimizar</p>
                </div>
                <Inline space={0} alignItems="baseline">
                    <Avatar size={64} initials={usuario?.primeiro_nome?.[0] + usuario?.ultimo_nome?.[0]} />
                    <Text color="#262626">{usuario?.primeiro_nome + ' ' + usuario?.ultimo_nome}</Text>
                </Inline>
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