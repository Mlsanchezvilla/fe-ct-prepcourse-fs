/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:


   function Usuario(Usuario, nombre, email, password) {
   
    this.Usuario = Usuario;
    this.nombre = nombre;
    this.email = email; 
    this.password = password;

   }

   Usuario.prototype.saludar=function() {
      return "Hola mi nombre es ${this.nombre}";
   }

}

//para crear la instancia de Usuario:

var Usuario1= new Usuario ("miUsuario", "mi nombre", "mi email","mi contraseña");
console.log(Usuario1.saludar());


function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:

   Usuario.prototype.saludar= function(){
      return "Hello world!";
   }

}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".

   String.prototype.reverse = function () {
      return this.split("").reverse().join("");

   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
