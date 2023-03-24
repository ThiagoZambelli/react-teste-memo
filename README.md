<h1 align="center">Bem-vindos</h1>
&nbsp;
<img align="right" width="250px" style="margin-top:-20px" src="public/assets/eu.png">

</br>
</br>

<div dsplay="inline-block">
 
 <h1 align="left">Projeto realizado por:</h1>
 <h2 align="left">Thiago Zambelli</h2>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>


&nbsp;

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

&nbsp;
&nbsp;

### Geração de nomes aleatório com o `faker`

Faker gera nomes aleatórios para que não precise ser colocado manualmente durante os testes.

- Instalação:
    > `yarn add faker`

- Import:
    > `import faker from 'faker'`

- Tradução para o portugues
    > `faker.locale = 'pt-BR';`