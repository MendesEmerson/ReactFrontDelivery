import { Flex } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { useState } from "react";
import { ItemCardComponent } from "../../components/cardItem";
import { Image } from "@chakra-ui/image";

interface IItem {
    itemName: string;
    clientName: string;
    dataPedido: string;
    image: string
}

export function EntregadorPage() {
    const [entregasDisponiveis, setEntregasDisponiveis] = useState<IItem[]>([
        {
            itemName: "Pizza de Calabresa",
            clientName: "Emerson",
            dataPedido: "28/05/2023 23:25",
            image: "https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg"
        },
        {
            itemName: "Hamburguer",
            clientName: "Juan",
            dataPedido: "28/05/2023 23:05",
            image: "https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg"
        },
    ]);

    return (
        <Flex
            height={"100vh"}
            width={"100%"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            flexDirection={"column"}
        >
            <Tabs variant="soft-rounded" colorScheme="green" margin={"20px"}>
                <TabList>
                    <Tab>Entregas Disponiveis</Tab>
                    <Tab>Entregas em Andamento</Tab>
                    <Tab>Entregas Finalizadas</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        {entregasDisponiveis.map((entrega, index) => (
                            <ItemCardComponent
                                clientName={entrega.clientName}
                                itemName={entrega.itemName}
                                dataPedido={entrega.dataPedido}
                                image={entrega.image}
                            />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        <p>Aqui vai entrar uma lista com todas as entregas em andamento!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Aqui vai entrar uma lista com todas as entregas realizadas!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
}
