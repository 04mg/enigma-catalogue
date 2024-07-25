import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function Root() {
    return (
        <>
            <NavBar
                instagramUrl="https://instagram.com/enigma_uru"
            />
            <Outlet />
        </>
    )
}
