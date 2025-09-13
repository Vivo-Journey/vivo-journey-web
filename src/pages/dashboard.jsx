import { Avatar, Grid, GridItem, Meter } from "@telefonica/mistica";
import '../assets/css/dashboard.css';
import '../assets/css/global.css';
import Menu from "../components/menu";
import imgFundo from "../assets/img/img-fundo-tela.svg";

export default function Dashboard() {

    return (
        <div className="tela-dash">
            <Grid columns={12}>
                <GridItem columnSpan={3}>
                    <Menu />
                </GridItem>
                <GridItem columnSpan={9}>
                    <div className="dash-container">
                        <h1>Suas Trilhas</h1>
                        <div className="cards-trilhas">
                            <div className="dash-card-trilha">
                                <Meter colors={["var(--cor-rosa-chiclete)", "#B292C8"]} width={150} type="circular" values={[75, 25, 0]} />
                                <p>75%</p>
                                <div>
                                    <h1>Cultura da Empresa</h1>
                                    <h3>20 Vídeos</h3>
                                </div>
                            </div>
                            <div className="dash-card-trilha">
                                <Meter colors={["var(--cor-rosa-chiclete)", "#B292C8"]} width={150} type="circular" values={[75, 25, 0]} />
                                <p>75%</p>
                                <div>
                                    <h1>Cultura da Empresa</h1>
                                    <h3>20 Vídeos</h3>
                                </div>
                            </div>
                            <div className="dash-card-trilha">
                                <Meter colors={["var(--cor-rosa-chiclete)", "#B292C8"]} width={150} type="circular" values={[75, 25, 0]} />
                                <p>75%</p>
                                <div>
                                    <h1>Cultura da Empresa</h1>
                                    <h3>20 Vídeos</h3>
                                </div>
                            </div>

                        </div>
                        <div className="dash-info-buddy">
                            <div className="card-buddy">
                                <h1>Seu Buddy!</h1>
                                <Avatar size={120} src="https://picsum.photos/1200/1200" badge />
                                <div className="buddy-infos">
                                    <div className="buddy-campo-info">
                                        <h3>Nome</h3>
                                        <span>Manoel Gomes</span>
                                    </div>
                                    <div className="buddy-campo-info">
                                        <h3>Cargo</h3>
                                        <span>Tech Lead</span>
                                    </div>
                                    <div className="buddy-campo-info">
                                        <h3>Email</h3>
                                        <span>manoelgomes@vivo.com.br</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-buddy">
                                <h1>Perguntas Frequentes</h1>
                                <div className="buddy-infos">
                                    <div >
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
                    </div>
                </GridItem>
            </Grid>

        </div>
    )
}