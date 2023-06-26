export interface CardListProps {
    type: "restaurant" | "cart"
    id: string
    item_name: string
    description: string
    price: number
    image_url: string
    onClickCard?: () => void
    onClickButton: () => void
}