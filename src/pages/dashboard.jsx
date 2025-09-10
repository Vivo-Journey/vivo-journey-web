import Menu from "../components/menu";
import '../assets/css/global.css';
import '../assets/css/dashboard.css';
import porc from "../assets/img/Meter.png";

export default function Dashboard() {
    
    return (
        <div className="tela-dash">
            <Menu></Menu>
            <div className="dash-container">
                <h1>Suas Trilhas</h1>
                <div className="cards-trilhas">
                    <div className="dash-card-trilha">
                        {/* img temporária */}
                        <img src={porc}></img>
                        <p>75%</p>
                        <div>
                            <h1>Cultura da Empresa</h1>
                            <h3>20 Vídeos</h3>
                        </div>
                    </div>
                    <div className="dash-card-trilha">
                        {/* img temporária */}
                        <img src={porc}></img>
                        <p>75%</p>
                        <div>
                            <h1>Cultura da Empresa</h1>
                            <h3>20 Vídeos</h3>
                        </div>
                    </div>
                    <div className="dash-card-trilha">
                        {/* img temporária */}
                        <img src={porc}></img>
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