// document.getElementById('fone').addEventListener('input', function (evento){
//     let input = evento.target;
//     let valor = input.value.replace(/\D/g, '')

//     if (valor.length > 2) {
//         // Formatação: (XX) 9-XXXX-XXXX
//         let novoValor = '(' + valor.substring(0, 2) + ') ' + valor[2] + '-'
//                         + valor.substring(3, 7) + '-' + valor.substring(7, 11);
//         input.value = novoValor;
//     }
// } )

const formulario = document.getElementById('formulario');
let textarea = document.getElementById('text-area');

window.addEventListener('load', () => {
    formulario.reset();
    textarea.reset();
})

document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("myHeader");
    var isScrolling;
  
    window.addEventListener("scroll", function() {
      header.style.opacity = "0";
      clearTimeout(isScrolling);
  
      isScrolling = setTimeout(function() {
        header.style.backgroundColor = "#232b7c";
        header.style.opacity = "1";
      }, 300);  // Ajuste esse valor conforme necessário
    });
  });
  


  