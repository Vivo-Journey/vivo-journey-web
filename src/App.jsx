import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConteudoTrilha from "./pages/conteudo-trilha";
import Dashboard from "./pages/dashboard";
import Feedback from "./pages/feedback";
import ListaCertificados from "./pages/lista-certificados";
import ListaDocumentos from "./pages/lista-documentos";
import ListaTrilha from "./pages/lista-trilha";
import Login from "./pages/login";
import Suporte from "./pages/suporte";
import TrilhaProgresso from "./pages/trilha-progresso";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/lista-trilhas" element={<ListaTrilha />} />
      <Route path="/conteudo-trilhas" element={<ConteudoTrilha />} />
      <Route path="/trilha-progresso" element={<TrilhaProgresso />} />
      <Route path="/lista-documentos" element={<ListaDocumentos />} />
      <Route path="/lista-certificados" element={<ListaCertificados />} />
      <Route path="/suporte" element={<Suporte />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  </BrowserRouter>
);

export default App;
