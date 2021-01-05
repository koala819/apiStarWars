let lengthTable;
class StarWarsWidgetElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    
    this.shadowRoot.innerHTML = `
    <div>Characteres</div>
    <h3>
        <span id="charactere">Jean</span>
    </h3>
    `
    }

    fetchAPIData() {
        fetch(`https://miadil.github.io/starwars-api/api/all.json`)
            .then (res => res.json())
            .then (res => {
                lengthTable = res.length;
                console.log("ma longueur :: " + lengthTable)
                this._charactere = [];
                this._charactere.lenght = res.length;
                for (let i=0; i<res.length; i++) {
                    //console.log(res[i].name)
                    this._charactere[i]=res[i].name
                }
                this.render()
            })
    }

    connectedCallback() {
        this.fetchAPIData();
    }

    render() {
        for (let i=0; i<lengthTable; i++) {
            this.shadowRoot.querySelector('h3 #charactere').innerHTML += this._charactere[i] + "<br />"
        }

    }

}

window.customElements.define('starwars-widget', StarWarsWidgetElement)