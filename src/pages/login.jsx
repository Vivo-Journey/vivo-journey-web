import { Box, ButtonLayout, ButtonPrimary, PasswordField, Stack, Text, TextField, TextLink } from '@telefonica/mistica';
import '../assets/css/global.css';
import '../assets/css/login.css';
import Loading from '../components/loading';

export default function Login() {

    return (
        <div className="login-container">
            <Loading />
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