import { memo } from "react"

function Pessoa({nome, deletar, id}){
    console.log(`Teste: ${nome} renderizado`)

    return(
        <li className="box mb-3">
            {nome}
            <button 
                onClick={() => deletar(id)}
                className="button is-danger is-outlined ml-2"
            >
                Deletar
            </button>
        </li>
    )
}

export default memo(Pessoa);

// Mas ao adicionar o memo(), o React usa uma 'Memorização' para saber os elementos que ja foi renderizados ou não