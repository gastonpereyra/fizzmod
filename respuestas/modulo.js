/**
 * 7) Crear un modulo .js que contenga una variable llamada base cuyo valor es el número 2 y tres funciones, las cual va a exportar cada vez que se requiera el archivo llamadas multiplicar , cambiarBase y consultarBase. La función multiplicar toma un valor como input de tipo Number o String y lo multiplica por el valor de la variable base. La función cambiarBase modifica el valor de la variable base el cual se mantiene para las próximas ejecuciones y consultarBase retorna el valor actual de la variable base
 */


module.exports ={ 
    // base
    base: 2, 
    // funciones
    multiplicar: function(num) {
      const tipo= typeof num;
      if (tipo === 'Number' || tipo === 'String') // chequeo de tipo
        return num*this.base; // retorna la operación matematica
    },
    cambiarBase: function(nuevaBase) {
      const tipo= typeof num;
      if (tipo === 'Number' || tipo === 'String') // chequeo de tipo
        this.base= nuevaBase; // cambia la base
    }, 
    consultarBase: function() {
      return this.base; // devuelve la base
    }
  };