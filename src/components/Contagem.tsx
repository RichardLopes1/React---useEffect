import { useEffect, useState } from "react";

type CountProps = {
    count: number;
    aumentar: () => void;
}


export default function Contagem({ count, aumentar }: CountProps) {

    const [valor, setValor] = useState(0)

    //chamado em todas as fases do ciclo de vida.
    useEffect(() => {
        console.log('Sempre sou chamado!');

    })

    useEffect(() => {
        console.log('Sou chamado quando o componente é criado');

    }, [])

    useEffect(() => {
        console.log('Sou chamado quando o count é alterado');

    }, [count])

    return (
        <div>
            <h2>Contagem</h2>
            <p>Valor de count = {count}</p>
            <p>Valor do valor= {valor}  </p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={() => setValor(valor + 1)}>aumentar valor</button>
        </div>
    )
}