let botoes=document.querySelectorAll(".categorias button");

botoes.forEach(botao=>{

botao.addEventListener("click",()=>{

document.querySelector(".ativo")
.classList.remove("ativo");

botao.classList.add("ativo");

});

});