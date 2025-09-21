import {
  ButtonLink,
  ButtonPrimary,
  Header,
  HeaderLayout,
  IconQuestionRegular,
  Image,
  ResponsiveLayout,
  Text,
  Text3,
  Video,
} from "@telefonica/mistica";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/conteudo-trilha.css";
import "../assets/css/global.css";
import Menu from "../components/menu";
import MenuTrilhas from "../components/menu-trilhas";
import { get } from "../utils/api";
import Loading from "../components/loading";

export default function ConteudoTrilha({ usuarioId = 3 }) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [conteudos, setConteudos] = useState([]);
  const [selectedConteudoId, setSelectedConteudoId] = useState(null);
  const [quizRespostas, setQuizRespostas] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { idModulo, idTrilha } = location.state || {};

  console.log(idModulo, idTrilha)

  // Buscar conteúdos do módulo
  useEffect(() => {
    get(
      `/vivo-journey/usuarios/${usuarioId}/trilhas/${idTrilha}/modulos/${idModulo}/conteudos`
    ).then((data) => setConteudos(data));
  }, [usuarioId, idTrilha, idModulo]);

  // Seleciona automaticamente o primeiro conteúdo
  useEffect(() => {
    if (conteudos.length > 0 && !selectedConteudoId) {
      setSelectedConteudoId(conteudos[0].id_conteudo);
    }
  }, [conteudos, selectedConteudoId]);

  const selectedConteudo = conteudos?.find(
    (c) => c.id_conteudo === selectedConteudoId
  );

  // Manipular respostas do quiz
  const handleRespostaClick = (perguntaId, resposta) => {
    setQuizRespostas((prev) => ({
      ...prev,
      [perguntaId]: resposta.ind_correta,
    }));
  };

  const renderQuiz = (quiz) => (
    <section className="conteudo-text-info">
      <div className="conteudo-text-titulo">
        <HeaderLayout header={<Header title={quiz.titulo} />} />
      </div>
      <Text>{quiz.descricao}</Text>

      {quiz.perguntas.map((p) => (
        <div key={p.id_pergunta} style={{ marginTop: "16px" }}>
          <Text3>
            <strong>{p.texto}</strong>
          </Text3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            {p.respostas.map((r) => (
              <ButtonPrimary
                key={r.id_resposta}
                onPress={() => handleRespostaClick(p.id_pergunta, r)}
                style={{
                  backgroundColor:
                    quizRespostas[p.id_pergunta] !== undefined
                      ? r.ind_correta
                        ? "#00C48C"
                        : "#FF5C5C"
                      : undefined,
                }}
              >
                {r.texto}
              </ButtonPrimary>
            ))}
            {quizRespostas[p.id_pergunta] !== undefined && (
              <Text style={{ marginTop: "4px" }}>
                {quizRespostas[p.id_pergunta]
                  ? "✅ Correto!"
                  : "❌ Resposta incorreta"}
              </Text>
            )}
          </div>
        </div>
      ))}

      {/* Botão para reiniciar o quiz */}
      <div style={{ marginTop: "24px" }}>
        <ButtonPrimary
          onPress={() => setQuizRespostas({})}
          style={{ backgroundColor: "#55038C" }}
        >
          Reiniciar Quiz
        </ButtonPrimary>
      </div>
    </section>
  );

  const renderConteudo = () => {
    if (!selectedConteudo) return <Text>Selecione um conteúdo</Text>;

    switch (selectedConteudo.tipo_conteudo) {
      case "ARTIGO":
        return (
          <section className="conteudo-text-info">
            <div className="conteudo-text-titulo">
              <HeaderLayout
                header={<Header title={selectedConteudo.titulo} />}
              />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedConteudo.conteudo_markdown,
              }}
            />
          </section>
        );
      case "VIDEO":
        return (
          <>
            <section style={{ padding: "0" }}>
              <Video src={selectedConteudo.conteudo_url} aspectRatio="16:9" />
            </section>
            <section className="conteudo-text-info">
              <div className="conteudo-text-titulo">
                <HeaderLayout
                  header={<Header title={selectedConteudo.titulo} />}
                />
              </div>
            </section>
          </>
        );
      case "QUIZ":
        return renderQuiz(selectedConteudo.quiz);
      default:
        return <Text>Conteúdo não suportado</Text>;
    }
  };

  return (
    <ResponsiveLayout fullWidth>
      <Loading />
      {/* Menu principal */}
      <Menu collapsed={menuCollapsed} setCollapsed={setMenuCollapsed} />

      {/* Área do conteúdo */}
      <div
        style={{
          marginLeft: menuCollapsed ? "200px" : "420px", // menu sempre aberto
          padding: "32px",
          height: "100vh",
        }}
      >
        <div className="aligment">
          {/* Menu lateral de trilhas */}
          <div
            style={{
              height: "100%",
              width: menuCollapsed ? "25%" : "20%",
              display: "block",
              position: "fixed",
              left: menuCollapsed ? "72px" : "320px",
              backgroundColor: "#fff",
            }}
          >
            <MenuTrilhas
              collapsed={menuCollapsed}
              conteudos={conteudos}
              selectedConteudoId={selectedConteudoId}
              onSelect={setSelectedConteudoId}
            />
          </div>

          {/* Conteúdo à direita */}
          <div className="conteudo-container">
            <div className="conteudo-header">
              <h1>
                {selectedConteudo ? selectedConteudo.titulo : "Produtos VIVO"}
              </h1>
              <ButtonLink onPress={() => navigate("/suporte")}>
                <IconQuestionRegular size={28} color="#55038C" />
              </ButtonLink>
            </div>
            <hr />
            {renderConteudo()}
            {!selectedConteudo && (
              <Image src="https://picsum.photos/1200/1200" aspectRatio="16:9" />
            )}
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
}
