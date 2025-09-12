import {
    Box,
  ButtonPrimary,
  Divider,
  Header,
  HeaderLayout,
  IconLightningRegular,
  Meter,
  NavigationBreadcrumbs,
  ResponsiveLayout,
  SearchField,
  Stack,
  Table,
  Title4,
} from "@telefonica/mistica";

// const ListaTrilha = (props) => {
//   const [trilhas, setTrilhas] = useState([{}]);

//   const { idUsuario } = props;

//   useEffect(() => {
//     get(`/usuarios/${idUsuario}/trilhas`).then((data) => setTrilhas(data));
//   }, [idUsuario]);

//   console.log(trilhas);

const ListaTrilha = () => {
  return (
    <Stack space={16}>
      <HeaderLayout
        dataAttributes={{ testid: "header-layout" }}
        breadcrumbs={
          <NavigationBreadcrumbs
            breadcrumbs={[{ title: "Dashboard", url: "/dashboard" }]}
          />
        }
        header={<Header title={"Suas Trilhas"} titleAs={"h4"} />}
      />
      <ResponsiveLayout>
        <Stack space={16}>
          <Box display="flex" alignItems="center">
            <SearchField name="search" label="Consulte uma Trilha" />
            <ButtonPrimary onPress={() => {}}>Buscar</ButtonPrimary>
          </Box>

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
                  <Meter width={200} type="linear" values={[70, 0, 0]} />,
                ],
                actions: [
                  {
                    Icon: IconLightningRegular,
                    onPress: () => {},
                    label: "acessar",
                  },
                ],
              },
            ]}
          />
        </Stack>
      </ResponsiveLayout>
      {/* <Menu /> */}
      {/* <Title4>Suas Trilhas</Title4> */}
    </Stack>
  );
};

export default ListaTrilha;
