import {
  ButtonPrimary,
  PasswordField,
  Stack,
  Text,
  TextField
} from "@telefonica/mistica";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/global.css";
import "../assets/css/login.css";
import Loading from "../components/loading";
import { post } from "../utils/api";
import { setLoading } from "../utils/loading";

export default function Login({ setUsuario }) {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const setCampo = (campo, valor) => {
    setFormData((prev) => ({
      ...prev,
      [campo]: String(valor ?? ""),
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const usuarioData = await post("/vivo-journey/usuarios/login", {
        email: formData.email,
        senha: formData.senha,
      });

      if (usuarioData?.message && usuarioData.message.includes("inválidos")) {
        setError("Email ou senha inválidos. Tente novamente.");
        return;
      }

      if (usuarioData) {
        localStorage.setItem("usuario", JSON.stringify(usuarioData));
        setUsuario(usuarioData);

        // Redireciona apenas se login for bem-sucedido
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Loading />
      <div className="login-container">
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
                value={formData.email ?? ""}
                onChangeValue={(valor) => setCampo("email", valor)}
                inputProps={{ maxLength: 50 }}
              />
              <PasswordField
                fullWidth
                name="senha"
                label="Senha"
                required
                value={formData.senha ?? ""}
                onChangeValue={(valor) => setCampo("senha", valor)}
                inputProps={{ maxLength: 50 }}
              />

              {/* Mensagem de erro */}
              {error && (
                <Text
                  style={{
                    margin: "0px",
                    padding: "8px",
                    background: "#fdd",
                    borderRadius: "8px",
                  }}
                  color="negative"
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
                  borderRadius: "15px",
                  width: "100%",
                  marginTop: error ? "0px" : "16px",
                }}
              >
                Acessar
              </ButtonPrimary>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}
