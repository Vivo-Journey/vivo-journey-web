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

const ListaCertificados = () => {

  const [certificados, setCertificados] = useState([]);
  const [certificadosFiltrados, setCertificadosFiltrados] = useState([]);
  const [filtroNomeTrilha, setFiltroNomeTrilha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    get("/vivo-journey/usuarios/3/certificados").then((data) => {
      setCertificados(data);
      setCertificadosFiltrados(data);
    });
  }, []);

  console.log('documentos', certificados);


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
      <Grid columns={12}>
        <GridItem columnSpan={3}>
          <Menu />
        </GridItem>
        <GridItem columnSpan={9}>
          <Box padding={32}>
            <Stack space={32}>
              <NavigationBreadcrumbs
                breadcrumbs={[{ title: "Dashboard", url: "/dashboard" }, { title: "Certificados", url: "/lista-certificados" }]}
              />
              <Title4>Suas Trilhas</Title4>

              <Grid columns={12} gap={12} alignItems="baseline">
                <GridItem columnSpan={10}>
                  <SearchField name="nomeTrilha" label="Consulte o Título da Trilha" onChangeValue={(nomeTrilha) => { setFiltroNomeTrilha(nomeTrilha) }} fullWidth />
                </GridItem>
                <GridItem columnSpan={2}>
                  <ButtonPrimary onPress={() => { buscarCertificadosPorFiltro() }}>Buscar</ButtonPrimary>
                </GridItem>
              </Grid>

              {/* Espaço entre search/grid e table */}
              <Box height={32} />

              <Grid columns={12}>
                <GridItem columnSpan={11}>
                  <Table
                    boxed
                    heading={[
                      "Id Certificado.",
                      "Nome da Trilha",
                      "Data Fim Trilha",
                      ""
                    ]}
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
                          onPress={() => Promise.resolve().then(() => window.open(certif.url_pdf, "_blank"))}
                        >
                          Visualizar Certificado
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

export default ListaCertificados;
