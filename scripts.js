const botaoabrir=document.querySelector("header > button")
const botaofechar=document.querySelector("header nav button")
const body = document.querySelector("body")
const nav = document.querySelector("header.mobile nav")

console.log(body)

botaoabrir.addEventListener('click', abrirmenu)
botaoabrir.addEventListener('click', fecharmenu)

function abrirmenu(){
body.classList.add("escurecer")
body.classList.add("abrir")

}
function fecharmenu(){
    body.classList.remove("escurecer")
    body.classList.remove("abrir")
    
    }
    
