import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Wrap } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardFoodComponent } from "../../components/cardFood";
import axiosConfig from "../../axiosConfig";
import { useNavigate, useParams } from "react-router-dom";
import { CardListRestaurantComponent } from "../../components/cardListItens";
import { useAuth } from "../../context/authContext";


interface IItems {
    id: string
    item_name: string
    category: string
    description: string
    price: number
}

export function RestaurantePage() {

    const { restaurant_id } = useParams()
    const navigate = useNavigate()
    const { username } = useAuth()

    const [cardapio, setCardapio] = useState<IItems[]>([])
    const pratosRecomendados = cardapio.sort(() => 0.5 - Math.random()).slice(0, 3);

    const imagem = "https://blog.hurb.com/wp-content/uploads/2020/02/feijoada-1140x675.png"

    function handleNavigateItemEdit(id_restaurant: string | undefined, item_id: string) {
        navigate(`/restaurant/${id_restaurant}/item/${item_id}`)
    }


    useEffect(() => {
        async function getCardapio() {
            try {
                const response = await axiosConfig.get(`/restaurant/${restaurant_id}`)
                const cardapio = response.data

                if (response.status === 200) {
                    setCardapio(cardapio)

                }
            } catch (error) {
                console.log(error)
            }
        }
        getCardapio()
    }, [restaurant_id])




    return (
        <Flex
            flexDirection={"column"}
            minH={"90vh"}
            width={"100%"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            padding={"10px"}
            margin={"10px"}

        >
            <Wrap width="100%">
                <Text 
                fontSize="34px"
                fontWeight="bold" 
                bg="whiteAlpha.600"
                padding="10px"
                borderRadius="12px"
                >
                    {username}
                </Text>
            </Wrap>
            <Text fontSize={"28px"} fontWeight={"medium"}>
                Pratos Recomendados
            </Text>
            <Flex
                width={"50%"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"20px"}
                margin={"25px"}
            >
                {pratosRecomendados.map((prato) => (
                    <CardFoodComponent
                        key={prato.id}
                        image={imagem}
                        item_name={prato.item_name}
                    />
                ))
                }
            </Flex>
            <Text fontSize={"28px"} fontWeight={"medium"}>
                Cardapio
            </Text>
            <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
                <Tabs
                    variant="solid-rounded"
                    colorScheme="blue"
                    margin={"20px"}
                >
                    <TabList gap={"90px"} justifyContent={"center"}>
                        <Tab>Todos os Produtos</Tab>
                        <Tab>Pratos Salgados</Tab>
                        <Tab>Pratos Doces</Tab>
                        <Tab>Bebidas</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>

                            {cardapio.map((itens) => (
                                <CardListRestaurantComponent
                                    key={itens.id}
                                    price={itens.price}
                                    description={itens.description}
                                    image_url={imagem}
                                    item_name={itens.item_name}
                                    onClickCard={() => handleNavigateItemEdit(restaurant_id, itens.id)}
                                />
                            ))}
                            <Text>
                            </Text>

                        </TabPanel>
                        <TabPanel>
                            {cardapio.map((itens) => (
                                itens.category === "Salgadas" ? (
                                    <CardListRestaurantComponent
                                        key={itens.id}
                                        price={itens.price}
                                        description={itens.description}
                                        image_url={imagem}
                                        item_name={itens.item_name}
                                        onClickCard={() => handleNavigateItemEdit(restaurant_id, itens.id)}
                                    />
                                ) : null
                            ))}
                            <Text>
                            </Text>
                        </TabPanel>
                        <TabPanel>

                            {cardapio.map((itens) => (
                                itens.category === "Doces" ? (
                                    <CardListRestaurantComponent
                                        key={itens.id}
                                        price={itens.price}
                                        description={itens.description}
                                        image_url={imagem}
                                        item_name={itens.item_name}
                                        onClickCard={() => handleNavigateItemEdit(restaurant_id, itens.id)}
                                    />
                                ) : null
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {cardapio.map((itens) => (
                                itens.category === "Bebidas" ? (
                                    <CardListRestaurantComponent
                                        key={itens.id}
                                        price={itens.price}
                                        description={itens.description}
                                        image_url={imagem}
                                        item_name={itens.item_name}
                                        onClickCard={() => handleNavigateItemEdit(restaurant_id, itens.id)}
                                    />
                                ) : null
                            ))}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>


        </Flex>
    )
}