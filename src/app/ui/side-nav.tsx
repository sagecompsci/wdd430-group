import Link from "next/link"
import NavLinks from "@/app/ui/nav-links"
import {permanent_marker} from "@/app/ui/fonts"

export default function SideNav(){
    return (
        <div className="flex h-screen w-70 flex-col px-3 py-4 md:px-2 bg-olive-500 sticky top-0">
            <Link
                href="/"
            >
                <p className={`${permanent_marker.className} mt-10 mb-5 text-4xl text-center text-olive-200`}>HandCrafted Haven</p>
            </Link>
            <div className="flex-row md:flex-col justify-between space-x-2 md:space-x-0 md:space-y-2">
                <NavLinks />
            </div>
        </div>
    )
}