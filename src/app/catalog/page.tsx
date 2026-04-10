import {permanent_marker} from "@/app/ui/fonts"
import items from '@/data/items.json'
import Link from "next/link"

export default async function Catalog() {
    return (
        <div className="w-10/12 m-auto">
            <div className="text-center m-6">
                <h1 className={`${permanent_marker.className} text-4xl`}>Catalog</h1>
            </div>

            <div className="items-center">{items.map((item: any) => {
                    return (
                        <Link key={`${item.id} description`} href={`/catalog/description/${item.id}`}>
                            <div key={item.id} className="grid grid-cols-3 items-center border-olive-900 border-solid border-4 rounded-xl m-4 p-4">
                                <img className="mr-6 w-32 rounded-lg" src={`${item.images[0]}`} alt={`image of ${item.title}`}/>
                                <p className="text-center">{item.title}</p>
                                <p className="text-center">${item.price}</p>
                            </div>
                        </Link>
                    );
                }
            )}
            </div>
        </div>
    )
}