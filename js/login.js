
window.onload = function(){

    var logBtn = document.getElementById('botonLog');
    logBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        activa();
    })

    var desacBtn = document.getElementById("botonDesactiva");
    desacBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        desactiva();
    })

    var registroBtn = document.getElementById("crear");
    registroBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        registro();
    })

    var user = document.getElementById("username");
    user.addEventListener("click", ()=>{
        e.preventDefault();
        usuario();
    })

}

function activa(){

    document.getElementById("login").style.display = "block";

}

function desactiva(){

    document.getElementById("login").style.display = "none";

}

function registro(){
    
    document.getElementById("registro").style.display ="block";

    document.getElementById("login").style.display = "none";

}

function usuario(event){

    if(document.getElementById("username") == ""){

        alert("El campo usuario no puede estar vacio");

        event.preventDefault();
    }

}