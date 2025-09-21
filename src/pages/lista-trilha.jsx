import {
  ButtonPrimary,
  ButtonSecondary,
  Inline,
  Meter,
  NavigationBreadcrumbs,
  ResponsiveLayout,
  SearchField,
  Stack,
  Table,
  Text,
  Title4,
} from "@telefonica/mistica";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/dashboard.css";
import "../assets/css/global.css";
import Loading from "../components/loading";
import Menu from "../components/menu";
import { get } from "../utils/api";

const ListaTrilha = ({ idUsuario = 3 }) => {
  const [trilhas, setTrilhas] = useState([]);
  const [trilhasFiltradas, setTrilhasFiltradas] = useState([]);
  const [filtroNomeTrilha, setFiltroNomeTrilha] = useState("");
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    get(`/vivo-journey/usuarios/${idUsuario}/trilhas`).then((data) => {
      setTrilhas(data);
      setTrilhasFiltradas(data);
    });
  }, []);

  const buscarTrilhaPorFiltro = () => {
    const filtradas = trilhas?.filter((trilha) => {
      if (!filtroNomeTrilha) return true;
      const regex = new RegExp(filtroNomeTrilha, "i");
      return regex.test(trilha?.nome);
    });
    setTrilhasFiltradas(filtradas);
  };

  const formatarPercentual = (p) => {
    const texto = `${p}%`;
    if (p === 100) return texto;
    if (p >= 10) return " " + texto;
    return "  " + texto;
  };

  return (
    <ResponsiveLayout fullWidth>
      <Loading />
      <Menu collapsed={menuCollapsed} setCollapsed={setMenuCollapsed} />
      <div
        style={{
          marginLeft: menuCollapsed ? "72px" : "320px", // ajusta conforme menu
          transition: "margin-left 0.3s ease",
          padding: "32px",
        }}
      >
        <Stack space={32}>
          <NavigationBreadcrumbs
            breadcrumbs={[
              { title: "Dashboard", url: "/dashboard" },
              { title: "Minhas Trilhas", url: "/lista-trilhas" },
            ]}
          />
          <Title4>Suas Trilhas</Title4>

          <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
            <div style={{ flex: 1 }}>
              <SearchField
                name="nomeTrilha"
                label="Consulte o Nome da Trilha"
                onChangeValue={(nomeTrilha) => setFiltroNomeTrilha(nomeTrilha)}
                fullWidth
              />
            </div>
            <ButtonPrimary onPress={buscarTrilhaPorFiltro}>
              Buscar
            </ButtonPrimary>
          </div>

          <Table
            boxed
            heading={[
              "Id Trilha",
              "Nome",
              "Data Início",
              "Data Prev. Fim",
              "Progresso",
              "",
            ]}
            content={trilhasFiltradas?.map((trilha) => ({
              cells: [
                trilha?.id_trilha,
                trilha?.nome,
                trilha?.data_inicio,
                trilha?.data_prevista_fim,
                <Inline space={16} alignItems="center">
                  <Meter
                    colors={["var(--cor-rosa-chiclete)", "#B292C8"]}
                    type="linear"
                    width={190}
                    values={[
                      trilha?.percentual_progresso,
                      100 - trilha?.percentual_progresso,
                      0,
                    ]}
                  />
                  <Text>
                    {formatarPercentual(trilha?.percentual_progresso)}
                  </Text>
                </Inline>,
                <ButtonSecondary
                  style={{
                    backgroundColor: "#FDE6F9",
                    borderColor: "var(--cor-rosa-chiclete)",
                    color: "var(--cor-rosa-chiclete)",
                  }}
                  small
                  onPress={() =>
                    navigate("/trilha-progresso", {
                      state: { idTrilha: trilha?.id_trilha },
                    })
                  }
                >
                  Acessar
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

export default ListaTrilha;
