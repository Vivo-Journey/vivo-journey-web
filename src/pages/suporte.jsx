import {
  Box,
  ButtonLayout,
  ButtonPrimary,
  Form,
  IconWarningRegular,
  ResponsiveLayout,
  Stack,
  TextField,
} from "@telefonica/mistica";
import { useState } from "react";
import "../assets/css/global.css";
import "../assets/css/suporte.css";
import Loading from "../components/loading";
import Menu from "../components/menu";

export default function Suporte({ usuario, onLogout }) {
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
        <div className="help-container">
          <IconWarningRegular color="#55038C" size={32} />
          <h1>Relatar Problema</h1>
          <Form
            onSubmit={(formData) =>
              alert({
                title: "Dados do formulário",
                message: JSON.stringify(formData, null, 2),
              })
            }
          >
            <Box>
              <Stack space={16}>
                <TextField
                  fullWidth
                  name="local"
                  label="Onde está o problema?"
                  required
                  inputProps={{ maxLength: 150 }}
                />
                <TextField
                  fullWidth
                  name="problema"
                  label="O que aconteceu?"
                  required
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
          </Form>
        </div>
      </div>
    </ResponsiveLayout>
  );
}
