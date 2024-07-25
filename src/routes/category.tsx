import { Params, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/catalogue"
import { Product } from "../types"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Title from "../components/Title"
import { QueryClient } from "@tanstack/react-query"

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
                queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery<Product[]>({ ...query }))
        }
    }

export default function Category() {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true
        },
        [Autoplay({ delay: 2000 })]
    )
    const { products } = useLoaderData() as { products: Product[] }

    return (
        <>
            <div
                className="embla overflow-hidden mx-4 flex justify-center"
                ref={emblaRef}
            >
                <div
                    className="embla__container flex"
                    style={{ height: "calc(100vh - 87.96px)" }}
                >
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="embla__slide flex-shrink-0 flex-grow-0 max-md:basis-full m-4"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-fit object-cover mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Title className="mb-10 text-center">Catalogo</Title>
            <div className="flex flex-wrap gap-8 justify-center mb-8">
                {products.map((product) => (
                    <div
                        key={product.name}
                        className="shadow-lg hover:-translate-y-2 active:-translate-y-2 duration-100"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-96 w-96 object-cover object-center"
                        />
                        <h2 className="text-lg w-96 py-1 px-3 bg-black text-white font-bold">
                            {product.name}
                        </h2>
                    </div>
                ))}
            </div>
        </>
    )
}
