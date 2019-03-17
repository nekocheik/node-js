exports.getrandomNumber = (maxValue) => {
  return new Promise(( resolve , reject ) => {
    if (typeof maxValue !== 'number') {
    return reject('retourne un nombre ')
    }
    const result = Math.floor(Math.random() * maxValue );
    resolve(result);
  })
}