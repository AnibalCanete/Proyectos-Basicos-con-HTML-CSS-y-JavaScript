
(function() {
    // Elementos - Elements
    const listaDeElementos = document.querySelectorAll(".menu-item-mostrar");
    const lista = document.querySelector(".menu-enlaces");
    const menu = document.querySelector(".menu-hamburguesa");

    const agregarClick = () => {
        listaDeElementos.forEach(elemento => {
            elemento.addEventListener("click", () => {
                let subMenu = elemento.children[1];
                let altura = 0;
                elemento.classList.toggle("menu-item-activo");
                if (subMenu.clientHeight === 0) {
                    altura = subMenu.scrollHeight;
                }
                subMenu.style.height = `${altura}px`;
            });
        });
    }

    const eliminarEstiloAltura = () => {
        listaDeElementos.forEach(elemento => {
            if (elemento.children[1].getAttribute("style")) {
                elemento.children[1].removeAttribute("style");
                elemento.classList.remove("menu-item-activo");
            }
        });
    }

    window.addEventListener("resize", () => {
        if (menu.innerWidth > 800) {
            eliminarEstiloAltura();
            if (lista.classList.contains("menu-enlaces-mostrar")) lista.classList.remove("menu-enlaces-mostrar");
        } else {
            agregarClick();
        }
    });

    if (window.innerWidth <= 800) {
        agregarClick();
    }

    menu.addEventListener("click", () => lista.classList.toggle("menu-enlaces-mostrar"));

})();
