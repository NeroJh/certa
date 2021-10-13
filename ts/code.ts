import jquery = require('jquery');

const $:JQueryStatic=jquery;

let formulario:any=document.getElementById("formulario");

formulario.addEventListener("submit",function(event:any){



    event.preventDefault();

});

interface clientes {
    nombre:string;
    edad:number;
    genero:string;
    fechaNacimiento:string;
    region:string;
    comuna:string;
    direccion:string;
    telefono:string;
    observaciones:string;
    habilidades:string;
}

let listaClientes:any[];

const mostrarClientes = () => {
    $('#tablaClientes > tbody').empty()
    listaClientes.forEach((cliente:clientes, index:number) => {
        let imgGenero:string = ''
        if(cliente.genero == 'hombre')
            imgGenero = 'hombre'
        if(cliente.genero == 'mujer')
            imgGenero = 'mujer'
        
        $('#tablaClientes tbody').append(`
            <tr>
                <th><img id="genero" src="./img/${imgGenero}.jpg"/></th>
                <th>${index +1}</th>
                <td>${cliente.nombre}</td>
                <td>${cliente.region}</td>
                <td>${cliente.comuna}</td>
                <td>${cliente.habilidades}</td>
                <td><button id="eliminar"><span class="material-icons>delete</span></td>
            </tr>
        `)
    })
}

//let region:any=document.getElementById("region");
//region.addEventListener("change", function(

//));

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()