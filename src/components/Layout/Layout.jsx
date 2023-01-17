import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'

function Layout() {
    return (
        <div className="grid grid-cols-[2fr,_10fr] grid-rows-[120px,_100%]">
            <Header />
            <Navigation />
            <div className="bg-mainGreen h-[100%]">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
