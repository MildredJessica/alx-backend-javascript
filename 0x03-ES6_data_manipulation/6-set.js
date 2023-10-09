export default function hasValuesFromArray(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array');
  }  
  const arraySet = new Set(array);
  return arraySet;
}
