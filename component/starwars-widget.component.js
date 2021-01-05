class StarWarsWidgetElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    
    this.shadowRoot.innerHTML = `
    <div>Characteres</div>
    `
    }

    fetchAPIData() {
        fetch(`https://miadil.github.io/starwars-api/api/all.json`)
            .then (res => res.json())
            .then (res =>
                console.log(res)
                )
    }

    connectedCallback() {
        this.fetchAPIData();
    }

    render() {

    }

}

window.customElements.define('starwars-widget', StarWarsWidgetElement)