// components/ProductCarousel.tsx
import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowBackCircle, ArrowForwardCircle } from "react-ionicons"
import { Product } from "../types"

interface ProductCarouselProps {
    product: Product
}

const ProductCarousel = ({ product }: ProductCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    useEffect(() => {
        if (!emblaApi) return

        const updateScrollButtons = () => {
            setCanScrollPrev(emblaApi.canScrollPrev())
            setCanScrollNext(emblaApi.canScrollNext())
        }

        emblaApi.on("select", updateScrollButtons)
        updateScrollButtons()

        return () => {
            emblaApi.off("select", updateScrollButtons)
        }
    }, [emblaApi])

    return (
        <div className="shadow-lg duration-100">
            <div
                className="embla overflow-hidden max-w-96 relative"
                ref={emblaRef}
            >
                <div className="embla__container flex z-0">
                    {product.images.map((image) => (
                        <div
                            key={image}
                            className="embla__slide flex-shrink-0 flex-grow-0"
                        >
                            <img
                                src={image}
                                alt={product.name}
                                className="h-96 w-96 object-cover object-center"
                            />
                        </div>
                    ))}
                </div>
                <div
                    className="embla__prev absolute flex h-full place-items-center top-0 z-10"
                    style={{ visibility: canScrollPrev ? "visible" : "hidden" }}
                >
                    <button
                        className="rounded-full bg-black mx-2"
                        onClick={() => emblaApi?.scrollPrev()}
                    >
                        <ArrowBackCircle
                            color="white"
                            height="32px"
                            width="32px"
                        />
                    </button>
                </div>
                <div
                    className="embla__next absolute flex h-full place-items-center top-0 right-0 z-10"
                    style={{ visibility: canScrollNext ? "visible" : "hidden" }}
                >
                    <button
                        className="rounded-full bg-black mx-2"
                        onClick={() => emblaApi?.scrollNext()}
                    >
                        <ArrowForwardCircle
                            color="white"
                            height="32px"
                            width="32px"
                        />
                    </button>
                </div>
            </div>
            <h2 className="text-lg w-96 py-1 px-3 bg-black text-white font-bold">
                {product.name}
            </h2>
        </div>
    )
}

export default ProductCarousel
