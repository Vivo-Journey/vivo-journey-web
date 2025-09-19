import { Accordion, AccordionItem, Circle, IconBookmarkRegular, IconEditPencilRegular, IconIdCardRegular, IconInvoicePlanFileRegular, IconLayersLight, IconLifeguardFloatRegular, IconLocationMapRegular, IconLockEyeClosedRegular, IconShopRegular, IconWinnerCheckRegular, Image, ListItem, ProgressBar, Row, Tag, Text, Text3 } from "@telefonica/mistica";
import "../assets/css/menu.css";

const MenuTrilhas = ({ collapsed, setCollapsed }) => {
    var porc = 25;

    return (

        <div style={{ backgroundColor: '#FFFF', height: '100%' }}>
            <Accordion>
                <div className="menu-trilha-progress">
                    <Circle backgroundColor='#f266a73d' size={30}>
                        <IconLayersLight color='#F266A7' />
                    </Circle>
                    <h1>Ecossistema VIVO</h1>
                    <ProgressBar progressPercent={porc} /><span>{porc}%</span>
                </div>
                <AccordionItem
                    asset={

                        <Circle backgroundColor='#E6E4F2' size={40}>
                            <IconBookmarkRegular color='#660099' />
                        </Circle>
                    }
                    title="Módulo 1"
                    content={
                        <Row
                            alignItems="center"
                            asset={
                                <Circle backgroundColor='#f266a73d' size={30}>
                                    <IconWinnerCheckRegular color='#F266A7' />
                                </Circle>}
                            title={"Introdução"}
                            subtitle={<Tag type="promo">10min</Tag>}
                        />
                    }
                />
                <AccordionItem
                    asset={

                        <Circle backgroundColor='#E6E4F2' size={40}>
                            <IconBookmarkRegular color='#660099' />
                        </Circle>
                    }
                    title="Módulo 2"
                    content={
                        <Row
                            alignItems="center"
                            asset={
                                <Circle backgroundColor='#f266a73d' size={30}>
                                    <IconWinnerCheckRegular color='#F266A7' />
                                </Circle>}
                            title={"Nossa Jornada"}
                            subtitle={<Tag type="promo">30min</Tag>}
                        />
                    }
                />
                <AccordionItem
                    asset={
                        <Circle backgroundColor='#E6E4F2' size={40}>
                            <IconBookmarkRegular color='#660099' />
                        </Circle>
                    }
                    title="Módulo 3"
                    content={
                        <Accordion>
                            <AccordionItem
                                asset={
                                    <Circle backgroundColor='#E6E4F2' size={35}>
                                        <IconEditPencilRegular color='#262626' />
                                    </Circle>
                                }
                                title="Tópico 1"
                                content={
                                    <Row
                                        alignItems="center"
                                        asset={
                                            <Circle backgroundColor='#f266a73d' size={30}>
                                                <IconWinnerCheckRegular color='#F266A7' />
                                            </Circle>}
                                        title={"Áreas da Empresa"}
                                        subtitle={<Tag type="promo">20min</Tag>}
                                    />
                                }
                            />
                            <AccordionItem
                                asset={
                                    <Circle backgroundColor='#E6E4F2' size={35}>
                                        <IconEditPencilRegular color='#262626' />
                                    </Circle>
                                }
                                title="Tópico 2"
                                content={
                                    <Row
                                        alignItems="center"
                                        asset={
                                            <Circle backgroundColor='#f266a73d' size={30}>
                                                <IconWinnerCheckRegular color='#F266A7' />
                                            </Circle>}
                                        title={"Produtos"}
                                        subtitle={<Tag type="promo">25min</Tag>}
                                    />
                                }
                            />
                            <AccordionItem
                                asset={
                                    <Circle backgroundColor='#E6E4F2' size={35}>
                                        <IconEditPencilRegular color='#262626' />
                                    </Circle>
                                }
                                title="Tópico 3"
                                content={
                                    <Row
                                        alignItems="center"
                                        asset={
                                            <Circle backgroundColor='#f266a73d' size={30}>
                                                <IconWinnerCheckRegular color='#F266A7' />
                                            </Circle>}
                                        title={"Nossas Atividades"}
                                        subtitle={<Tag type="promo">40min</Tag>}
                                    />
                                }
                            />
                        </Accordion>
                    }
                />
            </Accordion>
        </div>
    );
};

export default MenuTrilhas;
