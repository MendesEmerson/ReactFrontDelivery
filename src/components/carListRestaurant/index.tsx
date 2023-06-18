import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ICardListRestaurant } from "../../interfaces/components/cardListRestaurantComponent";
import { ButtonComponent } from "../button";

export function CardListRestaurant({ onClick, image, imageDescription, restaurantName, restaurantDescription }: ICardListRestaurant) {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            maxHeight="170px"
            padding="5px"
            margin="15px"
            borderRadius="12px"
            justifyContent="center"
            alignItems="center"
        >
            <Image
                borderRadius="12px"
                objectFit='cover'
                boxSize="150px"
                src={image}
                alt={imageDescription}
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>{restaurantName}</Heading>

                    <Text py='2'>
                        {restaurantDescription}
                    </Text>
                </CardBody>

                <CardFooter>
                    <ButtonComponent label="Ver mais .." onClick={onClick} />
                </CardFooter>
            </Stack>
        </Card>
    )
}