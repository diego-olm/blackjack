import { pedirCarta, valorCarta, crearCartaHTML } from "./";

// turno de la computadora
/**
 *
 * @param {Number} puntosMinimos puntos minimos que necesita la computadora para ganar
 * @param {Array<String>} deck
 * @param {htmlElemento} puntosHTML html para mostrar los puntos
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck
) => {
  if (!puntosMinimos) throw new Error("puntos minimos son necesarios");
  if (!deck) throw new Error("se necesita el deck");
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
