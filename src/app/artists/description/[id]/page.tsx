import {permanent_marker} from "@/app/ui/fonts";
import items from "@/data/items.json";
import artists from "@/data/artists.json";
import Link from "next/link";

export default async function ArtistDescription({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const artist: any = artists.find(artist => artist.id === id)
    const artistItems = items.filter(item => item.artistId == id)

    return (
        <div className="w-full m-auto">
            <div className="text-center m-6">
                <h1 className={`${permanent_marker.className} text-4xl`}>{artist.name}</h1>
            </div>

            <div className="flex">
                <img className="w-3/4 h-3/4 rounded-lg" src={`${artist.avatar}`} alt={`image of ${artist.name}`}/>
                <div>
                    <p className=" m-6">{artist.bio}</p>
                    <ul className="m-6">
                        <li><span className="font-bold">Specialty:</span> {artist.specialty}</li>
                        <li><span className="font-bold">Rating:</span> {artist.rating}</li>
                        <li><span className="font-bold">Review Count:</span> {artist.reviewCount}</li>
                        <li><span className="font-bold">Total Sales:</span> {artist.totalSales}</li>
                    </ul>
                    <div className="">
                        <h2 className={`${permanent_marker.className} m-6 text-2xl`}>My Collection</h2>
                        {artistItems.map((item: any) => {
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

            </div>
        </div>
    )
}
