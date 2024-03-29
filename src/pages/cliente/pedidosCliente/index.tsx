import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pedidosEmAndamentoState, pedidosFinalizadosState, pedidosRealizadosState } from "../../../states/atom";
import axiosConfig from "../../../axiosConfig";
import { ItemCardComponent } from "../../../components/cardItem";
import { IItem } from "../../../interfaces/itemInterface";




export function ClientePage() {

  const [pedidosRealizados, setpedidosRealizados] = useRecoilState(pedidosRealizadosState)
  const [pedidosEmAndamento, setPedidosEmAndamento] = useRecoilState(pedidosEmAndamentoState)
  const [pedidosFinalizados, setPedidosFinalizados] = useRecoilState(pedidosFinalizadosState)

  const imagem = "https://blog.hurb.com/wp-content/uploads/2020/02/feijoada-1140x675.png"

  async function HandlePedidosRealizados() {
    try {
      const response = await axiosConfig.get("/client/deliveries")
      const itensDisponiveis = response.data

      setpedidosRealizados(itensDisponiveis)

    } catch (error) {
      console.log(error)
    }
  }

  async function HandlePedidosEmAndamento() {
    try {
      const response = await axiosConfig.get("/client/deliveries/accepted")
      const itensDisponiveis = response.data

      setPedidosEmAndamento(itensDisponiveis)
    } catch (error) {
      console.log(error)
    }
  }

  async function HandlePedidosFinalizados() {
    try {
      const response = await axiosConfig.get("/client/deliveries")
      const itensDisponiveis = response.data

      setPedidosFinalizados(itensDisponiveis)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    HandlePedidosRealizados();
  }, []);


  useEffect(() => {
    HandlePedidosEmAndamento()
  }, [])

  useEffect(() => {
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
      <Tabs variant="solid-rounded" colorScheme="blue" margin={"20px"}>
        <TabList>
          <Tab >Pedidos Realizados</Tab>
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
                      typeCard="Entregador"

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
              pedidosEmAndamento && pedidosEmAndamento.length ?
                (
                  pedidosEmAndamento.map((entrega: IItem) => (
                    <ItemCardComponent
                      key={entrega.id}
                      typeCard="Entregador"
                      username={entrega.deliveryman?.name}
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
              pedidosFinalizados && pedidosFinalizados.length ?
                (
                  pedidosFinalizados.map((entrega: IItem) => (

                    entrega.end_at !== null ? (
                      <ItemCardComponent key={entrega.id}
                        typeCard="Entregador"

                        username={entrega.deliveryman?.name}
                        itemName={entrega.item_name}
                        dataPedido={entrega.created_at}
                        dataFinalização={entrega.end_at}
                        image={imagem}
                      />
                    ) : (null)


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
