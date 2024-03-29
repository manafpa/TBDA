function verifie(){

var societe = document.getElementById("societe").value;
 var contact
 var codepostal
 var email
 var ville 
 var filtre = new RegExp("^[a-z]+$");
 var filtrecode= new RegExp("^([0-9]{5})*$")
 var filtreemail=new RegExp("^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$")
   resultat=filtre.test(societe)
  if (resultat==false) {
    alert("Veuillez entrer le nom de la société !");
  }

 var contact= document.getElementById("contact").value;
 
 resultat=filtre.test(contact)
 if (contact ==""){
    alert("veuillez entrer le nom de la personne à contacter");
    return false;
}

var codepostal=document.getElementById("code_postal").value;

resultat2=filtrecode.test(codepostal)

if(codepostal ==""){
alert("veuillez saisir votre code postal");
return false;

}

var ville=document.getElementById("ville").value;

resultat=filtre.test(ville)

if(ville==""){
alert("veuillez saisir le nom de votre ville");
return false;
}

var email=document.getElementById("email").value;
resultat=filtreemail.test(email)

if(email==""){
alert("veuillez saisir une adresse mail valide");
return false;
}


}
