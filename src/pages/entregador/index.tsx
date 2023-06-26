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
    const [entregasEmAndamento, setEntregasEmAndamento] = useState<IItem[]>()
    const [entregasFinalizada, setEntregasFinalizada] = useState<IItem[]>()

    const imagem = "https://blog.hurb.com/wp-content/uploads/2020/02/feijoada-1140x675.png"


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


    useEffect(() => {
        async function HandleEntregasEmAndamento() {
            try {
                const response = await axiosConfig.get("/deliveryman/deliveries")
                const itensDisponiveis = response.data

                setEntregasEmAndamento(itensDisponiveis)

            } catch (error) {
                console.log(error)
            }
        }
        HandleEntregasEmAndamento()
    }, [])

    useEffect(() => {
        async function HandleEntregasFinalizadas() {
            try {
                const response = await axiosConfig.get("/deliveryman/deliveries/finish")
                const itensDisponiveis = response.data

                setEntregasFinalizada(itensDisponiveis)

            } catch (error) {
                console.log(error)
            }
        }
        HandleEntregasFinalizadas()
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
                                        <ItemCardComponent
                                            key={entrega.id}
                                            typeCard="Cliente"
                                            username={entrega.client.name}
                                            itemName={entrega.item_name}
                                            dataPedido={entrega.created_at}
                                            image={imagem}
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
                        {
                            entregasEmAndamento && entregasEmAndamento.length ?
                                (
                                    entregasEmAndamento.map((entrega: IItem) => (
                                        <ItemCardComponent
                                            key={entrega.id}
                                            typeCard="Cliente"
                                            username={entrega.client.name}
                                            itemName={entrega.item_name}
                                            dataPedido={entrega.created_at}
                                            image={imagem}
                                        />
                                    ))
                                ) :
                                (
                                    <Text fontSize={"24px"}>
                                        Nenhuma entrega em andamento no momento
                                    </Text>
                                )
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            entregasFinalizada && entregasFinalizada.length ?
                                (
                                    entregasFinalizada.map((entrega: IItem) => (
                                        <ItemCardComponent
                                            key={entrega.id}
                                            typeCard="Cliente"
                                            username={entrega.client.name}
                                            itemName={entrega.item_name}
                                            dataPedido={entrega.created_at}
                                            dataFinalização={entrega.end_at}
                                            image={imagem}
                                        />
                                    ))
                                ) :
                                (
                                    <Text fontSize={"24px"}>
                                        Nenhuma entrega em andamento no momento
                                    </Text>
                                )
                        }
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
}
