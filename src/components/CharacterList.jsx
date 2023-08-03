import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Character from "./Character";

//Nav Page
function NavPage(props){
  return(
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {props.page}</p>
      <Button variant="contained" onClick={() => props.setPage(props.page + 1)}>Next Page</Button>
    </header>
  )
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData(){
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const data = await response.json()
    setCharacters(data.results)
    }
    fetchData()
  }, [page]);

  return (
    <div className="container">
      <div className="row">
        <NavPage page={page} setPage={setPage}/>
      {
        characters.map(character => {
          return(
            <div className="col-md-4" key={character.id}>
              <Character character={character}/>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default CharacterList