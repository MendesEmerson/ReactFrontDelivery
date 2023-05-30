import { Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text, Wrap } from "@chakra-ui/react";
import { MdLogin, MdLogout, MdPersonAddAlt, MdShoppingCart, MdArrowDropDown } from "react-icons/md"
import { ButtonComponent } from "../button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export function HeaderComponent() {

    const { isLoggedIn, logout } = useAuth()
    const navigate = useNavigate()

    function handleNavigationLogin() {
        navigate("/login")
    }

    function handleNavigationCadastro() {
        navigate("/cadastro")
    }

    function handleLogout() {
        logout()
        navigate("/login")
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
                    justifyContent={"center"}>
                    <Text
                        fontSize={"28px"}
                        fontWeight={"bold"}
                        align={"center"}
                        color={"white"}

                    >
                        Delivery Express
                    </Text>

                </Flex>

                {isLoggedIn ? (
                    <Flex width={"50%"}
                        alignItems={"Center"}
                        justifyContent={"space-around"}>
                        <Menu>
                            <MenuButton
                                width={"120px"}
                                as={Button}
                                rightIcon={<MdArrowDropDown />}
                            >
                                Menu
                            </MenuButton>
                            <MenuList>
                                <MenuItem minH='48px'>
                                    <Icon as={MdShoppingCart} />
                                    <span>Carrinho</span>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                    <Icon as={MdLogout} />
                                    <span>Logout</span>
                                </MenuItem>
                            </MenuList>
                        </Menu>

                        <Wrap width={"120px"} >
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