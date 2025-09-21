import {
  ButtonLink,
  ButtonPrimary,
  CoverCard,
  EmptyState,
  IconWinnerRegular,
  Inline,
  NavigationBreadcrumbs,
  Stack,
  Stepper,
  Tag,
  Text,
  Title4,
  Tooltip,
} from "@telefonica/mistica";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/global.css";
import "../assets/css/trilha-progresso.css";
import Loading from "../components/loading";
import Menu from "../components/menu";
import { get } from "../utils/api";

export default function TrilhaProgresso({ idUsuario = 3 }) {
  const location = useLocation();
  const { idTrilha } = location.state || {};
  const navigate = useNavigate();

  const [modulos, setModulos] = useState([]);
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  useEffect(() => {
    if (!idTrilha) return;
    get(`/vivo-journey/usuarios/${idUsuario}/trilhas/${idTrilha}/modulos`)
      .then((data) => setModulos(Array.isArray(data) ? data : []))
      .catch((error) => {
        console.error("Erro ao buscar módulos:", error);
        setModulos([]);
      });
  }, [idTrilha]);

  // Determina o índice atual para o Stepper
  const currentIndex = (() => {
    const indexEmAndamento = modulos?.findIndex(
      (m) => m.status.toLowerCase() === "em andamento"
    );
    if (indexEmAndamento !== -1) return indexEmAndamento;

    const indexPendente = modulos.findIndex(
      (m) => m.status.toLowerCase() === "pendente"
    );
    if (indexPendente !== -1) return indexPendente;

    return modulos.length > 0 ? modulos.length - 1 : 0;
  })();

  // Módulo atual para o banner
  const moduloAtual = (() => {
    const emAndamento = modulos.find(
      (m) => m.status.toLowerCase() === "em andamento"
    );
    return emAndamento || (modulos.length > 0 ? modulos[modulos.length - 1] : null);
  })();

  // Steps para o Stepper
  const steps = modulos.map((modulo, index) => (
    <Tooltip
      key={modulo.id_modulo}
      width={350}
      target={
        <Text
          style={{
            fontWeight: modulo.status === "Concluído" ? "bold" : "normal",
          }}
        >
          {`Módulo ${index + 1}`}
        </Text>
      }
      description={
        <>
          <Inline space={8} alignItems="center">
            <IconWinnerRegular
              color={modulo.status === "Concluído" ? "#55038C" : "#B292C8"}
            />
            <Text>{modulo.descricao}</Text>
          </Inline>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "8px",
            }}
          >
            <ButtonLink
              small
              onPress={() =>
                navigate("/conteudo-trilhas", {
                  state: { idModulo: modulo.id_modulo, idTrilha: idTrilha },
                })
              }
            >
              Acessar Módulo
            </ButtonLink>
          </div>
        </>
      }
    />
  ));

  return (
    <div>
      <Loading />
      <Menu collapsed={menuCollapsed} setCollapsed={setMenuCollapsed} />
      <div
        style={{
          marginLeft: menuCollapsed ? "72px" : "320px",
          transition: "margin-left 0.3s ease",
          padding: "32px",
        }}
      >
        {modulos.length > 0 ? (
          <Stack space={64}>
            <NavigationBreadcrumbs
              breadcrumbs={[
                { title: "Dashboard", url: "/dashboard" },
                { title: "Minhas Trilhas", url: "/lista-trilhas" },
                { title: "Progresso da Trilha", url: "/trilha-progresso" },
              ]}
            />
            <Title4>Progresso da Trilha</Title4>

            {/* Banner dinâmico */}
            {moduloAtual && (
              <div className="trilha-banner">
                <CoverCard
                  width="100vh"
                  height="45vh"
                  size="display"
                  headline={
                    moduloAtual.sub_titulo ? (
                      <Tag type="promo">{moduloAtual.sub_titulo}</Tag>
                    ) : null
                  }
                  title={moduloAtual.titulo}
                  description={moduloAtual.descricao}
                  imageSrc={moduloAtual.img_capa || "https://picsum.photos/1200/1200"}
                  buttonPrimary={
                    <ButtonPrimary
                      small
                      onPress={() =>
                        navigate("/conteudo-trilhas", {
                          state: { idModulo: moduloAtual.id_modulo, idTrilha: idTrilha },
                        })
                      }
                    >
                      Continuar
                    </ButtonPrimary>
                  }
                />
              </div>
            )}

            {/* Stepper */}
            <div className="trilha-steps">
              {modulos.length > 0 && <Stepper currentIndex={currentIndex} steps={steps} />}
            </div>
          </Stack>
        ) : (
          <EmptyState
            largeImageUrl="https://i.imgur.com/yGFKQOy.png"
            title="Sem Módulos"
            description="Esta trilha ainda não possuí módulos."
            button={
              <ButtonPrimary onPress={() => navigate("/lista-trilhas")}>
                Voltar a Lista
              </ButtonPrimary>
            }
          />
        )}
      </div>
    </div>
  );
}
