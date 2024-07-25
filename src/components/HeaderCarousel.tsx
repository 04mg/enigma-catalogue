// components/HeaderCarousel.tsx
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Product } from "../types"

interface HeaderCarouselProps {
    products: Product[]
}

const HeaderCarousel = ({ products } : HeaderCarouselProps) => {
    const [headerEmblaRef] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true
        },
        [Autoplay({ delay: 2000 })]
    )

    return (
        <div
            className="embla overflow-hidden mx-4 flex justify-center"
            ref={headerEmblaRef}
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
                            src={product.images[0]}
                            alt={product.name}
                            className="h-full w-fit object-cover mx-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeaderCarousel
