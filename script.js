var age =20
let prenom ="soundous"
let prenomm="ilessa"
let nom = "nihel"
age =24
const pi = 3.14
let estEtudiant = true
let addition1 = 5+3
let soustraction = 5-3
let multiplication =5*3
let division = 5/3
let reste = 5%2
let comparaison =5>3
let comparaison2=5<3
console.log(5==5)
console.log(5=="5")
console.log(5==="5")
let a= true
let b=false
console.log(a&&b)
console.log(a||b)
console.log(!a)
age =age+5
age+=5

console.log(age)
let n=19
console.log(n%2)
console.log(age)
let addition =5+3
function additionner(){
    return 3+5
}
function additionner2(a,b){
    let addition = a+b 
    return addition
}
let additionner3 =function(a,b){
    return a+b
}
let additionner4 = (a,b)=>  {
    return a+b
}
console.log(additionner2(8,5),additionner3(8,5),additionner4(8,5))
console.log(additionner())
function bonjour(){
    console.log("bonjour")
}
function verifierPair(nombre){
    if(nombre%2===0){
        console.log("nombre pair");
        console.log("nombre impair");
    }
}
function verifierMoy(moyenne,isStudent){
    if(moyenne >= 18 && isStudent){
        return "Excellent";
    } else if(moyenne >15 && isStudent){
        return "bien"
    }else if (moyenne >= 18 || isStudent === false){
        return "failed"
    }else {
        return "failed"
    }

}
console.log(verifierMoy(18,false));
function verifierNote(note1,note2,note3,note4){
    let moyenne=(note1*2+note2*3+note3*4+note4*5)/14
    if(moyenne>=16 && (note1<=5 && note2<=5 && note3<=5 && note4<=5))
    
        {return "pass avec mention"}
        else if( moyenne >=10 && (note1<=5 && note2<=5 && note3<=5 && note4<=5) )
            {return  "passable"}
    
else{
    return"passez au rattrapage"
}
}
console.log(verifierNote(20, 20, 20, 15))
let user =[1,"soundous",false]
console.log(user.length)
console.log(user)
console.log(user[1])
console.log(user[0])
let ages =[20,25,21,23,26]
console.log(ages[ages.length-2])
ages.push(27)
console.log(ages)
ages.unshift(30)
console.log(ages)
ages.push(25,16)
console.log(ages)
ages.pop()
console.log(ages)
ages.shift()
console.log(ages)
user[2]="true"
console.log(ages.includes(23))
console.log(user.indexOf("dhikra"))

let panier =["pain","lait"]
panier.unshift("oeufs")
panier.push("eau")
console.log(panier)
panier.pop()
panier.shift()
console.log(panier)
for(let i =1;i<=20;i++){
    if(i>5){
        console.log(i + "est plus grand que 5")
    }else{
        console.log(i + "est plus petit au egal a 5")
    }
}
let paires =0
let impaires =0
for(let i=0;i<=30;i++){
    console.log(i + "nombre")
    if(i%2===0){
        console.log(i + "est un nombre paires")
        paires +=1
    }else{
        console.log(i +"est un nombre impaires")
        impaires +=1
    } 
}
console.log("Nombre total de valeur paires et impaires")
let agess = [15, 20, 87, 10, 15]
for(let i =0 ; i < agess.length; i++) {
    console.log("agess est : " + agess[i] );
    if(agess[i]>25){
        console.log(`your agess is: ${agess[i]} so you are majeur`)
        console.log("your agess is:" + agess[i] + "your agess is majeur")
    }
}
let somme =0
let nombre =1
while(somme<50){
    somme+=nombre
    console.log(`nombre = ${nombre} et la somme = ${somme}`)
    nombre++
}
 let agesss;
 do{
    agesss = 20 ;
 }while(agesss<0);
 console.log(agesss)

let fruits =["pomme","banane","ORANGE","fraise"]
console.log(fruits)
fruits.push("kiwi")
fruits.unshift("mangue")
fruits.pop()
fruits.shift()
POSITIONORANGE= fruits.indexOf("ORANGE");
let existebanane = fruits.includes("banane")
if(existebanane){
    console.log("banane existe dans le tableau")
}else{
    console.log("banane nexsiste pas")
}
let positionfraise = fruits.indexOf("fraise")
console.log("position de fraise")
console.log("tableau final")
console.log("nombre de fruits")
let fruitsLongs = [];

for (let i = 0; i < fruits.length; i++) {

    if (fruits[i].length > 5) {

        console.log(fruits[i]);

    }

}

console.log(fruitsLongs);
let student =["Soundous",15]
let etudiant = {
    nom : "soundous",
    moyenne : 15,
    estAdmis : true,
} 
console.log(etudiant)
console.log(etudiant.nom)
console.log(etudiant["moyenne"])
etudiant.estAdmis= false
console.log(etudiant)
delete etudiant.moyenne
console.log (etudiant)
let personne = {
    prenom : "douaa",
    direBONJOUR(){
        console.log("bonjour;je mappelle"+personne.prenom)
    }

}
personne.direBONJOUR()
let voiture = {
    marque :"bmw",
    vitesse :0,
    accelerer(){
        this.vitesse+=10;
        console.log(`${this.marque} roule maintenant a ${this.vitesse}`)
    }
}
voiture.accelerer()
voiture.accelerer()
voiture.accelerer()
let Classe = {
    nom :"class a",
    professeur:{nom :"soundous",matiere :"fullstack js", Change(){
        this.matiere="Math",
        console.log(`matiere est changé a ${this.matiere}`)

    }
},
etudiants:["douaa","adem","noursine"]
}
console.log(Classe.professeur.nom)
console.log(Classe.etudiants[1])
Classe.professeur.Change()
let etudiants = [
    {nom :"adem",note :14},
    {nom :"farouk",note:17},
    {nom :"noursine",note:13},
    {nom :"omar",note:9},
]
console.log(etudiants[1].note)
for(let i=0;i<etudiants.length;i++){
    console.log(etudiants[i].nom +"a eu" +etudiants[i].note)
}
etudiants.forEach((et)=>{
    console.log(`${et.nom} a eu la note ${et.note}`)
});
let notes = etudiants.map((et)=>{
    return et.note
})
console.log(etudiants)
console.log(notes)
let admis = etudiants.filter((et)=>{
    return et.note>=10
})
console.log(admis)
let admis1 = etudiants.find((et)=>{
    return et.note>=10
})
console.log(admis1);
let file =[]
file.push("amine")
file.push("sara")
file.push("yacine")
let remove =file.shift()
console.log(remove)
class Etudiant {
    constructor(nom,note) {
if(typeof nom !== 'string'){throw new TypeError('le nom doit etre une chaine de caractères.')
    }
if(typeof note !=='number'){ throw new TypeError ('la note doit etre un nombre .');
}
         this.nom =nom;
         this.note=note;
        }

afficherNoer(){
    console.log("le nom de l'etudiant est :"+this.nom+this.note)
}
}

let etud1 = new Etudiant("salim",22)
let etud2 = new Etudiant("12",22)
etud2.afficherNoer()
class Queue {
    constructor(){
        this.elements=[]
    }
    isEmpty(){
        return this.elements.length===0;
    }
        enqueue(element) {
            this.elements.push(element);
        }
    
dequeue(){
    if(this.isEmpty()){
        console.log("la file est vide ")
    }
    return this.elements.shift();
}
last(){
    if(this.isEmpty()){
        console.log("la file est vide")
        return null
    }
    let fr = this.elements[0]
    return fr
}
first(){
    if(this.isEmpty()){
        console.log("la file est vide")
        return null
    }
    let position =this.elements.length-1
    return this.elements[position]
}
}


let queue1 = new Queue()
queue1.enqueue("amine")
queue1.enqueue("salim")
queue1.enqueue("douaa")
queue1.enqueue("dhikraa")
queue1.enqueue("ikram")
console.log(queue1.first())
console.log(queue1.last())
console.log(queue1)

class impression{
    constructor(){
        this.tableau=[]
    }
    isEmpty(){
        return this.tableau.length===0;
    }
enqueue3(tableau){
this.tableau.push(tableau);
    }
}

let filee = new impression()
filee.enqueue3({nom:"raport.pdf",pages:10,proprietere:"amine"})
filee.enqueue3({nom:"cv.docx",pages:10,proprietere:"sara"})
filee.enqueue3({nom:"projet.pdf",pages:25,proprietere:"Yacine"})
filee.enqueue3({nom:"facture.pdf",pages:3,proprietere:"Douaa"})
filee.enqueue3({nom:"presentation.pptx",pages:15,proprietere:"ikram"})

class stack{
    constructor() {
        this.elements =[];
    }
isEmpty(){
    return this.elements.length===0;
}
push(element){
    this.elements.push(element);
}
pop(element){
    this.elements.pop(element);
}
}
let stackk=new stack()
stackk.push(10);
stackk.pop(20);
stackk.push(100)
console.log(stack)

 function bubbleSort(tableau) {
  let n = tableau.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (tableau[j] > tableau[j + 1]) {
        let temp = tableau[j];
        tableau[j] = tableau[j + 1];
        tableau[j + 1] = temp;
      }
    }
  }

  return tableau;
}

console.log(bubbleSort([5, 2, 8, 1, 9, 3]));
 
function recherchevaleur(tab,valeurrechercher){
    for(let i=0;i<tab.length;i++){
        if(tab[i]=== valeurrechercher){
            return i;
        }
    }
return -1;
}
let tableau =[6,8,9,1,0,3,2]
console.log(recherchevaleur(tableau,0))

function recherchebinaire(tab,valeur){
    let debut =0;
    let fin =tab.length-1;
    while(debut <=fin){
        let milieu = Math.floor((debut+fin)/2)
        if(tab[milieu]===valeur){
            return milieu
        }else if (tab[milieu]<valeur){
            debut = milieu+1
        }else{
            fin = milieu-1
        }
    }
return -1
}
table =[1,2,5,7,9]
console.log(recherchebinaire(table,5))

function compteAvant(n){
    if(n===0){
         console.log("cas de base")
         return 0
    }
    return n +compteAvant(n-1)
}
console.log(compteAvant(5));

function fibonnacci(n) {
    if(n===0) {
        console.log("cas de base")
        return 0;
    }
    if(n===1){
        console.log("cas de base")
        return 1;
    }
    fibonnacci(n-1)+fibonnacci(n-2)
}
console.log(fibonnacci(4)) 
console.log("manel and amira  are bestie ");
const add = function(a,b) {
    return a+b ;

};
console.log(add(4,3))