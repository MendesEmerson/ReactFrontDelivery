import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Card, CardBody } from "@chakra-ui/react";
import { ImageProps, Image } from "@chakra-ui/react";

interface IItemCardProps {
    itemName: string;
    clientName: string;
    dataPedido: string;
    dataFinalização?: string;
    image: ImageProps;
}

export function ItemCardComponent({
    clientName,
    dataPedido,
    itemName,
    dataFinalização,
    image
}: IItemCardProps) {
    return (
        <Flex flexDirection={"column"} justifyContent={"center"}>
            <Card maxW="sm">
                <CardBody>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        borderRadius={image.borderRadius}
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{itemName}</Heading>
                        <Text>
                            {clientName}
                        </Text>
                        <Text>
                            {dataPedido}
                        </Text>
                        {dataFinalização ? (
                            <Text >
                                {dataFinalização}
                            </Text>
                        ) : (
                            null
                        )}

                    </Stack>
                </CardBody>
            </Card>
        </Flex>
    );
}
