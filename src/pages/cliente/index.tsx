import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import { ItemCardComponent } from "../../components/cardItem";

interface IItem {
  id: string;
  itemName: string;
  clientName: string;
  dataPedido: string;
  image: string;
}

export function ClientePage() {
  const [pedidosEmAndamento, setPedidosEmAndamento] = useState<IItem[]>([
    {
      id: "1",
      itemName: "Pizza de Calabresa",
      clientName: "Emerson",
      dataPedido: "28/05/2023 23:25",
      image:
        "https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg",
    },
    {
      id: "2",
      itemName: "Hamburguer",
      clientName: "Juan",
      dataPedido: "28/05/2023 23:05",
      image:
        "https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg",
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
          <Tab>Pedidos em andamento</Tab>
          <Tab>Pedidos entregues</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {pedidosEmAndamento.map((entrega) => (
              <ItemCardComponent
                key={entrega.id}
                clientName={entrega.clientName}
                dataPedido={entrega.dataPedido}
                image={entrega.image}
                itemName={entrega.itemName}
              />
            ))}
          </TabPanel>
          <TabPanel>
            <p>Lista de todos os pedidos entregues!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
