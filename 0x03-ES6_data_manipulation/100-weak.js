export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let numOfQueries = 0;
  if (weakMap.get(endpoint) numofQueries = weakMap.get(endpoint);
  weakMap.set(endpoint, numOfQueries + 1);
  if (numofQueries + 1 >= 5) throw new Error('Endpoint load is high');
}
