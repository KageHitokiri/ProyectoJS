window.onload = function(){  
    var logBtn = document.getElementById('botonLog');
    var desacBtn = document.getElementById("botonDesactiva");
    var registroBtn = document.getElementById("crear");
    var user = document.getElementById("username");

    logBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        activa();
    })
    
    desacBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        desactiva();
    })
    
    registroBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        registro();
    })
    
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