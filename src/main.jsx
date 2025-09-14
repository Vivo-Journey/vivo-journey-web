import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "@telefonica/mistica/css/mistica.css";

import {
  ThemeContextProvider,
  getVivoSkin,
} from "@telefonica/mistica";

const misticaTheme = {
  colorScheme: 'light',
  skin: getVivoSkin(),
  i18n: { locale: "pt-BR", phoneNumberFormattingRegionCode: "BR" },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider theme={misticaTheme}>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
