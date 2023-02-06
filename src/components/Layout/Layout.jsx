import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import NavigationContainer from '../navigation/NavigationContainer'

function Layout() {
    return (
        <div className="grid grid-cols-[2fr,_10fr] grid-rows-[120px,_100%]">
            <Header />
            <NavigationContainer />
            <div className="bg-mainGreen h-[100%]">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
