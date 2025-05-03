import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Imgs() {
    const [data, setData]=useState([]);
    const [page, setPage]=useState(1)

    useEffect( () => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(res => res.json())
        .then(json => setData(json.results));
    }, [page]);


return (
    <div className="container">
        <h2>rickandmortyimg</h2>
        <div className="grid">
            {data.map(char => (
                <div key={char.id} className="card">
                    <img src={char.image} alt={char.name} />
                    <h4>{char.name}</h4>
                    <Link to={`/character/${char.id}`}>Details</Link>
                </div>
            ))}
        </div>
        <div className="pagination">
            <button onClick={() => setPage(p => Math.max(p - 1, 1))}>previous</button>
            <button onClick={() => setPage(p => p + 1)}>next</button>
        </div>

    </div>
);
}

export default Imgs;