import {
  ButtonPrimary,
  ButtonSecondary,
  NavigationBreadcrumbs,
  ResponsiveLayout,
  SearchField,
  Stack,
  Table,
  Title4,
} from "@telefonica/mistica";
import { useEffect, useState } from "react";
import "../assets/css/dashboard.css";
import "../assets/css/global.css";
import Loading from "../components/loading";
import Menu from "../components/menu";
import { get } from "../utils/api";

const ListaDocumentos = ({ idUsuario = 3 }) => {
  const [documentos, setDocumentos] = useState([]);
  const [documentosFiltrados, setDocumentosFiltrados] = useState([]);
  const [filtroTituloDocumento, setFiltroTituloDocumento] = useState("");
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  useEffect(() => {
    get(`/vivo-journey/usuarios/${idUsuario}/documentos`).then((data) => {
      setDocumentos(data);
      setDocumentosFiltrados(data);
    });
  }, []);

  const buscarDocumentosPorFiltro = () => {
    const filtradas = documentos?.filter((doc) => {
      if (!filtroTituloDocumento) return true;
      const regex = new RegExp(filtroTituloDocumento, "i");
      return regex.test(doc?.titulo);
    });
    setDocumentosFiltrados(filtradas);
  };

  return (
    <ResponsiveLayout fullWidth>
      <Loading />
      <Menu collapsed={menuCollapsed} setCollapsed={setMenuCollapsed} />
      <div
        style={{
          marginLeft: menuCollapsed ? "72px" : "320px", // ajusta conforme o menu
          transition: "margin-left 0.3s ease",
          padding: "32px",
        }}
      >
        <Stack space={32}>
          <NavigationBreadcrumbs
            breadcrumbs={[
              { title: "Dashboard", url: "/dashboard" },
              { title: "Documentos", url: "/lista-documentos" },
            ]}
          />
          <Title4>Documentos Úteis</Title4>

          <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
            <div style={{ flex: 1 }}>
              <SearchField
                name="titulo"
                label="Consulte o Título do Documento"
                onChangeValue={(titulo) => setFiltroTituloDocumento(titulo)}
                fullWidth
              />
            </div>
            <ButtonPrimary onPress={buscarDocumentosPorFiltro}>
              Buscar
            </ButtonPrimary>
          </div>

          <Table
            boxed
            heading={["Id Doc.", "Título", "Descrição", ""]}
            content={documentosFiltrados?.map((doc) => ({
              cells: [
                doc?.id_documento,
                doc?.titulo,
                doc?.descricao,
                <ButtonSecondary
                  style={{
                    backgroundColor: "#FDE6F9",
                    borderColor: "var(--cor-rosa-chiclete)",
                    color: "var(--cor-rosa-chiclete)",
                  }}
                  small
                  onPress={() =>
                    Promise.resolve().then(() =>
                      window.open(doc.url_documento, "_blank")
                    )
                  }
                >
                  Visualizar Documento
                </ButtonSecondary>,
              ],
              actions: [],
            }))}
          />
        </Stack>
      </div>
    </ResponsiveLayout>
  );
};

export default ListaDocumentos;
