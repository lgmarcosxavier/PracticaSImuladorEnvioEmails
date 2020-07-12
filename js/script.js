document.getElementById('correo').addEventListener('change', function(){
    validarEnviar();
})

document.getElementById('asunto').addEventListener('change', function(){
    validarEnviar();
})

document.getElementById('mensaje').addEventListener('change', function(){
    validarEnviar();
})

document.getElementById('boton_enviar').addEventListener('click', function (){
    alert('Enviando mensaje..');
});

function validarEnviar(){
    let correo = document.getElementById('correo').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;

    if ( correo == "" || asunto == "" || mensaje == "" ){
        invalidarSubmit();
    }else{
        document.getElementById('boton_enviar').disabled = false;
        document.getElementById('boton_enviar').classList.remove("invalidar");
    }
    
}

function invalidarSubmit(){
    document.getElementById('boton_enviar').disabled = true;
    document.getElementById('boton_enviar').classList.add("invalidar");
}


// llamamos a la funcion no mas cargar la pagina, para desactivar el submit
invalidarSubmit();