import {permanent_marker} from "@/app/ui/fonts";
import items from "@/data/items.json";
import artists from "@/data/artists.json";
import Link from "next/link";

export default async function ItemDescription({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const item: any = items.find(item => item.id === id)
    const artist: any = artists.find(artist => artist.id === item.artistId)

    return (
        <div className="w-full m-auto">
            <div className="text-center m-6">
                <h1 className={`${permanent_marker.className} text-4xl`}>{item.title}</h1>
                <Link
                    key={item.artistId}
                    href={`/artists/description/${item.artistId}`}
                >
                    <p className="underline">{artist.name}</p>
                </Link>
            </div>

            <div className="flex">
                <img className="w-3/4 h-3/4 rounded-lg" src={`${item.images[0]}`} alt={`image of ${item.title}`}/>
                <div>
                    <p className=" m-6">{item.description}</p>
                    <ul className="m-6">
                        <li><span className="font-bold">Price:</span> ${item.price}</li>
                        <li><span className="font-bold">In Stock:</span> ${item.quantity}</li>
                        <li><span className="font-bold">Width:</span> {item.dimensions["width"]}</li>
                        <li><span className="font-bold">Height:</span> {item.dimensions["height"]}</li>
                        <li><span className="font-bold">Depth:</span> {item.dimensions["depth"]}</li>
                        <li><span className="font-bold">Materials:</span> {item.materials.join(", ")}</li>
                    </ul>
                    <div className="m-6">
                        <p className="text-2xl">Rating: {item.rating}</p>
                        <div>{item.reviews.map((review: any) => {
                            return (
                                <div key={review.id} className="border-olive-900 border-solid border-4 rounded-xl p-4 my-6">
                                    <p className="font-bold">{review.rating} - {review.title}</p>
                                    <p className="italic">{review.username} - {review.date}</p>
                                    <p>{review.body}</p>
                                </div>
                            )
                        })}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
