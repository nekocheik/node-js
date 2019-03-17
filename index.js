var exportConsol = require('./sync/syncone') ;

exportConsol.getNumberSync(10)

var tabName = [ 'Adelia','Akila', 'Carol' , 'Dave' , 'Fouzia' , 'Fredy' , 'Johny' , 'Karène' ]

var promise = require('./PromisesTest');


let i = 0 ;

var async = require ('./async');

async.getrandomNumber( 5 , (err, res ) => {
    if(err) throw err ;
    console.log(res + 'async')
})
const handle = setInterval(() => {
  i++;
  if ( i === 10 ) {
    clearInterval(handle) ;
    console.log('terminier')
  }
} , 50 )

var cheik = 'ok' ;

async.getrandomName( tabName, ( err , res) => {
  console.log(res)
})


promise.getrandomNumber(10)
.then( data => console.log(`la valeur de la promes est ${data}`))
.catch( error => console.log(`une grosse erreur à était commise : ${error}`))