import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div className="flex flex-1 h-screen justify-center place-items-center flex-col gap-5">
            <img
                src="/images/logo.png"
                alt="Enigma Studio"
                className="w-32 h-fit"
            />
            <span className="text-3xl">
                {isRouteErrorResponse(error)
                    ? `Error: ${error.status} ${error.statusText}`
                    : "Error inesperado."}
            </span>
            <Link to="/" className="text-blue-500">
                Volver al inicio
            </Link>
        </div>
    )
}
