/* Here the fun begins. */

// Static Vars // 
const btnRand = document.getElementById("btnRand");
var heroName = "";
var heroImg = document.getElementById("heroImg");
var heroDesc = document.getElementById("heroDesc");
var heroAttrib = "";


const myheroes = $.getJSON("heroes.json");
console.log(myheroes[0]);

// Functions //


function selectHeroRandom(){

}


function buttonRandom(){
    selectHeroRandom();
}


btnRand.addEventListener("click", buttonRandom());
alert(myheroes[0].heroName);


