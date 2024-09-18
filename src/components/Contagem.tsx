import { useEffect } from "react";

type CountProps = {
    count: number;
    aumentar: () => void;
}


export default function Contagem({ count, aumentar }: CountProps) {

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
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}