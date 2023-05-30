import { Flex, Text } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { useEffect, useState } from "react";
import { ItemCardComponent } from "../../components/cardItem";
import axiosConfig from "../../axiosConfig";

interface IClient {
    name: string
}

interface IItem {
    id: string;
    item_name: string;
    client: IClient;
    created_at: string;
    end_at?: string
    image: string
}

export function EntregadorPage() {

    const [entregasDisponiveis, setEntregasDisponiveis] = useState<IItem[]>()


    useEffect(() => {
        async function HandleEntregasDisponiveis() {
            try {
                const response = await axiosConfig.get("/delivery/available")
                const itensDisponiveis = response.data

                setEntregasDisponiveis(itensDisponiveis)

            } catch (error) {
                console.log(error)
            }
        }
        HandleEntregasDisponiveis()
    }, [])


    return (
        <Flex
            minH={"90vh"}
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
                        {
                            entregasDisponiveis && entregasDisponiveis.length ?
                                (
                                    entregasDisponiveis.map((entrega: IItem) => (
                                        <ItemCardComponent key={entrega.id}
                                            clientName={entrega.client.name}
                                            itemName={entrega.item_name}
                                            dataPedido={entrega.created_at}
                                            image={entrega.image}
                                        />
                                    ))
                                ) :
                                (
                                    <Text fontSize={"24px"}>
                                        Nenhuma entrega disponivel no momento
                                    </Text>
                                )
                        }

                    </TabPanel>
                    <TabPanel>
                        <Text fontSize={"24px"}>
                            Nenhuma entrega disponivel no momento
                        </Text>                    </TabPanel>
                    <TabPanel>
                        <p>Aqui vai entrar uma lista com todas as entregas realizadas!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
}
