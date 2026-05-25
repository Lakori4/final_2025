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

                    <div className="details">
                        <h3>Género: {char?.gender}</h3>
                        <h3>Estado: {char?.status}</h3>
                        <h3>Especie: {char?.species}</h3>
                        <h3>ID: {char?.id}</h3>
                        <h3>Origen: {char?.origin.name}</h3>
                        <h3>Loacation: {char?.location.name}</h3>
                    </div> </>
            }

        </div>
    )
}

export default CharID