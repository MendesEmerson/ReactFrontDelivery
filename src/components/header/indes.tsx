import { Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text, Wrap } from "@chakra-ui/react";
import { MdLogin, MdLogout, MdPersonAddAlt, MdShoppingCart, MdArrowDropDown, MdHome, MdArrowBack } from "react-icons/md"
import { ButtonComponent } from "../button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export function HeaderComponent() {

    const { isLoggedIn, logout, accountType } = useAuth()
    const navigate = useNavigate()
    const currentUri = window.location.pathname

    function handleNavigationLogin() {
        navigate("/login")
    }

    function handleNavigationCadastro() {
        navigate("/cadastro")
    }

    function handleNavigationHome() {
        navigate("/")
    }

    function handleNavigationBack() {
        navigate(-1)
    }

    function handleLogout() {
        logout()
        navigate("/login")
    }

    function handleNavigationDeliveries() {
        navigate("/cliente/pedidos")
    }

    function handleNavigationCart() {
        navigate("/cliente/carrinho")
    }



    console.log(isLoggedIn)

    return (
        <Box
            width="100%"
            height="80px"
            bg={"blue.700"}
        >
            <Flex
                height={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Flex
                    width={"50%"}
                    alignItems={"Center"}
                    justifyContent={"flex-start"}
                >
                    {currentUri.startsWith("/restaurante/") && (
                        <Wrap width={"120px"} margin={"0 20px"}>
                            <ButtonComponent
                                icon={MdArrowBack}
                                label="Voltar"
                                onClick={handleNavigationBack}
                            />
                        </Wrap>
                    )}
                    <Text
                        fontSize={"24px"}
                        fontWeight={"bold"}
                        align={"center"}
                        color={"white"}
                        margin={"0 20px"}
                    >
                        Delivery Express
                    </Text>

                </Flex>

                {isLoggedIn ? (
                    <Flex width={"50%"}
                        alignItems={"Center"}
                        justifyContent={"space-between"}>
                        {accountType === "Clients" && (
                            <Flex>
                                <Wrap paddingRight="50px">
                                    <ButtonComponent icon={MdHome} label="Home" onClick={handleNavigationHome} />
                                </Wrap>
                                <Menu>
                                    <MenuButton width="120px" as={Button} rightIcon={<MdArrowDropDown />}>
                                        Menu
                                    </MenuButton>

                                    <MenuList>
                                        <MenuItem
                                            minH="48px"
                                            gap="4px"
                                            onClick={handleNavigationCart}
                                        >
                                            <Icon as={MdShoppingCart} />
                                            <span>Carrinho</span>
                                        </MenuItem>
                                        <MenuItem
                                            minH="48px"
                                            gap="4px"
                                            onClick={handleNavigationDeliveries}
                                        >
                                            <Icon as={MdShoppingCart} />
                                            <span>Meus Pedidos</span>
                                        </MenuItem>
                                    </MenuList>

                                </Menu>
                            </Flex>

                        )}

                        <Wrap
                            width={"120px"}
                            marginLeft="auto"
                            marginRight="20px"
                        >
                            <ButtonComponent
                                icon={MdLogout}
                                label="Logout"
                                onClick={handleLogout}
                            />
                        </Wrap>
                    </Flex>
                ) : (
                    <Flex
                        width={"50%"}
                        alignItems={"Center"}
                        justifyContent={"flex-end"}

                    >
                        <Wrap paddingRight="50px">
                            <ButtonComponent icon={MdHome} label="Home" onClick={handleNavigationHome} />
                        </Wrap>
                        <Wrap width={"120px"} margin={"0 10px"}>
                            <ButtonComponent icon={MdLogin} label="Login" onClick={handleNavigationLogin} />
                        </Wrap>

                        <Wrap width={"120px"} marginRight={"50px"}>
                            <ButtonComponent icon={MdPersonAddAlt} label="Cadastro" onClick={handleNavigationCadastro} />
                        </Wrap>

                    </Flex>
                )}


            </Flex>

        </Box>

    )
}