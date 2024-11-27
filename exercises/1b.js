// https://tech-docs.corndel.com/js/array-slice.html

/**
 * Returns the middle elements of the array, without the first and last
 * elements.
 *
 * e.g. [4, 6, 1, 7, 9] => [6, 1, 7]
 *
 * @param {Array} arr - The array to process
 * @returns {Array} The array containing only the middle elements
 */
export function getMiddle(arr) {
  if (arr.length <= 2)  {
    return [] ; //cant have a value as should retun and empty tray for 2 or less elements 
  }
return arr.slice (1, - 1) ; // dont forget the commas 
  // TODO
}
