import { Box, ButtonLayout, ButtonPrimary, Grid, GridItem, IconStarFilled, IconStarRegular, Rating, Stack, Tag, Text, TextField } from "@telefonica/mistica";
import Menu from "../components/menu";
import '../assets/css/global.css';
import '../assets/css/feedback.css';

export default function Feedback() {

    return (
        <Grid columns={12}>
            <GridItem columnSpan={3}>
                <Menu />
            </GridItem>
            <GridItem columnSpan={9}>
                <div className="feedback-container">
                    <div className="feedback-conteudo">
                        <div>
                            <h1>Feedback</h1>
                            <h2>Conte-nos o que você achou: seu feedback é muito importante para nós!</h2>

                        </div>
                        <div className="item-avaliado">
                            <Text color="#660099">Relevância do Conteúdo</Text>
                            <div style={{ backgroundColor: '#f0f0f0', padding: '1%', borderRadius: '20px' }}>
                                <Rating
                                    aria-label="quantitative rating"
                                    type="quantitative"
                                    size={24}
                                    defaultValue={3}
                                    count={5}
                                    icon={{
                                        ActiveIcon: IconStarFilled,
                                        InactiveIcon: IconStarRegular,
                                        color: "#F266A7"
                                    }}
                                />
                            </div>
                        </div>
                        <div className="item-avaliado">
                            <Text color="#660099">Organização da Plataforma</Text>
                            <div style={{ backgroundColor: '#f0f0f0', padding: '1%', borderRadius: '20px' }}>
                                <Rating
                                    aria-label="quantitative rating"
                                    type="quantitative"
                                    size={24}
                                    defaultValue={3}
                                    count={5}
                                    icon={{
                                        ActiveIcon: IconStarFilled,
                                        InactiveIcon: IconStarRegular,
                                        color: "#F266A7"
                                    }}
                                />
                            </div>
                        </div>
                        <div className="item-avaliado">
                            <Text color="#660099">Eficácia do Aprendizado</Text>
                            <div style={{ backgroundColor: '#f0f0f0', padding: '1%', borderRadius: '20px' }}>
                                <Rating
                                    aria-label="quantitative rating"
                                    type="quantitative"
                                    size={24}
                                    defaultValue={3}
                                    count={5}
                                    icon={{
                                        ActiveIcon: IconStarFilled,
                                        InactiveIcon: IconStarRegular,
                                        color: "#F266A7"
                                    }}
                                />
                            </div>
                        </div>
                        <div className="item-avaliado">
                            <Text color="#660099">Suporte e Ajuda</Text>
                            <div style={{ backgroundColor: '#f0f0f0', padding: '1%', borderRadius: '20px' }}>
                                <Rating
                                    aria-label="quantitative rating"
                                    type="quantitative"
                                    size={24}
                                    defaultValue={3}
                                    count={5}
                                    icon={{
                                        ActiveIcon: IconStarFilled,
                                        InactiveIcon: IconStarRegular,
                                        color: "#F266A7"
                                    }}
                                />
                            </div>
                        </div>
                        <Box>
                            <Stack space={16}>
                                <TextField fullWidth name="comentario" label="Faça algum comentário, crítica ou sugestão" inputProps={{ maxLength: 500 }} />
                                <ButtonLayout
                                    primaryButton={<ButtonPrimary submit style={{ borderRadius: '15px' }}>Enviar</ButtonPrimary>}
                                />
                            </Stack>
                        </Box>
                    </div>
                </div>
            </GridItem>
        </Grid>
    )
}