const filtroElemento = document.querySelector('header input');
const cartoes = document.querySelectorAll('.cards li');

filtroElemento.addEventListener('input', filtrarCartoes);

function filtrarCartoes() {
  if(filtroElemento.value != ''){
    for (let cartao of cartoes){
      let titulo = cartao.querySelector('h2');
      titulo = titulo.textContent.toLowerCase();
      let filtroTexto = filtroElemento.value.toLowerCase();
      if(!titulo.includes(filtroTexto)){
        cartao.style.display = "none";
      }else{
        cartao.style.display = "block";
      }

    }
  }else{
    for (let cartao of cartoes){
      cartao.style.display = "block";
    }
  }

}