//Exercice 1

function produit(x,y)
{
    var res = x * y
    return res;

}

function afficheImg(image)
{

    var images = document.getElementById("test");
    images.src=image

}
afficheImg("papillon.jpg")
 var produit = produit(3,5);
 document.getElementById("test1").innerHTML ="le cube de 3 est 27 <br> le produit de 3*5 est égal à "+produit