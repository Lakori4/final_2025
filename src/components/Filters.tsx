import "./Filters.css"

type Props = {
    name: string,
    gender: string,
    status: string,
    setGender: (gender: string) => void,
    setStatus: (status: string) => void,
    setName: (name: string) => void,
    setLoading: (loading: boolean) => void

}

const Filters = ({ name, gender, status, setGender, setStatus, setName, setLoading }: Props) => {


    return (
        <div className="filters">

            <input
                type="text"
                placeholder="Buscar a un personaje..."
                value={name}
                className="searchInput"
                onChange={(e) => setName(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") { setLoading(true); } }}
            />

            <button onClick={() => { setLoading(true); }}>Buscar</button>

            <button onClick={
                () => {
                    if (gender === "Female") {
                        setGender("Male")
                    } else if (gender === "Male") {
                        setGender("Genderless")
                    } else if (gender === "Genderless") {
                        setGender("unknown")
                    } else if (gender === "unknown") {
                        setGender("")
                    } else if (gender === "") {
                        setGender("Female")
                    }
                    setLoading(true)
                }
            }>Género: {gender ? gender : <p>Todos</p>}</button>


            <button onClick={
                () => {
                    if (status === "Dead") {
                        setStatus("Alive")
                    } else if (status === "Alive") {
                        setStatus("unknown")
                    } else if (status === "unknown") {
                        setStatus("")
                    } else if (status === "") {
                        setStatus("Dead")
                    }
                    setLoading(true)
                }
            }>Estado: {status ? status : <p>Todos</p>}</button>

        </div>
    )
}

export default Filters

