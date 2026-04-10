import Link from "next/link"
export default function Page() {
    return <p className="text-center m-10">
        Check out our hardworking artists <Link key="artists" href="/artists" className="underline">HERE </Link>
        or browse our amazing catalog of handcrafted items <Link key="items" href="/catalog" className="underline">HERE</Link>.</p>
}