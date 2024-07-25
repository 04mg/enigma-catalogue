// pages/Category.tsx
import { Params, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/catalogue"
import { Product } from "../types"
import { QueryClient } from "@tanstack/react-query"
import Title from "../components/Title"
import HeaderCarousel from "../components/HeaderCarousel"
import ProductCarousel from "../components/ProductCarousel"

const productsQuery = (category: string) => ({
    queryKey: ["products", category],
    queryFn: async () => getProducts(category)
})

export const categoryLoader =
    (queryClient: QueryClient) =>
    async ({ params }: { params: Params }) => {
        const query = productsQuery(params.category!)
        return {
            products:
                queryClient.getQueryData(query.queryKey) ??
                (await queryClient.fetchQuery<Product[]>({ ...query }))
        }
    }

export default function Category() {
    const { products } = useLoaderData() as { products: Product[] }

    return (
        <>
            <HeaderCarousel products={products} />
            <Title className="mb-10 text-center">Catalogo</Title>
            <div className="flex flex-wrap gap-8 justify-center mb-8">
                {products.map((product) => (
                    <ProductCarousel key={product.name} product={product} />
                ))}
            </div>
        </>
    )
}
