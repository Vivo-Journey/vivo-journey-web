import {
  Accordion,
  AccordionItem,
  Circle,
  IconLayersLight,
  IconWinnerCheckRegular,
  Inline,
  ProgressBar,
  Stack,
  Tag,
  Text,
  Title2,
  Title3,
} from "@telefonica/mistica";
import { useState } from "react";
import "../assets/css/menu.css";

const MenuTrilhas = ({ conteudos = [], selectedConteudoId, onSelect }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const progresso = 25; // exemplo de progresso

  return (
    <div className="menu-trilhas-container">
      <Accordion>
        {/* Cabeçalho do módulo com ProgressBar */}
        <div className="menu-trilha-progress">
          <Stack space={12}>
            {/* Título com ícone */}
            <Inline space={8} align="center">
              <Circle backgroundColor="#f266a73d" size={30}>
                <IconLayersLight color="#F266A7" />
              </Circle>
              <Title2>Tópicos do Módulo 1</Title2>
            </Inline>
            <ProgressBar
              progressPercent={progresso}
              style={{ width: "100%" }}
            />
            <Text>{progresso}%</Text>
          </Stack>
        </div>

        {/* Conteúdos, todos sempre abertos */}
        {conteudos.map((c, idx) => {
          const isSelected = c.id_conteudo === selectedConteudoId;
          const isHovered = c.id_conteudo === hoveredId;
          return (
            <AccordionItem
              right={
                <Tag
                  type="info"
                  sx={{ paddingLeft: 0, paddingRight: 0 }}
                  className="menu-trilha-tag"
                >
                  10min
                </Tag>
              }
              key={c.id_conteudo}
              title={c.titulo}
              asset={
                c.status === "CONCLUIDO" ? (
                  <Circle backgroundColor="#f266a73d" size={30}>
                    <IconWinnerCheckRegular color="#F266A7" />
                  </Circle>
                ) : (
                  <Circle
                    backgroundColor={isSelected ? "#E6E4F2" : "#E6E4F2"}
                    size={30}
                  >
                    <span>{idx + 1}</span>
                  </Circle>
                )
              }
              open={true} // sempre aberto
              content={
                <div
                  className="menu-trilha-item"
                  onClick={() => onSelect(c.id_conteudo)}
                  onMouseEnter={() => setHoveredId(c.id_conteudo)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    cursor: "pointer",
                    padding: "4px 8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "4px",
                    backgroundColor: isSelected
                      ? "#E6E4F2"
                      : isHovered
                      ? "#F2F0FA"
                      : "transparent",
                    transition: "background-color 0.2s",
                  }}
                >
                  <Text size={12} weight={isSelected ? "bold" : "regular"} >
                    {c.descricao}
                  </Text>
                </div>
              }
            />
          );
        })}
      </Accordion>
    </div>
  );
};

export default MenuTrilhas;
