import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import ConteudoTrilha from './pages/conteudo-trilha'
import Dashboard from './pages/dashboard'
import Feedback from './pages/feedback'
import ListaCertificados from './pages/lista-certificados'
import ListaDocumentos from './pages/lista-documentos'
import ListaTrilha from './pages/lista-trilha'
import Login from './pages/login'
import Suporte from './pages/suporte'
import TrilhaProgresso from './pages/trilha-progresso'

const App = () => {
  const [usuario, setUsuario] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUsuario={setUsuario} />} />
        <Route path="/dashboard" element={<Dashboard usuario={usuario} />} />
        <Route
          path="/lista-trilhas"
          element={<ListaTrilha usuario={usuario} />}
        />
        <Route
          path="/conteudo-trilhas"
          element={<ConteudoTrilha usuario={usuario} />}
        />
        <Route
          path="/trilha-progresso"
          element={<TrilhaProgresso usuario={usuario} />}
        />
        <Route
          path="/lista-documentos"
          element={<ListaDocumentos usuario={usuario} />}
        />
        <Route
          path="/lista-certificados"
          element={<ListaCertificados usuario={usuario} />}
        />
        <Route path="/suporte" element={<Suporte usuario={usuario} />} />
        <Route path="/feedback" element={<Feedback usuario={usuario} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
