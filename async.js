
exports.getrandomName = ( tab , callback ) =>{
  if (typeof tab !== 'object' ) {
    return callback(
      console.log('veuillez entré un nombre')
    );
  }
 let i =  Math.floor(Math.random() * tab.length) ;
 let name = tab[i] ;
 setTimeout( () => {
  callback ( null , name)} , 1500
 )
}

































exports.getrandomNumber = (maxValue , callback ) => {
  setTimeout(() => {
    const result = Math.floor(Math.random() * maxValue)
    callback(null , result);
    }, 1000 )
};
