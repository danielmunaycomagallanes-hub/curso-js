// Crear un objeto que almacene datos de una mascota
//Desestructurar utilizando un minimo de 4 variables
//Mostrar en consola.

const mascota = {
  nombre : "max",
  apodo : "pitbull",
  raza : "husky",
  edad : 5,
  peso : 7,
  pelaje : ["negro", "blanco", "marron"]
}

const {nombre, apodo, pelaje} = mascota

console.log(nombre,apodo, pelaje)