// Cartas
let cards1 = [
    "🚀","🛰️","👽","🛸","🪂","🌌","⭐","🌑","🔭","👩‍🚀","☄️","👾"
]

let cards2 = [
    "🚀","🛰️","👽","🛸","🪂","🌌","⭐","🌑","🔭","👩‍🚀","☄️","👾"
]

let todas_las_tarjetas = cards1.concat(cards2);
// Elemento HTML

function repartir_cartas (){

    let tablero = document.querySelector("#root");
    
    todas_las_tarjetas.forEach((cada_carta) => {
        let carta = document.createElement('div');
        carta.classList.add("carta_tracera")
        carta.innerHTML =`<div class="carta"> ${cada_carta} </div>`;

        tablero.appendChild(carta);
    });
}

repartir_cartas();



