import { Flex, Text } from "@chakra-ui/react"
import { CardListRestaurant } from "../../components/carListRestaurant"
import { useRecoilState } from "recoil"
import { listaDeRestaurantesState } from "../../states/atom"
import axiosConfig from "../../axiosConfig"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function RestaurantListPage() {
    const navigate = useNavigate()
    const [listaDeRestaurantes, setListaDeResaurantes] = useRecoilState(listaDeRestaurantesState)

    const imagem = "https://static.vecteezy.com/ti/vetor-gratis/p3/2662957-restaurante-logo-design-gratis-vetor.jpg"

    function handleNavigateToRestaurant(restaurant_id: string) {
        navigate(`/restaurante/${restaurant_id}`)
    }

    async function HandleListaDeRestaurantes() {
        try {
            const response = await axiosConfig.get("/restaurants")
            const restaurantesDisponiveis = response.data

            setListaDeResaurantes(restaurantesDisponiveis)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        HandleListaDeRestaurantes()
    }, [])


    return(
        <Flex
            minH={"90vh"}
            width={"100%"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            flexDirection={"column"}
        >
            {listaDeRestaurantes.length > 0 ?
                (
                    listaDeRestaurantes.map((restaurant) => (
                        <CardListRestaurant
                            key={restaurant.id}
                            image={imagem}
                            imageDescription=""
                            onClick={() => handleNavigateToRestaurant(restaurant.id)}
                            restaurantDescription={restaurant.description}
                            restaurantName={restaurant.name}

                        />
                    ))
                ) :
                (
                    <Text 
                    margin="10px"
                    fontSize="32px"
                    >
                        Nenhum restaurante aberto!
                    </Text>
                )
            }



        </Flex>
    )
}