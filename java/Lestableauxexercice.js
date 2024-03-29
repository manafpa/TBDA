// var taille = prompt ("quelle est la taille de votre tableau ")
// var tab = [];


// for (let i= 0;i<taille;i++){
//     tab[i] =prompt("quelle valeurs voulez vous mettre dans la case du tableau :"+i)
// }
// console.log(tab)

var somme= 0
var array = []
var taille = prompt ("quelle est la taille de votre tableau ")
for (let i= 0;i<taille;i++){
    array[i] =prompt("quelle valeurs voulez vous mettre dans la case du tableau :"+i)
somme= +somme + +array[i]
}
console.log(array)
console.log(somme)
console.log(somme/array.length)



     


