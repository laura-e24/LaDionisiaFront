import { useEffect, useState } from "react";
import DashboardLogoBlack from "../../assets/img/DashboardBlack.svg"
import DashboardLogoWhite from "../../assets/img/DashboardWhite.svg"
import WinesLogoBlack from "../../assets/img/WinesBlack.svg"
import WinesLogoWhite from "../../assets/img/WinesWhites.svg"
import UsersLogoBlack from "../../assets/img/UsersBlack.svg"
import UsersLogoWhite from "../../assets/img/UsersWhite.svg"
const Sidebar = () => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }
    return (
        <>
            <div className="w-1/4 h-full flex self-start p-2 sticky top-0">
                <div className="w-full rounded-lg">
                    <div className="w-ful px-1 p-1">
                        <ul className="relative">
                            <li className="relative">
                                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/dashboard/dashboard" data-mdb-ripple="true" data-mdb-ripple-color="dark">{
                                    <DashboardLogoBlack className="w-10 h-10" />
                                } Dashboard</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/dashboard/products" data-mdb-ripple="true" data-mdb-ripple-color="dark"> {
                                   <WinesLogoBlack className="w-10 h-10" />
                                } Products</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/dashboard/users" data-mdb-ripple="true" data-mdb-ripple-color="dark"> {
                                    <UsersLogoBlack className="w-10 h-10" />
                                } Users</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/dashboard/comments" data-mdb-ripple="true" data-mdb-ripple-color="dark"> {
                                   <UsersLogoBlack className="w-10 h-10" />
                                } Comments</a>
                            </li>
                        </ul>
                    </div>
                    {/* <h2 className="text-xl text-center">other</h2>
                    <div className="w-ful px-1 p-1">
                        <ul className="relative">
                            <li className="relative">
                                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Sidenav link 1</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Sidenav link 2</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Sidenav link 2</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default Sidebar