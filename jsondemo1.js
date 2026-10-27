//se requieren tenga las claves :
//2 cadenas
//2 numérico (entero, decimal)
//1 null
//1 lógica (false / true)
//1 array (cadenas)
//1 array (objetos)
//1 objeto (arrays)


const pelicula = {
  titulo: "Avengers I",
  sinopsis: "Los vengadores se unen para derrotar a Loki",
  presupuesto: 220000000,
  recaudacion: 1520000000,
  paisBetado: null,
  reEstreno: false,
  idiomas: ["Español", "Inglés", "Portugués", "Chino", "Italiano"],
  elenco: [
    { actor: "Robert Downey Jr", personaje: "Iron Man", rol: "Protagonista" },
    { actor: "Chris Evans", personaje: "Capitán América", rol: "Protagonista" },
  { actor: "Tom Hiddleston", personaje: "Loki", rol: "Antagonista" }
  ],
  mcu: {
  peliculas: ["Capitán América", "Avengers I", "Iron Man 3"],
  series: ["Wanda Vision", "Moon Knight", "Secret Invasion"]
}
}
//¿Cual es el ultimo elemento de IDIOMAS?
console.log(pelicula.idiomas[pelicula.idiomas.length - 1])//Italiano

//¿Cual es el personaje del primer actor?
console.log(pelicula.elenco[0].personaje)//Iron man

//¿cual es el rol del ultimo actor de la lista?
console.log(pelicula.elenco[pelicula.elenco.length - 1].rol) //Antagonista

//mostrar todas las series del MCU
const series= pelicula.mcu.series
series.forEach(serie => {
  console.log(serie)
});