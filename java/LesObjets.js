var tab=[]
var somme=0
for(var i=0;i<100;i++){
tab[i]=prompt("saisissez un nombre")
if(tab[i]=="0"){
    tab.pop()
    break
}
somme=+somme + +tab[i]
}
console.log (tab)
console.log (somme)
console.log (somme/tab.length)