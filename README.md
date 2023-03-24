
---
![Alt text](public/assets/renderiza%C3%A7%C3%A3oDesnecessaria.gif)

### Problema de Renderização desnecessária:
> Esta sendo criado uma UL com o JSX e passando uma lista de nomes com o useState

> Mas ao adicionar um novo nome a lista todos os anteriores são renderizados tambem.


~~~JavaScript
// Esta sendo criado uma UL com o JSX e passando uma lista de nomes com o useState
// Mas ao adicionar um novo nome a lista todos os anteriores são renderizados tambem.
export default function ListaPessoas() {
    const [pessoas, setPessoas] = useState(["Thiago", "Bruna"]);

    
    return (
        <div>
            <ul>
                {pessoas.map(e => 
                    <Pessoa nome={e} />
                )}
            </ul>
            <button onClick={() => setPessoas(listaAnterior => ([...listaAnterior, "Pedrinho"]))}> 
                Adicionar Pessoa
            </button>
        </div>
    )
}
~~~

---
![Alt text](public/assets/renderiza%C3%A7%C3%A3oComMemo.gif)

> Mas ao adicionar o memo(), o React usa uma 'Memorização' para saber os elementos que ja foi renderizados ou não
~~~JavaScript
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
~~~