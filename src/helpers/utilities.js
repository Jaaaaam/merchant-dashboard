export const camelCaseToNormalString = (str) => {
  const result = str.replace( /([A-Z])/g, " $1" );
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

export const pathnameToString = (str) => {
  const arr = str.split('');
  arr.splice(0, 1)
  arr[0] = arr[0].toUpperCase();

  return arr.join('');
}