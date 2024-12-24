import { Product } from "./product"

export type Cart = {
    id: string | number,
    items: {
    product: Product,
    quantity: number
    }[],
    createdAt: Date
}