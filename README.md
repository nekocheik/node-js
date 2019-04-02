# Node JS

-lancer la commande d'installation de node dans un dossier .

> npm init

Cela permet de créer un package.json qui contient 

    {
    
    "name": "node-js",
    
    "version": "1.0.0",
    
    "description": "for traine node js",
    
    "main": "index.js",
    
    "scripts": {
    
    "test": "echo \"Error: no test specified\" && exit 1"
    
    },
    
    "author": "Cheik kone",
    
    "license": "ISC"

} 

Comment exporter une  variable  ?

Dans fichier javascript il est possible d'importer ou d'exporter des fonctions venant d'autre fichier .

    exports.NomDelaVariableSync = (valeur) => {
          Math.random  *  valeur ;
          return valeur
    }

Le code au dessus permet de créer un fichier export qui sera par la suite importer par l'index comme dans l'exemple en dessous .

    const  synchronous  =  require('./sync/sychron2');
    
pour appeler cette fonction c'est très simple il faut appeler tout simplement la variable comme avec une fonction normale à un détail près c'est devras mettre le nom de l'export avant .

> const  result  =  synchronous.NomDelaVariableSync(10)




