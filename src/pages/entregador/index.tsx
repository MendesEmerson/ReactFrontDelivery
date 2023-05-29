import { Flex } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { useState } from "react";

interface IItem {
  itemName: string;
  clientName: string;
  dataPedido: string;
}

export function EntregadorPage() {
  const [entregasDisponiveis, setEntregasDisponiveis] = useState<IItem[]>([
    {
      itemName: "Pizza de Calabresa",
      clientName: "Emerson",
      dataPedido: "28/05/2023 23:25",
    },
    {
      itemName: "Hamburguer",
      clientName: "Juan",
      dataPedido: "28/05/2023 23:05",
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
              <p key={index}>
                Item: {entrega.itemName} - Cliente: {entrega.clientName} - Data do Pedido: {entrega.dataPedido}
              </p>
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
