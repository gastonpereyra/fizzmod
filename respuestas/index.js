/**
 * 3) Crear una función que reemplace de manera provisoria la funcionalidad obtenia por el método map() del prototipo de Array que pueda pasar los siguientes tests :
*/

let numeros = [1,2,3,4]
//mapCustomizado => representa la funcion que ustedes tendrían que crear

// Respuesta
const mapCustomizado = function (items,func) {
    let itemsProv= []; // array provisorio
    // Recorre el array
    for(let i=0; i<items.length;i++) {
      // inserto en el array provisorio el objeto evaultado por la función
      // como pasa con .map() agrego indice y el array original a la función
      itemsProv.push(func(items[i],i,items));
    }
    // devuelve el array con los nuevos valores.
    return itemsProv;
  }

mapCustomizado(numeros,numero=>numero+1) //[2,3,4,5]
mapCustomizado(numeros,(numero,indice)=>numero+indice) //[1,3,5,7]
mapCustomizado(numeros,numero=>{}) //[undefined,undefined,undefined,undefined]

/**
 * 4) Modificar el prototipo de la funcion constructora Array para que admita como nuevo método la funcion customizada del paso anterior para que cumpla los siguientes tests :
 */
 
 // Respuesta

if (!Array.prototype.mapCustomizado) { //Si el prototipo de Array no tiene la propiedad agrego
    Array.prototype.mapCustomizado = function (func) {
      let itemProv= []; // array provisorio
      for(let i=0; i<this.length;i++) {
        // inserto en el array provisorio el objeto evaultado por la función
        // como pasa con .map() agrego indice y el array original a la función
        itemProv.push(func(this[i],i,this));
      }
      // devuelve el array con los nuevos valores.
      return itemProv;
    }
   }
   
  numeros.mapCustomizado(numero=>numero+1) //[2,3,4,5]
  numeros.mapCustomizado((numero,indice)=>numero+indice) //[1,3,5,7]
  numeros.mapCustomizado(numero=>{}) //[undefined,undefined,undefined,undefined]
  numeros.hasOwnProperty("mapCustomizado") //false
  "mapCustomizado" in numeros //true
  
  /**
 * 5) Los miembros de trabajo especificados en el siguiente objeto usan su nombre como indice y su edad como valor. Separa los miembros mayores de 40 años y menores de 25 años en un array y todo el resto en un segundo array. Ambos arrays tienen que estar compuestos únicamente por los nombres de las personas. Por último cada array tiene que estar ordenado alfabeticamente.
 */

let miembros = { pedro : 35 , ana : 18 , carlos : 43 , juan : 21 , maria : 29 , angela : 31 , jose : 23 , mariana : 41 , eugenio : 19 }

// Respuesta
// Creo los 2 array
let nombresFiltrados = [],
    nombresResto = [];

// Recorre el Objeto
for ( let miembro in miembros) { // miembro = nombre (key)
  
  if (miembros[miembro] > 40 || miembros[miembro] < 25)  // miembros[miembro] = valor
    // Si cumple con las condiciones pedidas agrego al filtrado
    nombresFiltrados.push(miembro); 
  else
    // sino agrego al de restos
    nombresResto.push(miembro);
}

// Ordeno los valores alfabeticamente de "A" a "Z"
nombresFiltrados.sort((actual,siguiente) => actual>siguiente);
nombresResto.sort((actual,siguiente) => actual>siguiente);

/**
 * 6) Encontrar todos los errores en el siguiente programa , corregirlo y elevarlo como Push Request al repositorio de origen :
*/

(function(){
    "use strict"

    let x = 1 , arr = [], //falta "," para definir también "y"
    y = 2
    arr.push(x,y)
    let res = arr.map( (n,indice)=>{ // falta agregar "indice" y cambiar "forEach" por "map"
        console.log(`El numero en el indice ${indice} es : ${n}`);
        return n + 1 // agregar "return" y cambiar "res" por "n"
    })
    console.log(res) // [2,3]
})()


/**
 * 7) Crear un modulo .js que contenga una variable llamada base cuyo valor es el número 2 y tres funciones, las cual va a exportar cada vez que se requiera el archivo llamadas multiplicar , cambiarBase y consultarBase. La función multiplicar toma un valor como input de tipo Number o String y lo multiplica por el valor de la variable base. La función cambiarBase modifica el valor de la variable base el cual se mantiene para las próximas ejecuciones y consultarBase retorna el valor actual de la variable base
 */

// ver modulo.js