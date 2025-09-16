import {
  Box,
  ButtonPrimary,
  ButtonSecondary,
  NavigationBreadcrumbs,
  ResponsiveLayout,
  SearchField,
  Stack,
  Table,
  Title4
} from "@telefonica/mistica";
import { useEffect, useState } from "react";
import '../assets/css/dashboard.css';
import '../assets/css/global.css';
import Menu from "../components/menu";
import { get } from "../utils/api";
import { useNavigate } from "react-router-dom";

const ListaCertificados = () => {
  const [certificados, setCertificados] = useState([]);
  const [certificadosFiltrados, setCertificadosFiltrados] = useState([]);
  const [filtroNomeTrilha, setFiltroNomeTrilha] = useState("");
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    get("/vivo-journey/usuarios/3/certificados").then((data) => {
      setCertificados(data);
      setCertificadosFiltrados(data);
    });
  }, []);

  const buscarCertificadosPorFiltro = () => {
    const filtradas = certificados?.filter((certif) => {
      if (!filtroNomeTrilha) return true;
      const regex = new RegExp(filtroNomeTrilha, 'i');
      return regex.test(certif?.trilha?.nome);
    });
    setCertificadosFiltrados(filtradas);
  };

  return (
    <ResponsiveLayout fullWidth>
      <Menu collapsed={menuCollapsed} setCollapsed={setMenuCollapsed} />
      <div
        style={{
          marginLeft: menuCollapsed ? "72px" : "320px",
          transition: "margin-left 0.3s ease",
          padding: "32px",
        }}
      >
        <Stack space={32}>
          <NavigationBreadcrumbs
            breadcrumbs={[
              { title: "Dashboard", url: "/dashboard" },
              { title: "Certificados", url: "/lista-certificados" }
            ]}
          />
          <Title4>Seus Certificados</Title4>

          <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
            <div style={{ flex: 1 }}>
              <SearchField
                name="nomeTrilha"
                label="Consulte o Título da Trilha"
                onChangeValue={(nomeTrilha) => setFiltroNomeTrilha(nomeTrilha)}
                fullWidth
              />
            </div>
            <ButtonPrimary onPress={buscarCertificadosPorFiltro}>Buscar</ButtonPrimary>
          </div>

          <Table
            boxed
            heading={["Id Certificado", "Nome da Trilha", "Data Fim Trilha", ""]}
            content={certificadosFiltrados?.map((certif) => ({
              cells: [
                certif?.id_certificado,
                certif?.trilha?.nome,
                certif?.trilha?.data_fim,
                <ButtonSecondary
                  style={{
                    backgroundColor: "#FDE6F9",
                    borderColor: "var(--cor-rosa-chiclete)",
                    color: "var(--cor-rosa-chiclete)",
                  }}
                  small
                  onPress={() => window.open(certif.url_pdf, "_blank")}
                >
                  Visualizar Certificado
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

export default ListaCertificados;
