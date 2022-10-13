import { LitElement, html, css } from 'lit';
import { GetData } from './components/GetData';
import demoStyle from './styles/demo-style';  
import './components/ApiTemplate';

export class AppDemo extends LitElement {
  static get properties() {
    return {
      wiki:{ type: Array },
      title: { type: String },
    };
  }

  static get styles() {
    return [demoStyle]
  }

  constructor() {
    super();
    this.title = 'My app';
    //inicializando wiki
    this.wiki = [];

    // obtener lo que nos envia el componente hijo
    this.addEventListener('ApiData', (e) => {
      //console.log(e.detail.data);
      this._dataFormat(e.detail.data);
    })
  }

  _dataFormat(data){
    let characters  = [];
    
   data["results"].forEach((element) => {
      characters.push({
        img: element.image,
        name: element.name,
        species: element.species,
        status: element.status
      })
    });  

 
    console.log(characters);
    // se lo pasamos a una propiedad 
    this.wiki = characters;

  }

  render() {
    return html` 
       <get-data url="https://rickandmortyapi.com/api/character" method="GET" ></get-data>
      <api-template> </api-template>
      ${this.DataTemplate} 

    `;
  }

  get DataTemplate(){
    return html`
        ${this.wiki.map(element => html`
            <div class="card">
               <div class="card-content">
                  <h2>${element.name}</h2>
                  <img src="${element.img}">
                  <p>${element.species}  |${element.status}</p>
               </div>
            </div>
        `)}
    `;
  }
}
