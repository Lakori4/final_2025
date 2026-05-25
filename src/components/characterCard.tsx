import { Character } from "@/lib/types"
import Link from "next/link"
import "./characterCard.css"


type Props = {
    Character: Character
}

const CharacterCard = ({ Character }: Props) => {


    return (
        <Link href={`/character/${Character.id}`} className="CharCard">
            <div >
                <img src={Character.image} alt={Character.name} />
                <div>
                    <h2 className="Name">{Character.name}</h2>
                    <div className="details">
                        <p>{Character.gender}</p>
                        <p>{Character.status}</p>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default CharacterCard