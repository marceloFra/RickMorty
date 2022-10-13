import { LitElement } from "lit";

export class GetData extends LitElement{

    // pide datos a la API luego lo devuelve al componente padre
    static get properties(){
        return {
            url: {type: String},
            method: {type: String}

        }
    }
    constructor(){
        super();
        
    }
    // ciclo de vida
    firstUpdated(){
        this._getData();
    }

    // enviar los datos al padre 
    SendData(data){
        this.dispatchEvent(new CustomEvent('ApiData',{
            detail:{data:data},//{data}
            bubbles:true, // el evento puede estar subiendo de hijos a paadres
            composed:true
        }))
    }

    _getData(){
        fetch(this.url, {method:this.method})
            .then((response) => {
                if(response.ok) return response.json();
                return Promise.reject(response);
            })
            .then((data) =>{this.SendData(data);  })
            .catch((error) => {console.warn('algo ha fallado', error);})
    }
 

 
   
}
customElements.define('get-data',GetData);