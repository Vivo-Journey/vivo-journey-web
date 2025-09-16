import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import TrilhaProgresso from "./pages/trilha-progresso";
import ListaTrilha from "./pages/lista-trilha";
import ListaDocumentos from "./pages/lista-documentos";
import ListaCertificados from "./pages/lista-certificados";
import Suporte from "./pages/suporte";
import Feedback from "./pages/feedback";
import Login from "./pages/login";
import ConteudoTrilha from "./pages/conteudo-trilha";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/lista-trilhas" element={<ListaTrilha />} />
      <Route path="/conteudo-trilhas" element={<ConteudoTrilha />} />
      <Route path="/trilha-progresso" element={<TrilhaProgresso />} />
      <Route path="/lista-documentos" element={<ListaDocumentos />} />
      <Route path="/lista-certificados" element={<ListaCertificados />} />
      <Route path="/suporte" element={<Suporte/>} />
      <Route path="/feedback" element={<Feedback/>} />
    </Routes>
  </BrowserRouter>
);

export default App;