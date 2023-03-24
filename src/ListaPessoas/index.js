import {  useState } from "react";
import Pessoa from "./Pessoa";


function ListaPessoas() {
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

export default ListaPessoas;