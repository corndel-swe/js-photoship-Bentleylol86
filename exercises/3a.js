// https://tech-docs.corndel.com/js/string-formatting.html

/**
 * Outputs a string saying "Hello, my name is NAME!" with
 * the name in uppercase.
 *
 * e.g. ("Abdi") => "Hello, my name is ABDI!"
 *
 * @param {string} Lauire - The name
 * @returns {string} The greeting string with uppercase name interpolated
 */
export function nameTag(Lauire) {
  return "Hello, my name is " + Lauire.toUpperCase() + "!"; // dont forget the () call the touppercase method
  
}
