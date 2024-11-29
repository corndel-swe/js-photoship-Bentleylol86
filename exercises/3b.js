// https://tech-docs.corndel.com/js/string-formatting.html

/**
 * Formats the amount as a price, with the given currency symbol at the front
 *
 * e.g. (2.5, '$') => '$2.50'
 * e.g. (12.83795, '£') => '£12.84'
 *
 * @param {number} amount - The amount of money
 * @param {string} currency - The currency symbol
 * @returns {string} currency The formatted number
 */
export function formatPrice(amount, currency) {
  const NewAmountto2DP = amount.toFixed(2); // Return the formatted price with the currency symbol 
  // the toFixed is requesting the ammount of DP's this is a constant thing to to 
  //once it has done this you will return this ammount with a currency symbol on it the formattedAmount is
  //the new amount to 2dp 
  //also when you change the const name at the top it will gray out the text as the assosiated in other lines 
  //are now not functioning 
  return `${currency}${NewAmountto2DP}` ;

  
  
}
