import { IDeliveryman } from "./deliverymanInterface";

export interface IItem {
    id: string;
    item_name: string;
    deliveryman?: IDeliveryman;
    created_at: string;
    end_at?: string
    image: string
  }