import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ItemCardComponent } from "../../components/cardItem";

interface IItem {
  itemName: string;
  clientName: string;
  dataPedido: string;
}

export function ClientePage() {
  const [pedidosEntregues, setPedidosEntregues] = useState<IItem[]>([
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
      <Tabs>
        <TabList>
          <Tab>Pedidos em andamento</Tab>
          <Tab>Pedidos entregues</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {pedidosEntregues.map((entrega, index) => (
              <Text key={index}>Pedido: {entrega.itemName} - Cliente: {entrega.clientName} - Data do Pedido:{entrega.dataPedido}</Text>
            ))}
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
