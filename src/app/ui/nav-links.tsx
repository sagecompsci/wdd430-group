import Link from "next/link"

const links = [
    { name: "Home", href: "/"},
    { name: "Catalog", href: "/catalog"},
    { name: "Artists", href: "/artists"}
]

export default function NavLinks()  {
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                    >
                        <p className="p-4 m-4 text-center rounded bg-olive-200 hover:bg-olive-300">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )

}