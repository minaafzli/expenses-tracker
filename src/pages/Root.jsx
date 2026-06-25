import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

function RootLayout() {
    return (
        <div className="bg-background">
         <MainNavigation />   
         <main>
            <Outlet />
         </main>
        </div>
    )
}

export default RootLayout
