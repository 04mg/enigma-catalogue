import { Category, PaymentMethod, Product, ShippingMethod } from "../types"
import PocketBase from "pocketbase"

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)

export const getCategories = async (): Promise<Category[]> => {
    const records = await pb.collection("categories").getFullList()
    return records.map((record) => {
        return {
            name: record.name,
            image: pb.files.getUrl(record, record.image)
        }
    })
}

export const getProducts = async (category: string): Promise<Product[]> => {
    const records = await pb.collection("products").getFullList({
        expand: "category",
        filter: `category.name = "${category}"`
    })
    return records.map((record) => {
        return {
            name: record.name,
            image: pb.files.getUrl(record, record.image)
        }
    })
}

export const getPaymentMethods = async (): Promise<PaymentMethod[]> => {
    const records = await pb.collection("paymentMethods").getFullList()
    return records.map((record) => {
        return {
            name: record.name,
            image: pb.files.getUrl(record, record.image)
        }
    })
}

export const getShippingMethods = async (): Promise<ShippingMethod[]> => {
    const records = await pb.collection("shippingMethods").getFullList()
    return records.map((record) => {
        return {
            name: record.name,
            image: pb.files.getUrl(record, record.image)
        }
    })
}
