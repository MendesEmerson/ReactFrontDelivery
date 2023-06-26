import { Button, Card, CardBody, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useAuth } from "../../context/authContext";
import { CardListProps } from "../../interfaces/components/cardLIstItemsComponent";


export function CardListItemComponent({ type, id, description, item_name, price, image_url, onClickCard, onClickButton }: CardListProps) {

    const { accountType } = useAuth()

    const handleClickCard = () => {
        if (accountType === "Restaurants" && onClickCard) {
            onClickCard();
        }
    };

    return (
        <Flex
            justifyContent={"center"}
            margin={"20px 0"}
            width={"100%"}
        >

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                height="120px"
                width="100%"
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={image_url}
                />

                <Stack width={"100%"}>
                    <CardBody id={id} display="flex" flexDirection="row" onClick={handleClickCard}>
                        <Flex
                            flexDirection="column"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            width="70%"
                        >
                            <Heading size='md'>{item_name}</Heading>
                            <Text py='2'>
                                {description}
                            </Text>
                        </Flex>
                        <Flex width="30%" flexDirection="column" alignItems="flex-end" justifyContent="space-between">
                            <Button variant='solid' colorScheme='blue' onClick={onClickButton}>
                                {type === "restaurant" && (
                                    "Adicionar"
                                )}
                                {type === "cart" && (
                                    "Excluir"
                                )}
                            </Button>
                            <Text fontSize="20px" padding="0 18px">
                                R${price}
                            </Text>
                        </Flex>
                    </CardBody>
                </Stack>
            </Card>
        </Flex>
    )
}