interface ProductCardProps {
    image: string
    title: string
}

export default function ProductCard({ image, title }: ProductCardProps) {
    return (
        <div>
            <h1 className="text-3xl font-thin mb-4 hover:underline active:underline capitalize">
                {title}
            </h1>
            <img
                src={image}
                alt={title}
                className="rounded-lg aspect-square object-cover shadow-lg hover:shadow-2xl hover:-translate-y-2 active:shadow-2xl active:-translate-y-2 duration-100"
            />
        </div>
    )
}
