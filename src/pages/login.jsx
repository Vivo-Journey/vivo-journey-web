import { Box, ButtonLayout, ButtonPrimary, PasswordField, Stack, Text, TextField, TextLink } from '@telefonica/mistica';
import '../assets/css/global.css';
import '../assets/css/login.css';

export default function Login() {

    return (
        <div className="login-container">
            <div className='login-box'>
                <Stack space={16} className='login-forms'>
                    <h1>Acesse o Vivo Journey</h1>
                    <TextField
                        fullWidth
                        name="user"
                        label="Usuário"
                        required
                        inputProps={{ maxLength: 50 }}
                    />
                    <PasswordField
                        fullWidth
                        name="password"
                        label="Senha"
                        required
                        inputProps={{ maxLength: 50 }}
                    />
                    <TextLink 
                    //add caminho link
                    // href="" newTab
                    >
                        Esqueceu sua senha?
                    </TextLink>{" "}
                    <ButtonLayout
                        primaryButton={
                            <ButtonPrimary submit style={{ borderRadius: '15px', width: '100%' }}>
                                Acessar
                            </ButtonPrimary>
                        }
                    />
                </Stack>
            </div>

        </div>

    )
}