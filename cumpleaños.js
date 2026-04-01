let empezar = document.getElementById("empezar")
let intro = document.getElementById("intro")
let seleccion = document.getElementById("seleccion")
let contenido = document.getElementById("contenido")

// Estado inicial
intro.classList.remove("oculto")
seleccion.classList.add("oculto")
contenido.classList.add("oculto")

// BOTÓN START
empezar.addEventListener("click", function() {
    intro.classList.add("oculto")
    seleccion.classList.remove("oculto")
})

// 🔥 VOLVER
function activarVolver() {
    let volver = document.getElementById("volver")

    volver.addEventListener("click", function() {
        contenido.classList.add("oculto")
        seleccion.classList.remove("oculto")
    })
}

// 💌 CARTA
function showCarta() {
    contenido.innerHTML = `
        <button id="volver">⬅ Volver</button>
        <h2>💌 Carta</h2>
        <p>¡Feliz cumpleaños!...</p>
        <p>Jhonatan, esta pagina tomó semanas, te amo mucho, dedico este proyecto tan lindo a ti y a tus 16</p>
    `
    activarVolver()
}

// 📸 GALERÍA
function showGaleria() {
    contenido.innerHTML = `
        <button id="volver">⬅ Volver</button>

        <div class="galeria">
            <button id="prev">⬅️</button>
            <img id="foto" src="" />
            <button id="next">➡️</button>
        </div>
    `

    activarVolver()

    let fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"]

    let index = 0
    let foto = document.getElementById("foto")

    foto.src = fotos[index]

    document.getElementById("prev").addEventListener("click", function() {
        index = (index - 1 + fotos.length) % fotos.length
        foto.src = fotos[index]
    })

    document.getElementById("next").addEventListener("click", function() {
        index = (index + 1) % fotos.length
        foto.src = fotos[index]
    })
}

// 🎵 MÚSICA (CORREGIDO 🔥)
function showPlaylist() {
    contenido.innerHTML = `
        <button id="volver">⬅ Volver</button>

        <div class="playlist">
            <button id="anterior">⬅️</button>
            <audio id="audio"></audio>
            <button id="siguiente">➡️</button>
        </div>

        <div class="controles">
            <button id="play">▶️</button>
            <button id="pause">⏸️</button>
        </div>

        <p id="titulo"></p>
    `

    activarVolver()

    let canciones = ["audio/cancion1.mp3", "audio/cancion2.mp3", "audio/cancion3.mp3"]
    let nombres = ["A world alone ", "WHAT is this ", "Flamingo 🎧"]

    let index = 0
    let audio = document.getElementById("audio")
    let titulo = document.getElementById("titulo")

    function actualizarCancion() {
        audio.src = canciones[index]
        titulo.innerHTML = nombres[index]
    }

    actualizarCancion()

    document.getElementById("anterior").addEventListener("click", function() {
        index = (index - 1 + canciones.length) % canciones.length
        actualizarCancion()
    })

    document.getElementById("siguiente").addEventListener("click", function() {
        index = (index + 1) % canciones.length
        actualizarCancion()
    })

    document.getElementById("play").addEventListener("click", function() {
        audio.play()
    })

    document.getElementById("pause").addEventListener("click", function() {
        audio.pause()
    })
}

// 🎮 PERSONAJES
let personajes = document.querySelectorAll(".personaje")

personajes.forEach(function(p) {
    p.addEventListener("click", function() {

        let opcion = p.dataset.opcion

        seleccion.classList.add("oculto")
        contenido.classList.remove("oculto")

        if (opcion === "carta") {
            showCarta()
        } else if (opcion === "fotos") {
            showGaleria()
        } else if (opcion === "musica") {
            showPlaylist()
        }

    })
})
