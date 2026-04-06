import {permanent_marker} from "@/app/ui/fonts"
import items from '@/data/items.json'
export default async function Catalog() {
    return (
        <div className="w-full">
            <div className="text-center">
                <h1 className={`${permanent_marker.className} text-4xl`}>Catalog</h1>
            </div>

            <div className="items-center">{items.map((item: any) => {
                    return (
                        <div key={item.id} className="flex items-center border-olive-900 border-solid border-4 rounded-xl m-4 p-4">
                            <img className="mr-6 w-32 rounded-lg" src={`${item.images[0]}`} alt={`image of ${item.title}`}/>
                            <p>{item.title}</p>
                        </div>

                    );
                }
            )}
            </div>
        </div>
    )
}