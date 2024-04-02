var jeune=0
var moyens=0
var vieux=0
var age = 0
while(age!==""){
age=prompt("saisie age")
if(age<21){
    jeune++
}
if(age > 20 && age< 41){
    moyens++
}
if(age>40){
    vieux++
}
if(age>99){
    vieux++;break
}
}
console.log(jeune)
console.log(moyens)
console.log(vieux)

var nombre = prompt()
var total = 0
for (var i = 0;i<11;i++){
    total = i * nombre
    console.log(total+"="+i+"x"+nombre)
}

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom = prompt("saisie prénom")
supp = tab.indexOf(prenom)
if(supp==-1){
    alert("erreur")
}
if(supp>=0){
    tab.splice(supp,1)
    tab.push("")
}
console.log(supp)
console.log(tab)

var PU,QTECOM,PAP=0,REM=0,PORT,TOT=0
PU=prompt(" saisie du prix unitaire")
 QTECOM=prompt("saisie de la quantité commandée")
 TOT= PU * QTECOM
 PAP=TOT
 if(TOT>100 && TOT<=200){
  REM=((+TOT/100)*5)
  REM=Math.round(REM*100)/100
  PAP=TOT - REM
 }
else if(TOT>200){
    REM=((+TOT/100)*10)
    REM=Math.round(REM*100)/100
    PAP=TOT - REM
}
if(PAP<=300){
    PORT=6
    PAP=+PAP + +PORT
}
else if(PAP>300 && PAP<500){
    PORT=((+PAP/100)*2)
    PORT=Math.round(PORT * 100)/100
    PAP=PAP+ +PORT
}
else if(PAP>500){
    PORT="Gratuit"
}
console.log("Le prix sans frais de port et remise appliquer :"+TOT)
console.log("remise appliquer :"+REM)
console.log("frais de port :"+PORT)
console.log("Le prix à payer est de :"+PAP)