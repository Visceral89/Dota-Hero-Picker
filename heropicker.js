/* Here the fun begins. */

//Heroes// Warning HUEG!!!
var heroes = [
    {
        name: "Abaddon",
        "desc": "Able to transform enemy attacks into self-healing, Abaddon can survive almost any assault. Shielding allies and launching his double-edged coil at a friend or foe, he is always ready to ride into the thick of battle.",
        "portrait": "images/abaddon.png",
        "role": "support",
        "attribute": "strength",
        "complexity": "0"
    },
    {
        name: "Alchemist",
        "desc": "Synthesizing extra resources from each and every kill, Alchemist has no trouble gathering the tools needed to destroy his foes. Ambushing enemies with corrosive acid and a host of unstable chemicals, he battles to ensure his greedy escapades can remain uninterrupted.",
        "portrait": "images/alchemist.png",
        "role": "carry",
        "attribute": "strength",
        "complexity": "0"
    }
    ,
    {
        name: "Ancient Apperition",
        "desc": "Able to launch a powerful blast of damaging ice across the battlefield, Ancient Apparition threatens to shatter weakened enemies wherever they are. Slowing enemies as he enhances his allies' effectiveness in battle, he is a constant threat to his foes.",
        "portrait": "images/ancientapparition.png",
        "role": "hardsupport",
        "attribute": "intelligence",
        "complexity": "1"
    },
    {
        name: "Anti Mage",
        "desc": "Should Anti-Mage have the opportunity to gather his full strength, few can stop his assaults. Draining mana from enemies with every strike or teleporting short distances to escape an ambush, cornering him is a challenge for any foe.",
        "portrait": "images/antimage.png",
        "role": "carry",
        "attribute": "agility",
        "complexity": "0"
    },
    {
        name: "Arc Warden",
        "desc": "A splintered fragment of the same primordial power as the Ancients themselves, Zet the Arc Warden has pledged to see the clash between Radiant and Dire finally end. Assault lone enemies with fluxing energy, or distort space to generate a protective field around allies. Summon a Spark Wraith to patrol an area for enemies to infuse with harmful magic, then create a double of Zet, items and all, to overwhelm your foes.",
        "portrait": "images/arcwarden.png",
        "role": "mid",
        "attribute": "agility",
        "complexity": "2"
    },
    {
        name: "Axe",
        "desc": "One after another, Axe cuts down his foes. Marching ahead of his team, he locks his enemies in battle then counters their blows with a deadly spin of his weapon. Slamming his culling blade through a weakened enemy, he is always charging onward.",
        "portrait": "images/axe.png",
        "role": "offlane",
        "attribute": "strength",
        "complexity": "0"
    },
    {
        name: "Bane",
        "desc": "Bane brings terror to his enemies with his arsenal of disabling abilities. Whether trapping a foe within a contagious nightmare, or gripping an enemy in place, he gives allies all the time they need to slay their enemy.",
        "role": "carry",
        "portrait": "images/bane.png",
        "attribute": "intelligence",
        "complexity": "1"
    },
    {
        name: "Bat Rider",
        "desc": "Once he takes to the skies, Batrider can strike from any direction. Snatching a foe with his lasso, he soars above the treetops, pulling his prey through a trail of flame as he drags them before his merciless allies.",
        "portrait": "images/batrider.png",
        "role": "offlane",
        "attribute": "intelligence",
        "complexity": "2"
    },
    {
        name: "Beastmaster",
        "desc": "Summoning a poison-spitting boar and a scouting hawk to aid his hunt, Beastmaster never stalks the battlefield unprepared. Chopping through the forest with his axes, his stunning roar opens the way for his allies to devastate enemies.",
        "portrait": "images/beastmaster.png",
        "role": "offlane",
        "attribute": "strength",
        "complexity": "1"
    },
    {
        name: "Bloodseeker",
        "desc": "Bloodseeker forces difficult decisions on his enemies. Able to drive his foes to a retreat by bathing a large area with a damaging ritual, his gruesome ultimate asks his opponents to hold still, or die.",
        "portrait": "images/bloodseeker.png",
        "role": "mid",
        "attribute": "agility",
        "complexity": "0"
    }
    
]

// Static Vars // 
const btnRand = document.getElementById("btnRand");
const heroImg = document.getElementById("heroImg");
const heroName = document.getElementById("heroName");
const heroRole = document.getElementById("heroRole");
const heroAttribute = document.getElementById("heroAttribute");
const heroComplex = document.getElementById("heroComplex");
const heroDesc = document.getElementById("heroDesc");



// Icons //
var circle0 = document.getElementById("circle0");
var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");

const circle = "f111";
const circleEmpty ="f1ce";

// Functions //

function buttonRandom(){;
    var prevRandom = "";
    var randomNumber = Math.floor(Math.random() * heroes.length);
    var randomHero = heroes[randomNumber];
    
// rewrite this!!!!!
        if(randomNumber !== prevRandom){
            populateText(randomHero);
            prevRandom = randomNumber;
        }
        else {
            console.log("Duplicate Hero!");
        }
}



/*function addComplexity(complexity){
    switch(complexity){
        case 0:
            document.getElementById("circle1").style.display = "hidden";
            document.getElementById("circle2").style.display = "hidden";
            break;
        case 1:
            document.getElementById("circle2").style.display = "hidden";
            break;
        default :
        document.getElementById("circle0").style.display = "block";
        document.getElementById("circle1").style.display = "block";
        document.getElementById("circle2").style.display = "block";
    }

} */

function populateText(randomHero){
    console.log(randomHero.name);
    heroName.innerHTML = randomHero.name;
    heroDesc.innerHTML = randomHero.desc;
    heroImg.src = randomHero.portrait;
    heroRole.innerHTML = randomHero.role;
    heroAttribute.innerHTML = randomHero.attribute;
};

btnRand.addEventListener("click", buttonRandom);


