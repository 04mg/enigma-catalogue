import { Link, useLoaderData } from "react-router-dom"
import ProductCard from "../components/CategoryCard"
import {
    getCategories,
    getPaymentMethods,
    getShippingMethods
} from "../services/catalogue"
import { Category, PaymentMethod, ShippingMethod } from "../types"
import Title from "../components/Title"
import ImageList from "../components/ImageList"
import { QueryClient } from "@tanstack/react-query"

const categoriesQuery = {
    queryKey: ["categories"],
    queryFn: getCategories
}

const paymentMethodsQuery = {
    queryKey: ["paymentMethods"],
    queryFn: getPaymentMethods
}

const shippingMethodsQuery = {
    queryKey: ["shippingMethods"],
    queryFn: getShippingMethods
}

export const homeLoader = (queryClient: QueryClient) => async () => {
    return {
        categories:
            queryClient.getQueryData(categoriesQuery.queryKey) ??
            (await queryClient.fetchQuery<Category[]>({ ...categoriesQuery })),
        paymentMethods:
            queryClient.getQueryData(paymentMethodsQuery.queryKey) ??
            (await queryClient.fetchQuery<PaymentMethod[]>({
                ...paymentMethodsQuery
            })),
        shippingMethods:
            queryClient.getQueryData(shippingMethodsQuery.queryKey) ??
            (await queryClient.fetchQuery<ShippingMethod[]>({
                ...shippingMethodsQuery
            }))
    }
}

export default function Home() {
    const { categories, paymentMethods, shippingMethods } = useLoaderData() as {
        categories: Category[]
        paymentMethods: PaymentMethod[]
        shippingMethods: ShippingMethod[]
    }

    return (
        <>
            <Title>Productos</Title>
            <div className="flex flex-row place-content-between max-md:flex-wrap max-md:flex-col max-md:w-full">
                {categories.map((category) => (
                    <Link
                        to={`/category/${category.name}`}
                        key={category.name}
                        className="m-8 mt-4 h-fit w-1/2 max-md:w-full max-md:m-0 max-md:p-8 max-md:pt-0 [&:last-child]:pb-0"
                    >
                        <ProductCard
                            image={category.image}
                            title={category.name}
                        />
                    </Link>
                ))}
            </div>
            <Title>Pagos</Title>
            <ImageList imageList={paymentMethods} />
            <Title className="mt-16">Envíos</Title>
            <div className="mb-8">
                <ImageList imageList={shippingMethods} />
            </div>
        </>
    )
}
