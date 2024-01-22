import _ from "underscore";

/**
 *
 * @param {Array<String>} tipos ejemplo ['C','D','H','S']
 * @param {Array<String>} especiales ejemplo ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck
 */
export const crearDeck = (tipos, especiales) => {
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};
