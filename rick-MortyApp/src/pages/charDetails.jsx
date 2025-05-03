import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function CharDetails() {
  const { id } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => setChar(data));
  }, [id]);

  if (!char) return <div>Loading...</div>;

  return (
    <div className="detail">
      <h2>{char.name}</h2>
      <img src={char.image} alt={char.name} />
      <p>Status: {char.status}</p>
      <p>Species: {char.species}</p>
      <p>Gender: {char.gender}</p>
    </div>
  );
}

export default CharDetails;
