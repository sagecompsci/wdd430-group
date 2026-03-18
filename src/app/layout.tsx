import "@/app/global.css"
import { open_sans, permanent_marker } from "@/app/ui/fonts"
import SideNav from "@/app/ui/side-nav"

export default function Layout({
        children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${open_sans.className} bg-olive-200 text-olive-900 flex`}>
                <SideNav/>
                <div className="m-4">{children}</div>
            </body>
        </html>
    )
}