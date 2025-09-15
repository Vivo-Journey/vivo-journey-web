import { ButtonLink, ButtonPrimary, CoverCard, EmptyState, Grid, GridItem, IconWinnerRegular, Inline, Stepper, Tag, Text, Tooltip } from '@telefonica/mistica';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/global.css';
import '../assets/css/trilha-progresso.css';
import Menu from "../components/menu";
import { get } from '../utils/api';

export default function TrilhaProgresso() {
    const location = useLocation();
    const { idTrilha } = location.state || {};
    const navigate = useNavigate();

    const [modulos, setModulos] = useState([]);

    useEffect(() => {
        if (!idTrilha) return;
        get(`/vivo-journey/usuarios/3/trilhas/${idTrilha}/modulos`)
            .then((data) => {
                setModulos(Array.isArray(data) ? data : []);
            })
            .catch((error) => {
                console.error("Erro ao buscar módulos:", error);
                setModulos([]);
            });
    }, [idTrilha]);

    console.log('modulos', modulos);

    const currentIndex = (() => {
        const indexEmAndamento = modulos?.findIndex(m => m.status.toLowerCase() === "em andamento");
        if (indexEmAndamento !== -1) return indexEmAndamento;

        const indexPendente = modulos.findIndex(m => m.status.toLowerCase() === "pendente");
        if (indexPendente !== -1) return indexPendente;

        return modulos.length > 0 ? modulos.length - 1 : 0;
    })();

    const steps = modulos.map((modulo, index) => (
        <Tooltip
            key={modulo.id_modulo}
            width={350}
            target={
                <Text style={{ fontWeight: modulo.status === "Concluído" ? "bold" : "normal" }}>
                    {`Módulo ${index + 1}`}
                </Text>
            }
            description={
                <>
                    <Inline space={8} alignItems="center">
                        <IconWinnerRegular color={modulo.status === "Concluído" ? "#55038C" : "#B292C8"} />
                        <Text>{modulo.descricao}</Text>
                    </Inline>

                    {/* botão alinhado à direita */}
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
                        <ButtonLink small href="https://google.com">
                            Acessar Módulo
                        </ButtonLink>
                    </div>
                </>

            }
        />
    ));

    return (
        modulos.length === 0 ?
            <Grid columns={12}>
                <GridItem columnSpan={3}>
                    <Menu />
                </GridItem>
                <GridItem columnSpan={9}>
                    <EmptyState
                        largeImageUrl="https://i.imgur.com/yGFKQOy.png"
                        title="Sem Módulos"
                        description="Esta trilha ainda não possuí módulos."
                        button={
                            <ButtonPrimary onPress={() => navigate("/lista-trilhas")}>Voltar a Lista</ButtonPrimary>
                        }
                    />
                </GridItem>
            </Grid>
            :
            <div className="tela-trilha">
                <Grid columns={12}>
                    <GridItem columnSpan={3}>
                        <Menu />
                    </GridItem>
                    <GridItem columnSpan={9}>
                        <div className='trilha-container'>
                            <div className='trilha-banner'>
                                <CoverCard width={"100vh"} height={"45vh"}
                                    size="display"
                                    headline={<Tag type="promo">Cultura da Empresa</Tag>}
                                    title="Eco Sistema Vivo"
                                    description="Conheça os valores e a história da Vivo, 
                            entendendo como nossa paixão por inovar e conectar pessoas molda o nosso dia a dia."
                                    imageSrc="https://picsum.photos/1200/1200"
                                    buttonPrimary={
                                        <ButtonPrimary small href="https://google.com">
                                            Continuar
                                        </ButtonPrimary>
                                    }
                                />
                            </div>

                            {modulos.length > 0 && (
                                <Stepper
                                    currentIndex={currentIndex}
                                    steps={steps}
                                />
                            )}
                        </div>
                    </GridItem>
                </Grid>
            </div>
    );
}
