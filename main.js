let pantalla = document.getElementById ("pantallalucha")

let pokemonneme = document.getElementById ("pokemonenemigo")

let pokemonami = document.getElementById ("pokemonnuestro")

let escudo = document.getElementById ("escudo4")

let charmander={
    nombre:"charmander",
    vida:100
}
let gengar={
    nombre:"gengar",
    vida:100
}


let saludcharmander=document.getElementById("saludcharmander") 
let saludgengar=document.getElementById("saludgengar")

let dialogo = document.getElementById("dialogo")

saludcharmander.textContent=charmander.vida
saludgengar.textContent=gengar.vida

function contraAtaque(){
    pokemonneme.classList.add("contraAtaque")
    pokemonami.classList.add("daño")
    gengar.vida=gengar.vida-13
    dialogo.textContent="charmander ha utilizado fuego eterno"
    setTimeout(
        function (){
            pokemonneme.classList.remove("contraAtaque")
            pokemonami.classList.remove("daño")
        },1800
    )
    if(gengar.vida<1){
        dialogo.textContent="gengar se ha debilitado"
        saludgengar.textContent=0
    }
    else{
        saludgengar.textContent=gengar.vida
    }

    
}

function habilidad(m){
    if(m==1){
        pokemonami.classList.add("animacion1")
        pokemonneme.classList.add("daño")
        pantalla.style.background="gray"
        charmander.vida=charmander.vida-13
        dialogo.textContent="gengar ha utilizado ataque espectral"
        setTimeout(
            function (){
                pokemonami.classList.remove("animacion1")
                pokemonneme.classList.remove("daño")
                pantalla.style.background="none"
            },1500
        )
            
        
    }
    else if(m==2){
        pokemonami.classList.add("animacion2")
        pokemonneme.classList.add("daño")
        charmander.vida=charmander.vida-10
        dialogo.textContent="gengar ha utilizado giro de la muerte"
        setTimeout(
            function (){
                pokemonami.classList.remove("animacion2")
                pokemonneme.classList.remove("daño")
            },1500
        )
    }
    else if(m==3){
        pokemonami.classList.add("animacion3")
        pokemonneme.classList.add("daño")
        charmander.vida=charmander.vida-12
        dialogo.textContent="gengar ha utilizado control mental"
        setTimeout(
            function (){
                pokemonami.classList.remove("animacion3")
                pokemonneme.classList.remove("daño")
            },1500
        )
    }
    else{
        pokemonami.classList.add("animacion4")
        pokemonneme.classList.add("daño")
        escudo.classList.add("escudo2")
        charmander.vida=charmander.vida-1
        dialogo.textContent="gengar ha utilizado escudo"
        setTimeout(
            function (){
                pokemonami.classList.remove("animacion4")
                pokemonneme.classList.remove("daño")
                escudo.classList.remove("escudo2")
            },1500
        )
    }
    if(charmander.vida<1){
        saludcharmander.textContent=0
        dialogo.textContent="charmander se ha debilitado"

    }
    else{
        saludcharmander.textContent=charmander.vida
    }
    setTimeout(
        function (){
            contraAtaque()
        },1800
    )
    

    
}










