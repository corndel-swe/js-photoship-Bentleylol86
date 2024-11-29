// https://swe-docs.netlify.app/js/array-push-pop.html

/**
 * Given an array, take the last element and put it on the front
 *
 * e.g. ['x', 'y', 'z'] => ['z', 'x', 'y']
 *
 * @param {Array} arr - The input array
 * @returns {Array} The array with the last element at the front
 */
export function arrayRotate(arr) {
   if (arr.length === 0) { return arr; // Handle empty array case 
    } const lastElement = arr.pop(); // Remove the last element 
    arr.unshift(lastElement); // Add the last element to the front 
    return arr; 
  // Return the modified array
  // TODO
}
