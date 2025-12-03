
(function() {
    const deslizadores = [...document.querySelectorAll(".deslizador-cuerpo")];
    const flechaSiguiente = document.querySelector("#siguiente");
    const flechaAntes = document.querySelector("#antes");
    let valor;

    flechaSiguiente.addEventListener("click", () => cambiarPosicion(1));

    flechaAntes.addEventListener("click", () => cambiarPosicion(-1));

    function cambiarPosicion(cambiar) {
        const elementoActual = Number(document.querySelector(".deslizador-cuerpo-mostrar").dataset.id);
        valor = elementoActual;
        valor += cambiar;

        console.log(deslizadores.length);
        if (valor === 0 || valor == deslizadores.length + 1) {
            valor = valor === 0 ? deslizadores.length : 1;
        }

        deslizadores[elementoActual - 1].classList.toggle("deslizador-cuerpo-mostrar");
        deslizadores[valor - 1].classList.toggle("deslizador-cuerpo-mostrar");

    }
})();
