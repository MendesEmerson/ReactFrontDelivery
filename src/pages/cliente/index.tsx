import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ItemCardComponent } from "../../components/cardItem";
import axiosConfig from "../../axiosConfig";


interface IDeliveryman {
  name: string
}

interface IItem {
  id: string;
  item_name: string;
  deliveryman?: IDeliveryman;
  created_at: string;
  end_at?: string
  image: string
}

export function ClientePage() {

  const [pedidosRealizados, setpedidosRealizados] = useState<IItem[]>()
  const [pedidosEmAndamento, setPedidosEmAndamento] = useState<IItem[]>()
  const [pedidosFinalizados, setPedidosFinalizados] = useState<IItem[]>()

  useEffect(() => {
    async function HandlePedidosRealizados() {
      try {
        const response = await axiosConfig.get("/client/deliveries")
        const itensDisponiveis = response.data

        setpedidosRealizados(itensDisponiveis)

      } catch (error) {
        console.log(error)
      }
    }
    HandlePedidosRealizados()
  }, [])


  useEffect(() => {
    async function HandlePedidosEmAndamento() {
      try {
        const response = await axiosConfig.get("/client/deliveries")
        const itensDisponiveis = response.data

        setPedidosEmAndamento(itensDisponiveis)
      } catch (error) {
        console.log(error)
      }
    }
    HandlePedidosEmAndamento()
  }, [])

  useEffect(() => {
    async function HandlePedidosFinalizados() {
      try {
        const response = await axiosConfig.get("/client/deliveries")
        const itensDisponiveis = response.data

        setPedidosFinalizados(itensDisponiveis)

      } catch (error) {
        console.log(error)
      }
    }
    HandlePedidosFinalizados()
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
          <Tab>Pedidos Realizados</Tab>
          <Tab>Pedidos em Andamento</Tab>
          <Tab>Pedidos Finalizadas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {
              pedidosRealizados && pedidosRealizados.length ?
                (
                  pedidosRealizados.map((entrega: IItem) => (
                    <ItemCardComponent key={entrega.id}
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
            {
              pedidosEmAndamento && pedidosEmAndamento.length ?
                (
                  pedidosEmAndamento.map((entrega: IItem) => (
                    <ItemCardComponent key={entrega.id}
                      // clientName={entrega.deliveryman.name}
                      itemName={entrega.item_name}
                      dataPedido={entrega.created_at}
                      image={entrega.image}
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
              pedidosFinalizados && pedidosFinalizados.length ?
                (
                  pedidosFinalizados.map((entrega: IItem) => (
                    <ItemCardComponent key={entrega.id}
                      // clientName={entrega.deliveryman.name}
                      itemName={entrega.item_name}
                      dataPedido={entrega.created_at}
                      image={entrega.image}
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
