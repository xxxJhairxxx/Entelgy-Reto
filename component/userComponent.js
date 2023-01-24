class userComponent extends HTMLElement{
    constructor(){
        super();
        this.firstname;
        this.lastname;
        this.email;
        this.avatar;
        this.idUser;
    }

    static get observedAttributes(){
        return ['firstname','lastname','email','avatar','idUser'];
    }

    attributeChangedCallback(nameAtr,oldValue,newValue){
        switch(nameAtr){
            case 'firstname': this.firstname=newValue;
                break;
            case 'lastname': this.lastname=newValue;
                break;
            case 'email': this.email=newValue;
                break;
            case 'avatar': this.avatar=newValue;
            break;
            case 'idUser': this.idUser=newValue;
            break;
        }
    }

    connectedCallback(){
            
        this.innerHTML=`<div class="user">
                            <div class="user__img">
                                <img src="${this.avatar}" alt="" class="user__avatar" onclick="modalopen('${this.avatar}','${this.firstname} ${this.lastname}','${this.email}')">
                            </div>

                            <div class="user__datos">
                                <p class="name">${this.firstname} ${this.lastname}</p>
                                <p class="email"> ${this.email}</p>
                            </div>
                        </div>`;
        //this.style.color = "";
    }
}

window.customElements.define("user-card",userComponent);