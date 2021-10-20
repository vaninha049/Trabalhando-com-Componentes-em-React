import { usestate } from 'react';
import button from "../Button";
const card = () => {
   
    const [valor, setValor] = usestate(0)

    function Adicionar (){
        setValor(valor + 1)
    }

    function Remover (){
        setValor(valor - 1)
    }
    return(
        <div className="card">
  <div className="card-header">
    Meu primeiro card
  </div>
  <div className="card-body">
  
                <button 
                type="button"
             className="btn btn-success"
             onClick={Adicionar}
            >
            Adicionar
                </button>

                <button 
                type="button"
                className="btn btn-success"
                onClick={Remover}
                >
                Remover
                </button>
                <p>{valor}</p>
        </div>
</div>
   ) 
}

export default card;