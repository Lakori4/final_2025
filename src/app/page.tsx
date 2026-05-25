"use client"

import CharacterCard from "@/components/characterCard"
import Filters from "@/components/Filters"
import Pager from "@/components/Pager"
import { getInfo } from "@/lib/api"
import { Character, Paging } from "@/lib/types"
import { useEffect, useState } from "react"
import "./page.css"


const Chars = () => {

  const [chars, setChars] = useState<Character[] | null>(null)
  const [page, setPage] = useState<number>(1)
  const [gender, setGender] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [paging, setPaging] = useState<Paging | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("");

  useEffect(() => {

    const fetchCharacters = async () => {
      try {
        const data = await getInfo(page, status, gender, name)
        setChars(data.results)
        setPaging(data.info)
        setError("")
        setLoading(true)
      } catch {
        setError("Error")
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [page, loading])


  return (


    <div>

      <Filters name={name} status={status} gender={gender} setLoading={setLoading} setGender={setGender} setName={setName} setStatus={setStatus} />
      {error ? <h1>Error</h1> :

        (!chars && loading) ? <h1>Loading...</h1> : <>



          <ul className="charGrid">
            {chars?.map((c) => <CharacterCard Character={c} key={c.id} />)}
          </ul>

          <Pager page={page} Paging={paging} setPage={setPage} /> </>
      }
    </div>


  )
}

export default Chars
