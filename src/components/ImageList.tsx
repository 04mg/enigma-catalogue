import { PaymentMethod, ShippingMethod } from "../types"

interface ImageListProps {
    imageList: PaymentMethod[] | ShippingMethod[]
}

export default function ImageList({ imageList }: ImageListProps) {
    return (
        <div className="flex flex-wrap max-md:flex-col mt-12 gap-12 justify-center place-items-center">
            {imageList.map((item) => (
                <img
                    key={item.name}
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-fit mx-auto grayscale select-none"
                />
            ))}
        </div>
    )
}
