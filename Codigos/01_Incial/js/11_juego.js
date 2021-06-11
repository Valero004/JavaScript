let palos = ["♣", "♠", "♥", "♦"];
let baraja = [];

//1-10 j(11) q(12) k(13)
//TREBOL DIAMANTE CORAZON PICAS
for (let index = 0; index < palos.length; index++) {
  let carta = "";
  for (let index2 = 1; index2 < 14; index2++) {
    if (index == 11) {
      carta = "J" + palos[index];
    } else if (index == 12) {
      carta = "Q" + palos[index];
    } else if (index == 13) {
      carta = "K" + palos[index];
    } else {
      carta = index2 + palos[index];
    }
    baraja.push(carta);
  }
}
console.log(_.shuffle(baraja));
console.log(baraja[Math.round(Math.random()*51)]);
let persona2 = new Persona('Maria','Lopez',20);
console.log(persona2.getNombre);