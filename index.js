const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
app.get("/resultado", (req, res) => {
  res.send();
});
app.set("port", process.env.PORT || 8888);
app.get("/", (req, res) => {
  let numAr = GenerarNumerosAleatorios();
  let numArContainer = "";
  for (x = 0; x < 9; x++) {
    numArContainer += `${numAr[x]}/`;
  }
  // Guarda la array
  // Guarda la array aleatoria y genera una String con cada ciclo de numeros separados por una /
  // para luego guardarlo en un hidden input
  res.send(`<!DOCTYPE html>
  <html lang="en">

<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>TP FINAL: TpN17</title>
   <link rel="stylesheet" href="css/main.css" />
</head>

<body>
   <div id="iniciarContainer" class="container">
       <h3>Van a aparecer en la pantalla una serie de números de manera sucesiva. Debe de marcar en orden los numeros que apareceran en pantalla. </h3>
       <input class="boton" id="iniciarJuego" type="button" value="Iniciar" />
   </div>
   <div class="juego"">
       <div class="ContenedorNumsAleatorios">
       
           <input type="hidden" value="${numArContainer}" id="nums" />
           <label id="respuestaMostrada"></label>
       </div>
       <div>
           <div class="ContenedorRespuestaMostrada">
             <div id="respuesta"></div>
           </div>
           <div class="responder" respondiendo="false">
               <div class="contenedor-grid center c1">
               <a class="numeros">0</a>
               <a class="numeros">1</a>
               <a class="numeros">2</a>
               <a class="numeros">3</a>
               <a class="numeros">4</a>
               <a class="numeros">5</a>
               <a class="numeros">6</a>
               <a class="numeros">7</a>
               <a class="numeros">8</a>
               <a class="numeros">9</a>      
               </div>
               <div class="contenedor center">
                   <input id="boton" disabled="true" type="button" class="boton enviar" value="Enviar" />
               </div>
           </div>
       </div>
   </div>
   <div class="resultado">
       <div class="ResultadosFinales">
           <div class="barraResultado1">
               <div  class="numResultado1">0</div>
               <div class="good" acertado.="false"></div>
               <div  class="numResultado1" >1</div>
               <div class="good" acertado.="false"></div>
               <div  class="numResultado1">2</div>
               <div class="good" acertado.="false"></div>
               <div  class="numResultado1">3</div>
               <div class="good" acertado.="false"></div>
               <div  class="numResultado1">4</div>
               <div class="good" acertado.="false"></div>
               <div  class="numResultado1">5</div>
               <div class="good" acertado.="false"></div>
               <div  class="numResultado1">6</div>
               <div class="good" acertado.="false"></div>
               <div  class="numResultado1">7</div>
               <div class="good" acertado.="false"></div>
               <div  class="numResultado1">8</div>
               <div class="good" acertado.="false"></div>
               <div  class="numResultado1">9</div>
               <div class="good" acertado.="false"></div>
           </div>
           <div class="conclusion">
               <h3>Conclusion</h3>
               <span>Se puede observar que a medida que aumenta la cantidad de dígitos a recordar la tarea resulta más compleja. La cantidad de dígitos que se logró recordar es un indicador de la amplitud de la memoria de trabajo. Los dígitos en orden directo valoran especialmente
               la capacidad de atención inmediata y la vigilancia. Este tipo de atención además de tener capacidad limitada es sensible a las interferencias.</span>
           </div>
           <a id="volver" href="/">Reiniciar
       </a>
       </div>
        
   </div>
</body>
<script src="js/variables.js"></script>
</html>`);
});

app.listen(app.get("port"), () => {
  console.log(`Servidor iniciado en el${app.get("port")}`);
});
function GenerarNumerosAleatorios() {
  var arrayNumerosAleatorios = [];
  var n = 2;
  for (var i = 0; i < 9; i++) {
    var numerosAleatorios = [];
    for (var x = 0; x < n; x++) {
      var numAleatorio = Math.round(Math.random() * 9);
      if (numerosAleatorios.includes(numAleatorio) == false) {
        numerosAleatorios.push(numAleatorio);
      } else {
        x--;
      }
    }
    if (n <= 9) {
      n++;
    }
    arrayNumerosAleatorios.push(numerosAleatorios);
  }
  console.log(arrayNumerosAleatorios);
  return arrayNumerosAleatorios;
}
