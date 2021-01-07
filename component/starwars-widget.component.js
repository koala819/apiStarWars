class StarWarsWidgetElement extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.lengthTable;
    
    this.shadowRoot.innerHTML = `
        <style>
            img {
                width: 10%;
            }
            .starwars-widget {
                display:flex;
                flex-direction: row-reverse;
            }
        </style>
        <div class="starwars-widget">
        <p>
        <div id="pictureCharactere"></div>
        <span id="charactere"></span>
        </p>
        </div>
        `
    }

    fetchAPIData() {
        fetch(`https://miadil.github.io/starwars-api/api/all.json`)
            .then (res => res.json())
            .then (res => {
                //console.log(res)
                this.lengthTable = res.length;
                //console.log("ma longueur :: " + this.lengthTable)
                this._charactere = [];
                this._pictureCharactere = [];
                for (let i=0; i<res.length; i++) {
                    //console.log(res[i].image)
                    this._charactere[i]=res[i].name
                    this._pictureCharactere[i]=res[i].image
                    //console.log(this._pictureCharactere[i])
                }
                this.render()
            })
    }

    connectedCallback() {
        this.fetchAPIData();
    }

    render() {
        for (let i=0; i<this.lengthTable; i++) {

            this.shadowRoot.getElementById('charactere').innerHTML += `<div><img src="${this._pictureCharactere[i]}"> <br>${this._charactere[i]} </div>`
            
           
        }

    }

}

window.customElements.define('starwars-widget', StarWarsWidgetElement)