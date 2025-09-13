import { ButtonPrimary, CoverCard, Grid, GridItem, IconCheckFilled, IconSuccess, IconWinnerRegular, Stepper, Tag, Text, Tooltip } from '@telefonica/mistica';
import '../assets/css/global.css';
import '../assets/css/trilha-progresso.css';
import Menu from "../components/menu";

export default function TrilhaProgresso() {

    return (
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
                                    //alterar link de destino
                                    <ButtonPrimary small href="https://google.com">
                                        Continuar
                                    </ButtonPrimary>
                                }
                            />
                        </div>
                        <Stepper
                            currentIndex={2}
                            steps={[
                                <Tooltip target={<Text>Módulo 1</Text>} description={
                                    <><IconWinnerRegular color='#55038C'/>
                                    <span> Conteúdo do primeiro módulo</span></>} />,
                                <Tooltip target={<Text>Módulo 2</Text>} description={
                                    <><IconWinnerRegular color='#55038C'/>
                                    <span> Conteúdo dp segundo módulo</span></>} />,
                                <Tooltip target={<Text>Módulo 3</Text>} description={
                                    <><IconWinnerRegular color='#55038C'/>
                                    <span> Conteúdo do terceiro módulo</span></>} />,
                                <Tooltip target={<Text>Módulo 4</Text>} description={
                                    <><IconWinnerRegular color='#55038C'/>
                                    <span> Conteúdo do quarto módulo</span></>} />,
                            ]}
                        />
                    </div>
                </GridItem>
            </Grid>
        </div>
    )
}