import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Wrap, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import { useAuth } from "../../../context/authContext";
import { CardFoodRecommendedComponent } from "../../../components/cardFoodRecommended";
import { CardListItemComponent } from "../../../components/cardListItens";
import { AxiosError } from "axios";
import { ButtonComponent } from "../../../components/button";
import { MdCreate } from "react-icons/md";

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
    const { isLoggedIn, accountType } = useAuth()
    const toast = useToast()
    const [cardapio, setCardapio] = useState<IItems[]>([])
    const [restaurantName, setRestaurantName] = useState<string>("")
    const pratosRecomendados = cardapio.sort(() => 0.5 - Math.random()).slice(0, 3);

    const imagem = "https://blog.hurb.com/wp-content/uploads/2020/02/feijoada-1140x675.png"



    function handleScrollToItemList(item_id: string, scrollToPrato: boolean) {
        if (scrollToPrato) {
            const pratoElement = document.getElementById(item_id);
            if (pratoElement) {
                const topOffset = pratoElement.getBoundingClientRect().top;
                window.scrollTo({ top: window.scrollY + topOffset, behavior: 'smooth' });
            }
        }
    }

    function handleNavigateCreateItem() {
        navigate("/restaurante/createitem")
    }


    async function getCardapio() {
        try {
            const response = await axiosConfig.get(`/restaurant/${restaurant_id}`)
            const cardapio = response.data.restaurantItens
            const restaurantName = response.data.restaurant.name

            setRestaurantName(restaurantName)

            if (response.status === 200) {
                setCardapio(cardapio)

            }
        } catch (error) {
            console.log(error)
        }
    }

    async function funcaoParaAddItemClicadoNoCarrinho(item_id: string) {
        if (isLoggedIn && accountType === "Clients") {
            try {
                const response = await axiosConfig.post(`/client/cart/additem/${item_id}`)
                const itemName = response.data.item_name
                toast({
                    title: "Item Adicionado",
                    description: `o Item ${itemName} foi adicionado ao seu carrinho`,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });

            } catch (error) {
                if (error instanceof AxiosError) {
                    const { response } = error
                    if (response && response.status === 409) {
                        toast({
                            title: "Item Adicionado",
                            description: `o Item já foi adicionado ao seu carrinho`,
                            status: "error",
                            duration: 3000,
                            isClosable: true,
                        });
                    }
                }
            }
        } else {
            toast({
                title: "Login Obrigatório!",
                description: "Você precisa estar logado como cliente para adicionar itens ao carrinho",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }

    useEffect(() => {
        getCardapio()
    }, [])




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
            <Flex
                width="100%"
                alignItems="center"
                justifyContent="space-between"
                padding="10px"
            >
                <Text
                    fontSize="34px"
                    fontWeight="bold"
                    bg="whiteAlpha.600"
                    padding="10px"
                    borderRadius="12px"
                >
                    {restaurantName}
                </Text>
                {accountType === "Restaurants" &&
                    <Wrap>
                        <ButtonComponent
                            label="Criar novo item"
                            icon={MdCreate}
                            onClick={() => handleNavigateCreateItem()}
                        />
                    </Wrap>

                }
            </Flex>
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
                    <CardFoodRecommendedComponent
                        key={prato.id}
                        image={imagem}
                        item_name={prato.item_name}
                        onClick={() => handleScrollToItemList(prato.id, true)}
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
                                <CardListItemComponent
                                    type="restaurant"
                                    id={itens.id}
                                    key={itens.id}
                                    price={itens.price}
                                    description={itens.description}
                                    image_url={imagem}
                                    item_name={itens.item_name}
                                    onClickCard={() => funcaoParaAddItemClicadoNoCarrinho(itens.id)}
                                    onClickButton={() => funcaoParaAddItemClicadoNoCarrinho(itens.id)}

                                />
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {cardapio.map((itens) => (
                                itens.category === "Salgadas" && (
                                    <CardListItemComponent
                                        type="restaurant"
                                        id={itens.id}
                                        key={itens.id}
                                        price={itens.price}
                                        description={itens.description}
                                        image_url={imagem}
                                        item_name={itens.item_name}
                                        onClickCard={() => funcaoParaAddItemClicadoNoCarrinho(itens.id)}
                                        onClickButton={() => funcaoParaAddItemClicadoNoCarrinho(itens.id)}
                                    />
                                )
                            ))}
                        </TabPanel>
                        <TabPanel>

                            {cardapio.map((itens) => (
                                itens.category === "Doces" && (
                                    <CardListItemComponent
                                        type="restaurant"
                                        id={itens.id}
                                        key={itens.id}
                                        price={itens.price}
                                        description={itens.description}
                                        image_url={imagem}
                                        item_name={itens.item_name}
                                        onClickCard={() => funcaoParaAddItemClicadoNoCarrinho(itens.id)}
                                        onClickButton={() => funcaoParaAddItemClicadoNoCarrinho(itens.id)}
                                    />
                                )
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {cardapio.map((itens) => (
                                itens.category === "Bebidas" && (
                                    <CardListItemComponent
                                        type="restaurant"
                                        id={itens.id}
                                        key={itens.id}
                                        price={itens.price}
                                        description={itens.description}
                                        image_url={imagem}
                                        item_name={itens.item_name}
                                        onClickCard={() => funcaoParaAddItemClicadoNoCarrinho(itens.id)}
                                        onClickButton={() => funcaoParaAddItemClicadoNoCarrinho(itens.id)}
                                    />
                                )
                            ))}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>


        </Flex>
    )
}
