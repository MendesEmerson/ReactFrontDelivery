import { Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text, Wrap, border } from "@chakra-ui/react";
import { useState } from "react";
import { MdLogin, MdLogout, MdPersonAddAlt, MdShoppingCart, MdArrowDropDown } from "react-icons/md"
import { ButtonComponent } from "../button";

export function HeaderComponent() {
    const [isLogin, setIsLogin] = useState()

    return (
        <Box
            width="100%"
            height="50px"
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

                {isLogin ? (
                    <Flex>                        
                        <Menu>
                            <MenuButton
                                height={"30px"}
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
                    </Flex>
                ) : (
                    <Flex
                        width={"50%"}
                        alignItems={"Center"}
                        justifyContent={"flex-end"}

                    >
                        <Wrap width={"120px"} margin={"0 10px"}>
                            <ButtonComponent icon={MdLogin} label="Login" />
                        </Wrap>

                        <Wrap width={"120px"} marginRight={"50px"}>
                            <ButtonComponent icon={MdPersonAddAlt} label="Cadastro" />
                        </Wrap>

                    </Flex>
                )}


            </Flex>

        </Box>

    )
}