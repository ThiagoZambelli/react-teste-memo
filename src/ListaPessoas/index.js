import {  useCallback, useState } from "react";
import Pessoa from "./Pessoa";


function ListaPessoas() {

   

    const [pessoas, setPessoas] = useState(["Thiago", "Bruna"]);

    const deletarPessoa = useCallback((id) => {
        setPessoas(listaAnterior => listaAnterior.filter((pessoa, indexAnterior) => indexAnterior !==id));
    },[]);
    
    return (
        <div className="has-text-centered">
            <ul>
                {pessoas.map((e, index) => 
                    <Pessoa nome={e} id={index} deletar={deletarPessoa}/>
                )}
            </ul>
            <button 
                // Esta sendo utilizado o faker para gerar nomes aleatórios
                onClick={() => setPessoas(listaAnterior => ([...listaAnterior, "pipoca"]))}
                class="button is-warning is-outlined"
            > 
                Adicionar Pessoa
            </button>
        </div>
    )
}

export default ListaPessoas;