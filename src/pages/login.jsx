import {
  ButtonPrimary,
  PasswordField,
  Stack,
  Text,
  Text2,
  Text3,
  TextField
} from '@telefonica/mistica'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/global.css'
import '../assets/css/login.css'
import Loading from '../components/loading'
import { post } from '../utils/api'

export default function Login({ setUsuario }) {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const setCampo = (campo, valor) => {
    setFormData(prev => ({
      ...prev,
      [campo]: valor
    }))
    setError('') // Limpa erro ao digitar
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const usuarioData = await post('/vivo-journey/usuarios/login', {
        email: formData.email,
        senha: formData.senha
      })
      setUsuario(usuarioData)

      // Navega para o dashboard
      navigate('/dashboard')
    } catch (error) {
      // Extrai a mensagem de erro da API se disponível
      const errorMessage = error.message.includes('Email ou senha inválidos')
        ? 'Email ou senha inválidos. Tente novamente.'
        : 'Erro ao fazer login. Tente novamente.'

      setError(errorMessage)
    }
  }

  return (
    <div className="login-container">
      <Loading />
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <Stack space={error ? 12 : 16} className="login-forms">
            <h1>Acesse o Vivo Journey</h1>
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              required
              value={formData.email}
              onChangeValue={valor => setCampo('email', valor)}
              inputProps={{ maxLength: 50 }}
            />
            <PasswordField
              fullWidth
              name="senha"
              label="Senha"
              required
              value={formData.senha}
              onChangeValue={valor => setCampo('senha', valor)}
              inputProps={{ maxLength: 50 }}
            />
            {error && (
              <Text
                style={{ margin: '0px', padding: '0px' }}
                color="#55038C"
                textAlign="center"
                size={14}
                weight="regular"
              >
                {error}
              </Text>
            )}
            <ButtonPrimary
              submit
              style={{
                borderRadius: '15px',
                width: '100%',
                marginTop: error ? '0px' : '16px'
              }}
            >
              Acessar
            </ButtonPrimary>
          </Stack>
        </form>
      </div>
    </div>
  )
}
