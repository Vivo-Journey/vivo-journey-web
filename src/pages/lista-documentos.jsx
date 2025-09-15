import {
  Box,
  ButtonPrimary,
  ButtonSecondary,
  Grid,
  GridItem,
  Inline,
  Meter,
  NavigationBreadcrumbs,
  ResponsiveLayout,
  SearchField,
  Stack,
  Table,
  Text,
  Title4
} from "@telefonica/mistica";
import { useEffect, useState } from "react";
import '../assets/css/dashboard.css';
import '../assets/css/global.css';
import Menu from "../components/menu";
import { get } from "../utils/api";
import { useNavigate } from "react-router-dom";

const ListaDocumentos = () => {

  const [documentos, setDocumentos] = useState([]);
  const [documentosFiltrados, setDocumentosFiltrados] = useState([]);
  const [filtroTituloDocumento, setFiltroTituloDocumento] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    get("/vivo-journey/usuarios/3/documentos").then((data) => {
      setDocumentos(data);
      setDocumentosFiltrados(data);
    });
  }, []);

  console.log('documentos', documentos);


  const buscarDocumentosPorFiltro = () => {
    const filtradas = documentos?.filter((doc) => {
      if (!filtroTituloDocumento) return true;

      const regex = new RegExp(filtroTituloDocumento, 'i');

      return regex.test(doc?.titulo);
    });

    setDocumentosFiltrados(filtradas);
  };

  return (
    <ResponsiveLayout fullWidth>
      <Grid columns={12}>
        <GridItem columnSpan={3}>
          <Menu />
        </GridItem>
        <GridItem columnSpan={9}>
          <Box padding={32}>
            <Stack space={32}>
              <NavigationBreadcrumbs
                breadcrumbs={[{ title: "Dashboard", url: "/dashboard" }, { title: "Minhas Trilhas", url: "/lista-trilha" }]}
              />
              <Title4>Suas Trilhas</Title4>

              <Grid columns={12} gap={12} alignItems="baseline">
                <GridItem columnSpan={10}>
                  <SearchField name="titulo" label="Consulte o Título do Documento" onChangeValue={(titulo) => { setFiltroTituloDocumento(titulo) }} fullWidth />
                </GridItem>
                <GridItem columnSpan={2}>
                  <ButtonPrimary onPress={() => { buscarDocumentosPorFiltro() }}>Buscar</ButtonPrimary>
                </GridItem>
              </Grid>

              {/* Espaço entre search/grid e table */}
              <Box height={32} />

              <Grid columns={12}>
                <GridItem columnSpan={11}>
                  <Table
                    boxed
                    heading={[
                      "Id Doc.",
                      "Título",
                      "Descrição",
                      ""
                    ]}
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
                          onPress={() => Promise.resolve().then(() => window.open(doc.url_documento, "_blank"))}
                        >
                          Visualizar Documento
                        </ButtonSecondary>,
                      ],
                      actions: [],
                    }))}
                  />
                </GridItem>
              </Grid>
            </Stack>
          </Box>
        </GridItem>
      </Grid >
    </ResponsiveLayout>
  );
};

export default ListaDocumentos;
