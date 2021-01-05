class StarWarsWidgetElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    
    this.shadowRoot.innerHTML = `
    <h1>Hello World</h1>
    `
    }

    fetchAPIData() {

    }

    connectedCallback() {

    }

    render() {
        
    }

}

window.customElements.define('starwars-widget', StarWarsWidgetElement)