var hamb = document.getElementById('hamb')
var menuzinho = document.getElementById('menu-aparece')
var teste = true
var test = document.getElementById("seta")

function abrir() {

    if(teste == true){
        menuzinho.style.height='184px'
        menuzinho.style.transition='0.5s'
        hamb.src = "img/closeicon.svg"
        teste = false
    }else{
        menuzinho.style.height='0px'
        menuzinho.style.transition='0.5s'
        hamb.src = "img/menuhamb.svg"
        teste = true
    }
}

function animation(){
        test.style.animation="pulo .5s"    
}

