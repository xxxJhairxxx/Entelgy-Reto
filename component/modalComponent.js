class modalComponent extends HTMLElement{
    
    constructor(){
        super();

        this.imagen; 
        this.name;
        this.name;
    }
    
     static get observedAttributes(){
        return ['imagen','name','email'];
     }

     attributeChangedCallback(nameAtr,oldValue,newValue){
        switch(nameAtr){
            case 'imagen': this.imagen = newValue;
                break;
            case 'name': this.name = newValue;
                break;
            case 'email': this.email = newValue;
                break;
        }
     }

    connectedCallback(){
        this.innerHTML=`<div id="ventanaModal" onclick="modalclose()" class="modal">
                            <div class="contenido-modal">

                                <div class="ventanaModal__img">
                                    <img src="${this.imagen}" alt="" class="imgzoom">
                                </div>

                                <p class="contenido-modal__name">${this.name}</p>
                                <p class="contenido-modal__email">${this.email}</p>
                                
                            </div>
                        </div> `;
    }
    
}


window.customElements.define("modal-com",modalComponent);