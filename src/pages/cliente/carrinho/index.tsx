import { useState } from "react";
import { Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text, Wrap, useDisclosure, useToast } from "@chakra-ui/react";
import { CardListItemComponent } from "../../../components/cardListItens";
import { useRecoilState } from "recoil";
import { itemsCartState } from "../../../states/atom";
import axiosConfig from "../../../axiosConfig";
import { useEffect } from "react";
import { AlertDialogComponent } from "../../../components/alertDialog";
import { IItem } from "../../../interfaces/itemInterface";
import { ButtonComponent } from "../../../components/button";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface ICart {
    clientsId: string
    finish: boolean
    id: string
    items: IItem[]
    value: number
}

export function CarrinhoPage() {


    const [cart, setCart] = useState<ICart>()
    const toast = useToast();
    const imagem = "https://blog.hurb.com/wp-content/uploads/2020/02/feijoada-1140x675.png";
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [selectedItem, setSelectedItem] = useState({ id: "", item_name: "" });
    const navigate = useNavigate()


    function handleAlertItemDeleteConfirm(itemName: string) {
        toast({
            title: "Item deletado!",
            description: `O item ${itemName} foi removido do seu carrinho.`,
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    }

    function handleNavigateDliveries() {
        navigate("/cliente/pedidos")
    }

    async function handlefindOpenCart() {
        try {
            const response = await axiosConfig.get("/client/cart/open");
            console.log(response);
            const cart = response.data
            setCart(cart)
        } catch (error) {
            if (error instanceof AxiosError) {
                const { response } = error

                if (response && response.status === 404) {
                    setCart(undefined)
                }
            }
        }
    }

    async function handleRemoveItemCart(item_id: string, itemName: string) {
        try {
            await axiosConfig.delete(`/client/cart/deleteitem/${item_id}`);
            setCart((cart) => {
                if (cart) {
                    const updatedItems = cart.items?.filter((item) => item.id !== item_id);
                    const updatedValue = updatedItems?.reduce((total, item) => total + item.price, 0);
                    return {
                        ...cart,
                        items: updatedItems,
                        value: updatedValue,
                    };
                }
                return cart;
            });
            handleAlertItemDeleteConfirm(itemName);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleFinishCart() {
        try {
            await axiosConfig.post("/client/delivery")
            toast({
                title: "Pedido Realizado!",
                description: "Seu pedido foi realizado com sucesso!",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            handleNavigateDliveries()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handlefindOpenCart();
    }, []);

    return (
        <Flex
            flexDirection="column"
            minH="90vh"
            width="100%"
            justifyContent="flex-start"
            alignItems="center"
            padding="10px"
        >
            {cart && cart?.items.length > 0 && (
                <Flex
                    width="100%"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Wrap >
                        <ButtonComponent label="Finalizar Pedido" icon={MdShoppingCartCheckout} onClick={() => handleFinishCart()} />
                    </Wrap>
                    <Popover>
                        <PopoverTrigger>
                            <Button colorScheme="blue" minW="110px">R$ {cart && (cart.value)}</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody padding="16px">Esse é o valor total dos items que você colocou nesse carrinho.</PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>
            )}

            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="60%"
            >
                {cart && cart.items.length > 0 ? (
                    cart.items.map((item) => (
                        <CardListItemComponent
                            type="cart"
                            key={item.id}
                            id={item.id}
                            description={item.description}
                            price={item.price}
                            image_url={imagem}
                            item_name={item.item_name}
                            onClickButton={() => {
                                setSelectedItem({ id: item.id, item_name: item.item_name });
                                onOpen()
                            }}
                        />
                    ))
                ) : (
                    <Text fontSize="32px">Seu Carrinho está vazio...</Text>
                )}
                <AlertDialogComponent
                    message={`Deseja excluir o item ${selectedItem.item_name} do seu carrinho?`}
                    onClickConfirm={() => handleRemoveItemCart(selectedItem.id, selectedItem.item_name)}
                    title="Remover Item"
                    isOpen={isOpen}
                    onClose={onClose}
                />
            </Flex>
        </Flex>
    );
}
