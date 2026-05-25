"use client"
import { getCharById } from "@/lib/api";
import { Character } from "@/lib/types";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";



const CharID = () => {

    const [char, setChar] = useState<Character | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("");

    const { id } = useParams();

    const numId = String(id)

    useEffect(() => {

        const fetchCharacter = async () => {
            try {
                const data = await getCharById(numId)
                setChar(data)
                setError("")
            } catch {
                setError("Error")
            } finally {
                setLoading(false)
            }
        }

        fetchCharacter()
    })

    return (

        <div>
            {error ? <h1>Error</h1> :
                (!char && loading) ? <h1>Loading...</h1> : <>

                    <h1>Nombre: {char?.name}</h1>

                    <ul className="details">
                        <li>Género: {char?.gender}</li>
                        <li>Estado: {char?.status}</li>
                        <li>Especie: {char?.species}</li>
                        <li>ID: {char?.id}</li>
                        <li>Origen: {char?.origin.name}</li>
                        <li>Loacation: {char?.location.name}</li>
                    </ul>
                </>
            }
        </div>
    )
}

export default CharID