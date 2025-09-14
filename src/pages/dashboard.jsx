import { Avatar, Box, Grid, GridItem, Meter, ResponsiveLayout, Title4 } from "@telefonica/mistica";
import { useEffect, useState } from "react";
import '../assets/css/dashboard.css';
import '../assets/css/global.css';
import imgFundo from "../assets/img/img-fundo-tela.svg";
import Menu from "../components/menu";
import { get } from "../utils/api";

export default function Dashboard() {

    const [user, setUser] = useState(null);
    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {
        get("/vivo-journey/usuarios/3").then((data) => setUser(data));
        get("/vivo-journey/usuarios/3/trilhas").then((data) => setTrilhas(data));
    }, []);

    const buddy = user?.buddy;
    const cargoBuddy = buddy?.cargo;

    console.log('buddy', buddy);

    return (
        <ResponsiveLayout backgroundColor={"#F0EDFF"} fullWidth>
            <div className="tela-dash">
                <Grid columns={12} height={'100%'}>
                    <GridItem columnSpan={3}>
                        <Menu />
                        <div className="display-menu"></div>
                    </GridItem>
                    <GridItem columnSpan={9}>
                        <Box padding={32}>
                            <Title4>Suas Trilhas</Title4>
                            <div className="cards-trilhas">
                                {trilhas?.slice(0, 3).map((trilha) => (
                                    <div className="dash-card-trilha" key={trilha?.id_trilha}>
                                        <Meter colors={["var(--cor-rosa-chiclete)", "#B292C8"]} width={150} type="circular" values={[trilha?.percentual_progresso, 100 - trilha?.percentual_progresso, 0]} />
                                        <p>{trilha.percentual_progresso}%</p>
                                        <div>
                                            <h1>{trilha.nome}</h1>
                                            <h3>Prazo: {trilha.data_prevista_fim}</h3>
                                        </div>
                                    </div>
                                )
                                )
                                }
                            </div>
                            <div className="dash-info-buddy">
                                <div className="card-buddy">
                                    <h1>Seu Buddy!</h1>
                                    <Avatar size={120} src="https://picsum.photos/1200/1200" badge />
                                    <div className="buddy-infos">
                                        <div className="buddy-campo-info">
                                            <h3>Nome</h3>
                                            <span>{buddy?.primeiro_nome + ' ' + buddy?.ultimo_nome}</span>
                                        </div>
                                        <div className="buddy-campo-info">
                                            <h3>Cargo</h3>
                                            <span>{cargoBuddy?.descricao}</span>
                                        </div>
                                        <div className="buddy-campo-info">
                                            <h3>Email</h3>
                                            <span>{buddy?.email_corp}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-buddy">
                                    <h1>Perguntas Frequentes</h1>
                                    <div className="buddy-infos">
                                        <div>
                                            <ul className="buddy-campo-info-2">
                                                <li>Qual é a forma mais eficaz de me comunicar com a equipe no dia a dia?</li>
                                                <li>Quais são os principais projetos em que a equipe está trabalhando no momento?</li>
                                                <li>Qual a expectativa de entrega para os meus primeiros 30 ou 60 dias?</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={imgFundo} className="dash-img-fundo" alt="logo de fundo vivo"></img>
                        </Box>
                    </GridItem>
                </Grid>

            </div>
        </ResponsiveLayout>
    )
}