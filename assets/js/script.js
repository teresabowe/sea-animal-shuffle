// create global default seaAnimals array for updating in toggleImages
const baseImageURL = "assets/images/";
var seaAnimals = [
    `${baseImageURL}fish.png`,
    `${baseImageURL}octopus.png`,
    `${baseImageURL}crab.png`,
    `${baseImageURL}seahorse.png`
];

console.log("Show seaAnimals")
console.log(seaAnimals);

var counter = 1;

// Wait for the DOM to finish loading before running the game
// Call shuffle function
// Add onclick event for toggleImage

document.addEventListener("DOMContentLoaded", function() {

    arrayForShuffle = ['crab','octopus','seahorse','fish']; //array to be shuffled
    let shuffle = arrayShuffle(arrayForShuffle);
    console.log(shuffle);

    document.getElementById('1').onclick = toggleImage;
    document.getElementById('2').onclick = toggleImage;
    document.getElementById('3').onclick = toggleImage;
    document.getElementById('4').onclick = toggleImage; 

    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function() {
        checkAnswer(shuffle);
    }); 
});

/* Apply Fisher-Yates algorithm to shuffle sea animals.
Iterate through the array backwards.  As each element is encountered, it is exchanged with another element in the array.
The location of the echanged element is determined by a random number.
Code used is from All Things JavaScript at https://www.youtube.com/watch?v=myL4xmtAVtw.
*/

function  arrayShuffle(arrayToShuffle) { 
    let newPos, temp; 
    for (let i = arrayToShuffle.length - 1; i > 0; i--) { 
        newPos = Math.floor(Math.random() * (i + 1)); 
        temp = arrayToShuffle[i]; 
        arrayToShuffle[i] = arrayToShuffle[newPos]; 
        arrayToShuffle[newPos] = temp; 
    }
    return arrayToShuffle;
};


// Adapted from https://stackoverflow.com/questions/25291730/change-images-on-click-cycle-through-3-images

function toggleImage() {
    if(counter == 0){
        this.src = "assets/images/fish.png";
        counter++;    
    }
    else if(counter == 1){
        this.src = "assets/images/octopus.png";
        counter++;    
    }
    else if(counter == 2){
        this.src = "assets/images/crab.png";
        counter++;   
    }
    else {
        this.src = "assets/images/seahorse.png";
        counter = 0;
    };

console.log("seaAnimals before splice") ;  
console.log(seaAnimals);

seaAnimals.splice(this.id-1, 1, (document.getElementById(this.id).getAttribute("src")));

console.log("seaAnimals after splice");
console.log(seaAnimals);

};

function checkAnswer(shuffle) {
    
    console.log("Selection from user")
    console.log(seaAnimals);
    console.log("Selection from shuffle")
    console.log(shuffle);

    // Clone seaAnimals (user choice) to prepare for cleaning and comparisons with shuffle (computer choice)
    console.log("Clone seaAnimals");
    var cloneSeaAnimals = [...seaAnimals];
    console.log(cloneSeaAnimals);

    // Tidy up user choice cloneSeaAnimals
    console.log("Clean seaAnimals down to sea animal name only");
    cloneSeaAnimals = cloneSeaAnimals.map(x=>x.substring(14, x.length));
    cloneSeaAnimals = cloneSeaAnimals.map(x=>x.substring(0, x.length -4));
    console.log("After edit of user guess cloneSeaAnimals");
    console.log(cloneSeaAnimals);

    // Compare each element of the arrays
    for (let j = 0; j < 4; j++) {
        if (shuffle[j] === cloneSeaAnimals[j]) {
            document.getElementById(j + 1).style.border = "thick solid #50C878";
        } else {
            document.getElementById(j + 1).style.border = "thick solid #FF0000 ";
        };
    };

};

