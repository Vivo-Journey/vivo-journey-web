import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import TrilhaProgresso from "./pages/trilha-progresso";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* Mudar rota para tela da Kat */}
      <Route path="/MinhasTrilhas" element={<TrilhaProgresso />} />
    </Routes>
  </BrowserRouter>
);

export default App;