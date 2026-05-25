import { Paging } from "@/lib/types"
import "./Pager.css"

type Props = {
    Paging: Paging | null
    page: number
    setPage: (page: number) => void

}

const Pager = ({ Paging, page, setPage }: Props) => {


    return (
        <div className="pager">


            {!Paging ? <h1>Error</h1> :
                <>
                    {Paging?.pages >= 1 ? <button onClick={() => { setPage(1) }}>1</button> : null}
                    {Paging?.pages >= 2 ? <button onClick={() => { setPage(2) }}>2</button> : null}
                    {Paging?.pages >= 3 ? <button onClick={() => { setPage(3) }}>3</button> : null}
                    {Paging?.prev ? <button onClick={() => { setPage(page - 1) }}>Previous</button> : null}
                    {(page <= 3 || page >= Paging?.pages - 2) ? null : <button onClick={() => { setPage(page) }}>{page}</button>}
                    {Paging?.next ? <button onClick={() => { setPage(page + 1) }}>Next</button> : null}
                    {Paging?.pages >= 6 ? <button onClick={() => { setPage(Paging?.pages - 2) }}>{Paging?.pages - 2}</button> : null}
                    {Paging?.pages >= 5 ? <button onClick={() => { setPage(Paging?.pages - 1) }}>{Paging?.pages - 1}</button> : null}
                    {Paging?.pages >= 4 ? <button onClick={() => { setPage(Paging?.pages) }}>{Paging?.pages}</button> : null}
                </>
            }
        </div>
    )
}

export default Pager

