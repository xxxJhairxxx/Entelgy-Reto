const cargarUsuariosAPI = async() => {
    const fragment =document.createDocumentFragment();
    const respuest = await fetch('https://reqres.in/api/users?page=1');
    const respuest2 = await fetch('https://reqres.in/api/users?page=2');
    
    let datos = await respuest2.json();
    let datos2 = await respuest.json();

   datos.data = datos2.data.concat(datos.data);
   localStorage.setItem('ListUsers',JSON.stringify(datos.data));
   

   datos.data.forEach(element => {
    let userCard = document.createElement("user-card");
    userCard.setAttribute('firstname',element.first_name);
    userCard.setAttribute('lastname',element.last_name);
    userCard.setAttribute('email',element.email);
    userCard.setAttribute('avatar',element.avatar);
   fragment.appendChild(userCard);
   });

   document.querySelector('.root').appendChild(fragment);
}

const cargarUsuariosLocalStore = () => {
    
    const fragment =document.createDocumentFragment();

    const data = JSON.parse(localStorage.getItem('ListUsers'));
    data.forEach(element => {
        let userCard = document.createElement("user-card");
        userCard.setAttribute('firstname',element.first_name);
        userCard.setAttribute('lastname',element.last_name);
        userCard.setAttribute('email',element.email);
        userCard.setAttribute('avatar',element.avatar);
        fragment.appendChild(userCard);
    });
 
    document.querySelector('.root').appendChild(fragment);
}


const ComprobarLocalStore = () =>{
    if(localStorage.getItem('ListUsers')){
        cargarUsuariosLocalStore();
    }else{
        cargarUsuariosAPI();
    }
}


ComprobarLocalStore();


// Ventana modal

// Cuando el usuario hace click en el botón, se abre la ventana

function modalopen(imagen,name,email){

    const cargarModal= document.createElement("modal-com");
    cargarModal.setAttribute('imagen',imagen);
    cargarModal.setAttribute('name',name);
    cargarModal.setAttribute('email',email);

    document.querySelector('#root').parentElement.appendChild(cargarModal);
    document.querySelector("#ventanaModal").style.display = "block";
}

// Si el usuario hace click en la x, la ventana se cierra
function modalclose(){
    document.querySelector("#ventanaModal").style.display = "none";
    const cargarModal = document.querySelector('modal-com'); 
    cargarModal.remove();
    
}