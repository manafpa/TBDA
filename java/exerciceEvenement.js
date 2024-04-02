/*Ex 1 
function patrick (){
    var text = document.getElementById("prenom").value
    alert(text)
}
*/

/*Ex 2



//déterminer un nombre aléatoire nommé "nombre magique"


//verifié si le nombre saisie correspond au nombre magique

verif(saisie, nombremagique)


 function verif(nb1, nb2){
    
    
    
    
    
    
    si le nombre est trop petit alors on affiche  trop petit
    
    
    
    si le nombre est trop grand alors on affiche trop grand
    
    
    
    si le nombre est égal au nombre magique alors c'est gagné 
    else if (saisie==nombremagique)
    alert ("alors c'est gagné")

/***********************************************************************************************************/

var nombremagique = getRandomArbitrary(0,100);
//console.log(nombremagique);

//permettre à l'utilisateur de saisir un nombre
var saisie = prompt("veuillez saisir un nombre ");
verif(saisie,nombremagique);













//ici les fonctions annexes

/*-------------------------------*/


function verif(nb1, nb2)
{
    if (nb1<nb2)
    {    
        alert ("Le nombre est trop petit")
    }

    if (nb1==nb2)
    {    
        alert ("C'est gagné")
    }

    if (nb1>nb2)
    {    
        alert ("Le nombre  est trop grand")
    }
}

/*-------------------------------*/

function getRandomArbitrary(min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}