import { Flex } from "@chakra-ui/layout";
import { Button, Card, CardBody, CardFooter, Divider, Image, Text } from "@chakra-ui/react";
import { ICardFood } from "../../interfaces/components/cardFoodComponent";



export function CardFoodComponent({ item_name, image, onClick }: ICardFood) {
    return (
        <Flex flexDirection="column" justifyContent="center" margin="15px" width={"90%"} alignItems={"center"}>
            <Card
                padding={"20px"}
                margin={"0 20px"}
                overflow="hidden"
                variant="outline"
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"300px"}
                width={"300px"}
                bg={"whiteAlpha.300"}
                borderRadius={"24px"}
                _hover={{ transform: "scale(1.05)", transition: "transform 0.25s" }}
            >
                <CardBody>
                    <Image
                        src={image}
                        borderRadius='lg'
                    />
                    <Text
                        height={"30px"}
                        margin={"15px 0"}
                        fontSize={"20px"}
                        fontWeight={"bold"}
                        textAlign={"center"}>
                        {item_name}
                    </Text>

                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant='solid' colorScheme='blue' onClick={onClick}>
                        Ver mais
                    </Button>
                </CardFooter>

            </Card>
        </Flex>
    );
}
