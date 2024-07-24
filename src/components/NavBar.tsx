import { LogoInstagram, LogoWhatsapp } from "react-ionicons"
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"

interface NavBarProps {
    instagramUrl: string
    whatsappUrl: string
}

export default function NavBar({ instagramUrl, whatsappUrl }: NavBarProps) {
    return (
        <header className="flex place-items-center flex-1 p-4 px-8 justify-between">
            <Link to="/">
                <img
                    src={logo}
                    alt="Enigma Studio"
                    className="h-14 select-none"
                />
            </Link>
            <div className="flex gap-4 h-8">
                <a
                    href={instagramUrl}
                    target="_blank"
                    className="hover:scale-125 active:scale-125 duration-100"
                >
                    <LogoInstagram color="black" height="100%" width="100%" />
                </a>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    className="hover:scale-125 active:scale-125 duration-100"
                >
                    <LogoWhatsapp color="black" height="100%" width="100%" />
                </a>
            </div>
        </header>
    )
}
