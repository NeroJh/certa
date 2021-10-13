var comuna1 = new Array ("La Serena", "Vicuña");
var comuna2 = new Array("Viña del Mar", "Quintero");

function cambia(){

        var region = document.formulario.region[document.formulario.region.selectedIndex].value;
        var i;

        if(region!=0){
            mis_opc = eval("comuna"+region);
            num_opc = mis_opc.length;
            document.formulario.comuna.length = num_opc;

            for(i=0 ; i< num_opc ; i++){
                document.formulario.comuna.options[i].value=mis_opc[i];
                document.formulario.comuna.options[i].text=mis_opc[i];
            }
        }
        else{
            document.formulario.comuna.length = 1;
            document.formulario.comuna.options[0].value= "-";
            document.formulario.comuna.options[0].text= "-";
        }

        document.formulario.comuna.options[0].selected = true;
}

define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    var formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
    });
    var listaClientes;
    var mostrarClientes = function () {
        $('#tablaClientes > tbody').empty();
        listaClientes.forEach(function (cliente, index) {
            var imgGenero = '';
            if (cliente.genero == 'hombre')
                imgGenero = 'hombre';
            if (cliente.genero == 'mujer')
                imgGenero = 'mujer';
            $('#tablaClientes tbody').append("\n            <tr>\n                <th><img id=\"genero\" src=\"./img/" + imgGenero + ".jpg\"/></th>\n                <th>" + (index + 1) + "</th>\n                <td>" + cliente.nombre + "</td>\n                <td>" + cliente.region + "</td>\n                <td>" + cliente.comuna + "</td>\n                <td>" + cliente.habilidades + "</td>\n                <td><button id=\"eliminar\"><span class=\"material-icons>delete</span></td>\n            </tr>\n        ");
        });
    };
    //let region:any=document.getElementById("region");
    //region.addEventListener("change", function(
    //));
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
});
