// Varia
var x;
var delay = 1000;
var container0 = document.getElementById("iniciarJuego");
var container1 = document.getElementById("iniciarContainer");
var container2 = document.querySelector(".juego");
var container3 = document.querySelectorAll(".numResultado1");
var container4 = document.querySelectorAll(".numeros");
var container5 = document.querySelector(".enviar");
var container6 = document.querySelector(".resultado");
var container7 = document.querySelector(".ContenedorNumsAleatorios");
var container8 = document.querySelector(".ContenedorRespuestaMostrada");
var container9 = document.getElementById("respuesta");
var container10 = document.querySelector("#respuestaMostrada");
var container11 = document.querySelector(".responder");
var container12 = document.querySelector("#nums").value;
var container13 = document.querySelectorAll(".good");

// Funciones

function SN() { //separar nums
  let TN = [];
  container12 = container12.split("/"); //Separa la hidden imput cuando encuentra una /
  container12.pop();
  for (let i = 0; i <= container12.length - 1; i++) {
    TN.push(container12[i].split(","));
  }
  return TN;
}

function MN() { //mostrar numeros
  let i = -1;
  if (x == 8) {
    container6.style.display = "flex";
    container2.style.display = "none";
    container11.setAttribute("respondiendo", "false");
    RC();
  } else {
    container7.style.display = "flex";
    container8.style.display = "none";
    container11.style.display = "none";
    container9.innerHTML = "";
    container10.innerHTML = ".";
    var interval = setInterval(() => {
      i++;
      container10.innerHTML = container12[x][i];
      if (i >= container12[x].length) {
        container7.style.display = "none";
        container8.style.display = "flex";
        container11.style.display = "grid";
        clearInterval(interval);
        interval = null;
      }
    }, delay);

    if (x != 8) {
      x++;
    }
  }
}
function CR() { //Comprobar respuesta
  let n2 = container12[x].toString();
  n2 = n2.replaceAll(",", " ") + " ";
  if (n2 == container9.innerHTML) {
    if (x === 0) {
      container13[x].setAttribute("acertado", "true");
      container13[x + 1].setAttribute("acertado", "true");
    } else {
      container13[x + 1].setAttribute("acertado", "true");
    }
    MN(); // llama a la funcion mostrar nums
  } else {
    RC();
    container6.style.display = "flex";
    container2.style.display = "none";
  }
}

function E() {
  container4.forEach((e) => {
    e.addEventListener("click", () => {
      let ns = e.innerHTML;
      container9.innerHTML += ns + " ";
      container5.disabled = "";
    });
  });
  container5.addEventListener("click", () => {
    CR();
  });
}

function RC() { //respuesta correcta
  container13.forEach((e) => {
    if (e.getAttribute("acertado") == "true") {
      e.innerHTML = "acertado";
    }
  });
}

// Inicio

container0.addEventListener("click", () => {
  //Inicia el juego - boton inciar
  container2.style.display = "flex"; //Muestra el juego - donde esta todo
  container1.style.display = "none"; //oculta el contenedor inicial
  container12 = SN(); //guarda y separa con ,
  x = -1;
  E();
  MN(); //muestra los nums
});
