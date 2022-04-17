var cantidadTarjetas = 24
var iconos = []
var selecciones = []

generarTablero()

function cargarIconos() {
    iconos = [
            '<img src="img/iconsProducts/agua.png" class="icon" alt="Agua">',
            '<img src="img/iconsProducts/arroz.png" class="icon" alt="Arroz">',
            '<img src="img/iconsProducts/atun.png" class="icon" alt="Atún">',
            '<img src="img/iconsProducts/azucar.png" class="icon" alt="Azúcar">',
            '<img src="img/iconsProducts/candy.png" class="icon" alt="Candy">',
            '<img src="img/iconsProducts/huevos.png" class="icon" alt="Huevos">',
            '<img src="img/iconsProducts/leche.png" class="icon" alt="Leche">',
            '<img src="img/iconsProducts/pan.png" class="icon" alt="Pan">',
            '<img src="img/iconsProducts/sal.png" class="icon" alt="Sal">',
            '<img src="img/iconsProducts/soda.png" class="icon" alt="Soda">',
            '<img src="img/iconsProducts/tomate.png" class="icon" alt="Tomate">',
            '<img src="img/iconsProducts/zanahoria.png" class="icon" alt="Zanahoria">',
        ]
  }

    function generarTablero() {
        cargarIconos()
        selecciones = []
        let tablero = document.getElementById("tablero")
        let tarjetas = []
        for (let i = 0; i < cantidadTarjetas; i++) {
            tarjetas.push(`
            <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera" id="trasera${i}">
                        ${iconos[0]}
                    </div>
                    <div class="cara superior">
                        <img src="img/general/BannerLogin.png" class="icon-back">
                    </div>
                </div>
            </div>
            `)
            if (i % 2 == 1) {
                iconos.splice(0, 1)
            }
        }
        tarjetas.sort(() => Math.random() - 0.5)
        tablero.innerHTML = tarjetas.join(" ")
    }

    function seleccionarTarjeta(i) {
        let tarjeta = document.getElementById("tarjeta" + i)
        if (tarjeta.style.transform != "rotateY(180deg)") {
            tarjeta.style.transform = "rotateY(180deg)"
            selecciones.push(i)
        }
        if (selecciones.length == 2) {
            deseleccionar(selecciones)
            selecciones = []
        }
    }

    function deseleccionar(selecciones) {
        setTimeout(() => {
            let trasera1 = document.getElementById("trasera" + selecciones[0])
            let trasera2 = document.getElementById("trasera" + selecciones[1])
            if (trasera1.innerHTML != trasera2.innerHTML) {
                let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                tarjeta1.style.transform = "rotateY(0deg)"
                tarjeta2.style.transform = "rotateY(0deg)"
            } else {
                trasera1.style.background = "lightgreen"
                trasera2.style.background = "lightgreen"
            }
            if (verificarFin()) {
                swal.fire({
                    title: `El juego ha finalizado`,
                    text: `Felicitaciones`,
                    icon: `success`
                })
            }
        }, 1000);
    }

    function verificarFin() {
        for (let i = 0; i < cantidadTarjetas; i++) {
            let trasera = document.getElementById("trasera" + i)
            if (trasera.style.background != "lightgreen") {
                return false
            }
        }
        return true
    }
