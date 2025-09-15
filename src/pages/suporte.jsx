import { Box, ButtonLayout, ButtonPrimary, EmailField, Form, Grid, GridItem, IconWarningRegular, Stack, TextField } from "@telefonica/mistica";
import Menu from "../components/menu";
import '../assets/css/global.css';
import '../assets/css/suporte.css';
import { useSubmit } from "react-router-dom";

export default function Suporte() {


    return (
        <Grid columns={12}>
            <GridItem columnSpan={3}>
                <Menu />
            </GridItem>
            <GridItem columnSpan={9}>
                <div className="help-container">
                    <IconWarningRegular color="#55038C" size={32}/>
                    <h1>Relatar Problema</h1>
                    <Form
                        onSubmit={(formData) =>
                            alert({
                                title: "This is your data",
                                message: JSON.stringify(formData, null, 2),
                            })
                        }
                    >
                        <Box>
                            <Stack space={16}>
                                <TextField fullWidth name="local" label="Onde está o problema ?" required inputProps={{ maxLength: 150 }} />
                                <TextField fullWidth name="problema" label="O que aconteceu ?" required  inputProps={{ maxLength: 500 }} />
                                {/* <ButtonLayout
                                    primaryButton={<ButtonPrimary submit style={{ borderRadius: '15px', backgroundColor: 'transparent', color: '#55038C', border: '1px solid #55038C' }}>Anexar Imagem</ButtonPrimary>}
                                /> */}
                                <ButtonLayout
                                    primaryButton={<ButtonPrimary submit style={{ borderRadius: '15px' }}>Enviar</ButtonPrimary>}
                                />
                            </Stack>
                        </Box>
                    </Form>
                </div>
            </GridItem>
        </Grid>
    )
}