export function stripRed(rgb) {
  // TODO: set the red value in the rgb array to 0
  // e.g. [10, 105, 39] => [0, 105, 39]
  rgb[0] = 0
  return rgb
}

export function stripGreen(rgb) {
  // TODO: set the green value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 0, 39]
  rgb[1] = 0
  return rgb
}

export function stripBlue(rgb) {
  // TODO: set the blue value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 105, 0]
  rgb [2] = 0
  return rgb
}

export function invert(rgb) {
  
  return rgb.map(value => 255 - value ) ;
  // TODO: set each value in the array to (255 - value)
  // e.g. [50, 100, 210] => [205, 155, 45]
}

export function grayScale(rgb) {
const average = rgb.reduce((sum, value) => sum + value, 0) / rgb.length ;
//so the sum of the values for rgb divided by the legnth of RGB this is now defined as a 
//constant called average and is returned in the map funtion that creates a new array () will call the function 
//average 
  return rgb.map(() => average ) ;
  // TODO: set each value of the rgb array to the average
  // e.g. [4, 5, 12] => [7, 7, 7] DONE 
  
}

export function blackAndWhite(rgb) {
  const average = rgb.reduce ((sum, value) => sum + value, 0) / rgb.length ;
 //sum as above the avarage the values 
  if (average < 255 / 2)  {
    //as you would assume the "if" says if the constant is less than 255 / 2 
  return rgb.map(() => 0 ) ;
//retun the array with value 0 
 } else {
//else is if it's not samller than 255/2 then
  return rgb.map(() => 255 ) ;
// retun all the values to 255
// Rembmer map greates new array and () calls the function 
 }
}
  // TODO: calculate the average of r, g, b
  // if it's smaller than 255/2, set all values to 0
  // otherwise set all values to 255


export function colorChannel(rgb, color) {
  switch (color) { 
   case 'r': return [rgb[0], 0, 0]; // Isolate red channel 
    case 'g': return [0, rgb[1], 0]; // Isolate green channel 
    case 'b': return [0, 0, rgb[2]]; // Isolate blue channel 
    default: return rgb; // If the color is not 'r', 'g', or 'b', return the original array
   }
   // switch statement evaluates an expression and compares its value against multiple possible case values.
  // it saves using if and else in this instance 

//THE MORE LONG HAND WAY IS BLELOW 

//export function colorChannel(rgb, color) { 
//if (color === 'r') { return [rgb[0], 0, 0]; // Isolate red channel
// } else if (color === 'g') { 
//return [0, rgb[1], 0]; // Isolate green channel 
//} else if (color === 'b') { 
 // return [0, 0, rgb[2]]; // Isolate blue channel 
//  } else { return rgb; // If the color is not 'r', 'g', or 'b', return the original array }
  //DONE get the color channel
  // if color is 'r', leave red alone and set green and blue to 0
  // similar for 'g' and 'b'
  // e.g. [107, 43, 198], 'g' => [0, 43, 0]
}

export function sepia(rgb) {
  //Need to define the constants, REMEMBER to put your ; to mark the end of a statment 
  const r = rgb [0] ;
  const g = rgb [1] ;
  const b = rgb [2] ;

  let newRed = (r * 0.393) + (g * 0.769) + (b * 0.189);
  let newGreen = (r * 0.349) + (g * 0.686) + (b * 0.168);
  let newBlue = (r * 0.272) + (g * 0.534) + (b * 0.131);

  if (newRed > 255) { 
    newRed = 255; 
  } 
  if (newGreen > 255) {
    newGreen = 255;
  }
  if  (newBlue > 255) {
    newblue = 255;
  }

return [newRed, newGreen, newBlue]
}

export function adjustBrightness(rgb, brightness) {
  
  let newRed = rgb [0] + brightness ;
  let newGreen = rgb [1] + brightness ;
  let newBlue = rgb [2] + brightness ;

  if (newRed >= 255) newRed = 255; 
  
  if (newGreen >= 255) newGreen = 255;
  
  if  (newBlue >= 255) newBlue = 255;

  if (newRed <= 0) newRed = 0; 
  
  if (newGreen <= 0) newGreen = 0;
  
  if  (newBlue <= 0) newBlue = 0;

return [newRed, newGreen, newBlue] ;
  // TODO: add the value of 'brightness' to every element in rgb
  // but make sure the value stays between 0 and 255!
}
