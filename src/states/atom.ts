import { atom } from "recoil";
import { IItem } from "../interfaces/itemInterface";
import { IRestaurant } from "../interfaces/restaurantInterface";

export const pedidosRealizadosState = atom<IItem[]>({
    key:"pedidosRealizadosState",
    default: []
})

export const pedidosEmAndamentoState = atom<IItem[]>({
    key:"pedidosEmAndamentoState",
    default: []
})

export const pedidosFinalizadosState = atom<IItem[]>({
    key:"pedidosFinalizadosState",
    default: []
})

export const listaDeRestaurantesState = atom<IRestaurant[]>({
    key: "listaDeRestaurantes",
    default: []
})