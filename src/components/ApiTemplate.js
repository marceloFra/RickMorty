import { LitElement, html, css } from "lit";
import templatestyle from '../styles/template.js'

export class ApiTemplate extends LitElement {


    static get styles() {
        return [templatestyle];
    }

 
    render() {
        return html` 
            <div class="container">
                <h1> the <trong class="title">Rick and Morty API  </trong></h1>
                <p class="title"> lit elemnt</p>
            </div>
        `;
    } 
}

customElements.define('api-template',ApiTemplate);