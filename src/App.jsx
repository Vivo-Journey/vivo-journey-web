import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ConteudoTrilha from "./pages/conteudo-trilha";
import Dashboard from "./pages/dashboard";
import Feedback from "./pages/feedback";
import ListaCertificados from "./pages/lista-certificados";
import ListaDocumentos from "./pages/lista-documentos";
import ListaTrilha from "./pages/lista-trilha";
import Login from "./pages/login";
import Suporte from "./pages/suporte";
import TrilhaProgresso from "./pages/trilha-progresso";
import { useState } from "react";

const App = () => {
  // Inicializa o estado direto do localStorage
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
  };

  // Componente para proteger rotas
  const RotaProtegida = ({ children }) => {
    if (!usuario && !localStorage.getItem("usuario")) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  // Redireciona da página de login para dashboard se já estiver logado
  const LoginRedirect = () => {
    if (usuario || localStorage.getItem("usuario")) {
      return <Navigate to="/dashboard" replace />;
    }
    return <Login setUsuario={setUsuario} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Página de login com redirecionamento automático */}
        <Route path="/" element={<LoginRedirect />} />

        {/* Rotas protegidas */}
        <Route
          path="/dashboard"
          element={
            <RotaProtegida>
              <Dashboard usuario={usuario} onLogout={handleLogout} />
            </RotaProtegida>
          }
        />
        <Route
          path="/lista-trilhas"
          element={
            <RotaProtegida>
              <ListaTrilha usuario={usuario} onLogout={handleLogout} />
            </RotaProtegida>
          }
        />
        <Route
          path="/conteudo-trilhas"
          element={
            <RotaProtegida>
              <ConteudoTrilha usuario={usuario} onLogout={handleLogout} />
            </RotaProtegida>
          }
        />
        <Route
          path="/trilha-progresso"
          element={
            <RotaProtegida>
              <TrilhaProgresso usuario={usuario} onLogout={handleLogout} />
            </RotaProtegida>
          }
        />
        <Route
          path="/lista-documentos"
          element={
            <RotaProtegida>
              <ListaDocumentos usuario={usuario} onLogout={handleLogout} />
            </RotaProtegida>
          }
        />
        <Route
          path="/lista-certificados"
          element={
            <RotaProtegida>
              <ListaCertificados usuario={usuario} onLogout={handleLogout} />
            </RotaProtegida>
          }
        />
        <Route
          path="/suporte"
          element={
            <RotaProtegida>
              <Suporte usuario={usuario} onLogout={handleLogout} />
            </RotaProtegida>
          }
        />
        <Route
          path="/feedback"
          element={
            <RotaProtegida>
              <Feedback usuario={usuario} onLogout={handleLogout} />
            </RotaProtegida>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
