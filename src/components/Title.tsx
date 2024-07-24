interface TitleProps {
    children: string
    className?: string
}

export default function Title({ children, className }: TitleProps) {
    return (
        <div className={`text-left mx-8 my-4 ${className || ""}`}>
            <h2 className="text-3xl border-b-4 border-gray-200 inline tracking-widest uppercase font-thin">
                {children}
            </h2>
        </div>
    )
}
