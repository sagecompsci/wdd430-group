import {permanent_marker} from "@/app/ui/fonts"
import artists from '@/data/artists.json'
import Link from "next/link"

export default async function Artists() {
    return (
        <div className="w-10/12 m-auto">
            <div className="text-center m-6">
                <h1 className={`${permanent_marker.className} text-4xl`}>Artists</h1>
            </div>

            <div className="items-center">{artists.map((artist: any) => {
                    return (
                        <Link key={`${artist.id} description`} href={`/artists/description/${artist.id}`}>
                            <div key={artist.id} className="grid grid-cols-3 items-center border-olive-900 border-solid border-4 rounded-xl m-4 p-4">
                                <img className="mr-6 w-32 rounded-lg" src={`${artist.avatar}`} alt={`image of ${artist.name}`}/>
                                <p className="text-center">{artist.name}</p>
                            </div>
                        </Link>
                    );
                }
            )}
            </div>
        </div>
    )
}
