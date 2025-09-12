import {
  Box,
  ButtonPrimary,
  ButtonSecondary,
  Grid,
  GridItem,
  Meter,
  NavigationBreadcrumbs,
  ResponsiveLayout,
  SearchField,
  Stack,
  Table,
  Title4
} from "@telefonica/mistica";
import Menu from "../components/menu";

// const ListaTrilha = (props) => {
//   const [trilhas, setTrilhas] = useState([{}]);

//   const { idUsuario } = props;

//   useEffect(() => {
//     get(`/usuarios/${idUsuario}/trilhas`).then((data) => setTrilhas(data));
//   }, [idUsuario]);

//   console.log(trilhas);

const ListaTrilha = () => {
  return (
    <ResponsiveLayout fullWidth>
      <Grid columns={12}>
        <GridItem columnSpan={2}>
          <Menu />
        </GridItem>
        <GridItem columnSpan={10}>
          <Box padding={32}>

            <Stack space={32}>
              <NavigationBreadcrumbs
                breadcrumbs={[{ title: "Dashboard", url: "/dashboard" }]}
              />
              <Title4>Suas Trilhas</Title4>

              <Grid columns={12} gap={12} alignItems="baseline">
                <GridItem columnSpan={10}>
                  <SearchField name="search" label="Consulte uma Trilha" fullWidth />
                </GridItem>
                <GridItem columnSpan={2}>
                  <ButtonPrimary onPress={() => { }}>Buscar</ButtonPrimary>
                </GridItem>
              </Grid>

              {/* Espaço entre search/grid e table */}
              <Box height={32} />

              <Grid columns={12}>
                <GridItem columnSpan={10}>
                  <Table
                    boxed
                    heading={[
                      "Id Trilha",
                      "Descrição",
                      "Data Início",
                      "Data Prev. Fim",
                      "Progresso",
                    ]}
                    content={[
                      {
                        cells: [
                          "1",
                          "Trilha 1",
                          "10/09/2025",
                          "20/09/2025",
                          <Meter colors={["#F266A7"]} width={200} type="linear" values={[70, 0, 0]} />,
                          <ButtonSecondary style={{ backgroundColor: "#FDE6F9", borderColor: "#F266A7", color: "#F266A7" }} small onPress={() => alert("Acessar Trilha 1")}>
                            Acessar
                          </ButtonSecondary>,
                        ],
                        actions: [],
                      },
                      {
                        cells: [
                          "1",
                          "Trilha 1",
                          "10/09/2025",
                          "20/09/2025",
                          <Meter colors={["#F266A7"]} width={200} type="linear" values={[70, 0, 0]} />,
                          <ButtonSecondary style={{ backgroundColor: "#FDE6F9", borderColor: "#F266A7", color: "#F266A7" }} small onPress={() => alert("Acessar Trilha 1")}>
                            Acessar
                          </ButtonSecondary>,
                        ],
                        actions: [],
                      },
                      {
                        cells: [
                          "1",
                          "Trilha 1",
                          "10/09/2025",
                          "20/09/2025",
                          <Meter colors={["#F266A7"]} width={200} type="linear" values={[70, 0, 0]} />,
                          <ButtonSecondary style={{ backgroundColor: "#FDE6F9", borderColor: "#F266A7", color: "#F266A7" }} small onPress={() => alert("Acessar Trilha 1")}>
                            Acessar
                          </ButtonSecondary>,
                        ],
                        actions: [],
                      },
                      {
                        cells: [
                          "1",
                          "Trilha 1",
                          "10/09/2025",
                          "20/09/2025",
                          <Meter colors={["#F266A7"]} width={200} type="linear" values={[70, 0, 0]} />,
                          <ButtonSecondary style={{ backgroundColor: "#FDE6F9", borderColor: "#F266A7", color: "#F266A7" }} small onPress={() => alert("Acessar Trilha 1")}>
                            Acessar
                          </ButtonSecondary>,
                        ],
                        actions: [],
                      },
                      {
                        cells: [
                          "1",
                          "Trilha 1",
                          "10/09/2025",
                          "20/09/2025",
                          <Meter colors={["#F266A7"]} width={200} type="linear" values={[70, 0, 0]} />,
                          <ButtonSecondary style={{ backgroundColor: "#FDE6F9", borderColor: "#F266A7", color: "#F266A7" }} small onPress={() => alert("Acessar Trilha 1")}>
                            Acessar
                          </ButtonSecondary>,
                        ],
                        actions: [],
                      },
                      {
                        cells: [
                          "1",
                          "Trilha 1",
                          "10/09/2025",
                          "20/09/2025",
                          <Meter colors={["#F266A7"]} width={200} type="linear" values={[70, 0, 0]} />,
                          <ButtonSecondary style={{ backgroundColor: "#FDE6F9", borderColor: "#F266A7", color: "#F266A7" }} small onPress={() => alert("Acessar Trilha 1")}>
                            Acessar
                          </ButtonSecondary>,
                        ],
                        actions: [],
                      },
                    ]}
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

export default ListaTrilha;
