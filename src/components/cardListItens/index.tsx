import { Button, Card, CardBody, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useAuth } from "../../context/authContext";


interface CardListProps {
    item_name: string
    description: string
    price: number
    image_url: string
    onClickCard: () => void
}

export function CardListRestaurantComponent({ description, item_name, price, image_url,onClickCard }: CardListProps) {

    const { accountType } = useAuth()

    const handleClickCard = () => {
        if (accountType === "Restaurants" && onClickCard) {
            onClickCard();
        }
    };

    return (
        <Flex justifyContent={"center"} margin={"20px 0"}>
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
                    <CardBody display="flex" flexDirection="row" onClick={handleClickCard}>
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
                            <Button variant='solid' colorScheme='blue'>
                                Comprar
                            </Button>
                            <Text padding="0 18px">
                                R${price}
                            </Text>
                        </Flex>
                    </CardBody>
                </Stack>
            </Card>
        </Flex>
    )
}