import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import TrilhaProgresso from "./pages/trilha-progresso";
import ListaTrilha from "./pages/lista-trilha";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/lista-trilhas" element={<ListaTrilha />} />
      <Route path="/lista-trilhas/detalhes" element={<TrilhaProgresso />} />
    </Routes>
  </BrowserRouter>
);

export default App;