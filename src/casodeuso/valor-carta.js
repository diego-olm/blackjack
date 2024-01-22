/**
 * obtener valor de la carta
 * @param {string} carta valor de la carta ejemplo: 2C
 * @returns {number} valor de la carta
 */

export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
