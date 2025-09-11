import { Meter } from "@telefonica/mistica";
import '../assets/css/dashboard.css';
import '../assets/css/global.css';
import Menu from "../components/menu";

export default function Dashboard() {

    return (
        <div className="tela-dash">
            <Menu></Menu>
            <div className="dash-container">
                <h1>Suas Trilhas</h1>
                <div className="cards-trilhas">
                    <div className="dash-card-trilha">
                        {/* img temporária */}
                        <Meter colors={["var(--cor-rosa-chiclete)", "#B292C8"]} width={200} type="circular" values={[75, 25, 0]} />
                        <p>75%</p>
                        <div>
                            <h1>Cultura da Empresa</h1>
                            <h3>20 Vídeos</h3>
                        </div>
                    </div>
                    <div className="dash-card-trilha">
                        <Meter colors={["var(--cor-rosa-chiclete)", "#B292C8"]} width={200} type="circular" values={[75, 25, 0]} />
                        <p>75%</p>
                        <div>
                            <h1>Cultura da Empresa</h1>
                            <h3>20 Vídeos</h3>
                        </div>
                    </div>
                    <div className="dash-card-trilha">
                        <Meter colors={["var(--cor-rosa-chiclete)", "#B292C8"]} width={200} type="circular" values={[75, 25, 0]} />
                        <p>75%</p>
                        <div>
                            <h1>Cultura da Empresa</h1>
                            <h3>20 Vídeos</h3>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}