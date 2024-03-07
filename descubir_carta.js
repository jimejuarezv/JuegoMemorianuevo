// Selecciona todos los elementos HTML con la clase "carta_tracera" y los almacena en la variable todas_las_cartas
let todas_las_cartas = document.querySelectorAll(".carta_tracera");

// Itera sobre cada elemento seleccionado
todas_las_cartas.forEach((cada_div) => {
    // Agrega un event listener para el evento 'click' a cada elemento
    cada_div.addEventListener("click", () => {
        
        // Selecciona todos los elementos con la clase "activar" y los almacena en cantidad_descubiertas
        let cantidad_descubiertas = document.querySelectorAll(".activar");
        // Calcula el número total de elementos con la clase "activar"
        total_descubiertas = cantidad_descubiertas.length;
        
        // Verifica si hay menos de 2 elementos con la clase "activar"
        if (total_descubiertas < 2) {
            // Agrega la clase "activar" al elemento que ha sido clicado
            cada_div.classList.add("activar");
            // Actualiza la lista de elementos con la clase "activar"
            cantidad_descubiertas = document.querySelectorAll(".activar");

            // Verifica si hay exactamente 1 elemento con la clase "activar"
            if (total_descubiertas == 1) {
                // Establece un temporizador para remover la clase "activar" después de 1000 milisegundos (1 segundo)
                setTimeout(() => {
                    // Itera sobre cada elemento con la clase "activar" y remueve la clase
                    cantidad_descubiertas.forEach((cada_carta_descubierta) => {
                        cada_carta_descubierta.classList.remove("activar");
                    });
                }, 1000);
            }
        }
    });
});

    
