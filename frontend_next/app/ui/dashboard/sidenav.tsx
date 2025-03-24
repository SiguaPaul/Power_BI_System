import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-800 text-white shadow-lg">
            <Link
                className="mb-4 flex h-20 items-center justify-center rounded-md p-4"
                href="/"
            >
                <span className="flex text-xl font-bold justify-center items-center text-center">
                    <img src="/icons/icons8-power-bi-2021-48.svg" alt="" />
                    <h2 className="me-3">StarFlowers</h2>
                </span>
            </Link>
            <div className="flex grow flex-col space-y-2">
                <NavLinks />
            </div>

            <div>
                <button className="flex h-[48px] items-center gap-2 rounded-md bg-gray-700 p-3 text-sm font-medium text-white 
                               hover:bg-gray-500 hover:text-white transition-all duration-200 ease-in-out md:justify-start md:px-4 cursor-pointer">
                    <span className="text-sm">Sign out</span>
                </button>
            </div>
        </div>

    )
}