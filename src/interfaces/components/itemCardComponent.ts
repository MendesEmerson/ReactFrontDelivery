export interface IItemCardProps {
    itemName: string;
    username?: string;
    dataPedido: string;
    dataFinalização?: string;
    image: string
    typeCard: "Entregador" | "Cliente"
}