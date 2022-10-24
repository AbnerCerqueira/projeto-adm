var hamb = document.getElementById('hamb')
var menuzinho = document.getElementById('menu-aparece')
var teste = true

function abrir() {

    if(teste == true){
        menuzinho.style.height='100px'
        menuzinho.style.transition='0.5s'
        teste = false
    }else{
        menuzinho.style.height='0px'
        menuzinho.style.transition='0.5s'
        teste = true
    }
    
    
}