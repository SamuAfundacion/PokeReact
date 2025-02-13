import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const PokeLista = (props) =>{
    const [pokemons,setPokemons] = useState([]);
    const navigate= useNavigate();

//    16 de diciembre: queda pendiente para el 18, HAY QUE EXPLICAR EFECTOS  
useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response=> {
        setPokemons(response.data.results);
});
},[])

const funcionNavegarASnivy = () =>{
    navigate("/pokemon/495");
}

    return <div>
        <button onClick={funcionNavegarASnivy}>Navega a Snivy</button>
        <Link  to="/pokemon/25"> Ir a PIKACHU</Link>
        <h1>Lista</h1>
        {pokemons.map(p => {
           return <>
           <p>Este pokemon es {p.name}</p>
           <div onClick={ () => {navigate("/pokemon/"+p.name)}}>Navegar</div>
           <Link to={"pokemon/"+p.name}>Navegar</Link>
           </>
        })}
  </div>
// Mediante link evitamos recargar y enviar petición, es mas rapido
//Otra opcion es UseNavigator
    }
export default PokeLista