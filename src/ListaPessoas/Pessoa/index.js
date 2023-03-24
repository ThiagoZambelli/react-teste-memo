import { memo } from "react"

function Pessoa({nome}){
    console.log(`Teste: ${nome} renderizado`)

    return(
        <li>
            {nome}
        </li>
    )
}

export default memo(Pessoa);

// Mas ao adicionar o memo(), o React usa uma 'Memorização' para saber os elementos que ja foi renderizados ou não