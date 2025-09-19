import Menu from "../components/menu";
import '../assets/css/conteudo-trilha.css';
import '../assets/css/global.css';
import { Accordion, AccordionItem, Header, HeaderLayout, IconIdCardRegular, IconInvoicePlanFileRegular, IconLifeguardFloatRegular, IconLocationMapRegular, IconLockEyeClosedRegular, IconQuestionRegular, Image, ResponsiveLayout, Text, Text3, Video } from "@telefonica/mistica";
import { useState } from "react";
import MenuTrilhas from "../components/menu-trilhas";
import { Navigate, useNavigate } from "react-router-dom";

export default function ConteudoTrilha() {

    const [menuCollapsed, setMenuCollapsed] = useState(false);
      const navigate = useNavigate();

    return (
        <ResponsiveLayout fullWidth>
            <Menu collapsed={menuCollapsed} setCollapsed={setMenuCollapsed} />
            <div
                style={{
                    marginLeft: menuCollapsed ? "72px" : "320px", // ajusta conforme menu
                    transition: "margin-left 0.3s ease",
                    padding: "32px",
                    backgroundColor: "#E6E4F2"
                }}
            >
                <div className="aligment">
                    <div style={{ width: '20%' }} >
                        <MenuTrilhas />
                    </div>
                    <div className="conteudo-container">
                        <div className="conteudo-header">
                            <h1>Produtos VIVO</h1>
                            <buton onClick={() => navigate("/suporte")}>
                                <IconQuestionRegular size={28} color="#55038C" />
                            </buton>
                        </div>
                        <hr />
                        <section style={{padding: '0'}}>
                            <Video
                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                                aspectRatio="16:9"
                            />
                        </section>
                        <section className="conteudo-text-info">
                            <div className="conteudo-text-titulo">
                                <HeaderLayout
                                    header={<Header title="Conectando Você ao Futuro com a VIVO!" />}
                                />
                            </div>
                            <Text>A VIVO oferece uma ampla gama de produtos e serviços para conectar você com o que há de mais moderno em tecnologia.
                                Seja com planos móveis, internet fibra de alta velocidade ou pacotes completos para sua casa, a VIVO busca inovar sempre. <br /><br />
                                Além da qualidade de rede, a empresa disponibiliza aparelhos modernos, serviços digitais e soluções empresariais.
                                Tudo isso com atendimento diferenciado, para garantir que você aproveite o melhor da conectividade todos os dias.<br /><br /></Text>
                            <Image src="https://picsum.photos/1200/1200" aspectRatio="16:9" />
                        </section>
                    </div>
                </div>
            </div>

        </ResponsiveLayout>
    )
}