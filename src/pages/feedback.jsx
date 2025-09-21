import {
  Box,
  ButtonLayout,
  ButtonPrimary,
  IconStarFilled,
  IconStarRegular,
  Rating,
  ResponsiveLayout,
  Stack,
  Text,
  TextField,
} from "@telefonica/mistica";
import { useState } from "react";
import "../assets/css/feedback.css";
import "../assets/css/global.css";
import Loading from "../components/loading";
import Menu from "../components/menu";

const Feedback = ({ usuario, onLogout }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return (
    <ResponsiveLayout fullWidth>
      <Loading />
      <Menu
        collapsed={menuCollapsed}
        setCollapsed={setMenuCollapsed}
        usuario={usuario}
        onLogout={onLogout}
      />
      <div
        style={{
          marginLeft: menuCollapsed ? "72px" : "320px", // ajusta conforme o menu
          transition: "margin-left 0.3s ease",
          padding: "32px",
        }}
      >
        <div className="feedback-container">
          <div className="feedback-conteudo">
            <div>
              <h1>Feedback</h1>
              <h2>
                Conte-nos o que você achou: seu feedback é muito importante para
                nós!
              </h2>
            </div>

            {[
              "Relevância do Conteúdo",
              "Organização da Plataforma",
              "Eficácia do Aprendizado",
              "Suporte e Ajuda",
            ].map((item, index) => (
              <div className="item-avaliado" key={index}>
                <Text color="#660099">{item}</Text>
                <div
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "1%",
                    borderRadius: "20px",
                  }}
                >
                  <Rating
                    aria-label="quantitative rating"
                    type="quantitative"
                    size={24}
                    defaultValue={3}
                    count={5}
                    icon={{
                      ActiveIcon: IconStarFilled,
                      InactiveIcon: IconStarRegular,
                      color: "#F266A7",
                    }}
                  />
                </div>
              </div>
            ))}

            <Box>
              <Stack space={16}>
                <TextField
                  fullWidth
                  name="comentario"
                  label="Faça algum comentário, crítica ou sugestão"
                  inputProps={{ maxLength: 500 }}
                />
                <ButtonLayout
                  primaryButton={
                    <ButtonPrimary submit style={{ borderRadius: "15px" }}>
                      Enviar
                    </ButtonPrimary>
                  }
                />
              </Stack>
            </Box>
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
};

export default Feedback;
