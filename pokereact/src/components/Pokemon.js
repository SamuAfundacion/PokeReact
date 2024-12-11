import { useState } from "react";

const Pokemon = (props) =>{

    const [nivel,setNivel] = useState(1);

    const onSubirNivel = (event) =>{
        setNivel(oldValue => oldValue+1);
    }
    const onBajarNivel = (event) =>{
        setNivel(oldValue => oldValue-1);
    }

    const calcularHP = () => {
        //TODO: Use formula real
        //This one is made up
        return 65 + (nivel * 3);
    }

    const calcularAtaque = () =>{
        return 130 + (nivel * 2);

    }
    const calcularDefensa = () =>{
        return 60 + (nivel * 2);
    }

return <div>
    <h1>Absol</h1>
    <h2>Nivel: {nivel} </h2>
    <button onClick={onSubirNivel}>Subir nivel</button>
    <button onClick={onBajarNivel}>Bajar nivel</button>
    <p>HP: {calcularHP()} </p>
    <p>Ataque: {calcularAtaque()}</p>
    <p>Defensa: {calcularDefensa()}</p>
</div>

}

export default Pokemon;