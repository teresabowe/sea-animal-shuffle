// create global default seaAnimals array for updating in toggleImages
const baseImageURL = "assets/images/";
var seaAnimals = [
    `${baseImageURL}fish.png`,
    `${baseImageURL}octopus.png`,
    `${baseImageURL}crab.png`,
    `${baseImageURL}seahorse.png`
];

// Start counter for cloned image choices
var imageChoiceId = 1000;

// Wait for the DOM to finish loading before running the game
// Call shuffle function
// Add onclick event for toggleImage

document.addEventListener("DOMContentLoaded", function() {

    let arrayForShuffle = ['crab','octopus','seahorse','fish']; //array to be shuffled
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
}

// Toggle through images and update seaAnimals array
function toggleImage() {
           
    if(this.src.includes(`${baseImageURL}fish.png`)) {
        this.src = `${baseImageURL}octopus.png`;
    } else if(this.src.includes(`${baseImageURL}octopus.png`)) {
        this.src =`${baseImageURL}crab.png`;
    } else if(this.src.includes(`${baseImageURL}crab.png`)) {
        this.src = `${baseImageURL}seahorse.png`;
    } else if(this.src.includes(`${baseImageURL}seahorse.png`)) {
        this.src = `${baseImageURL}fish.png`;
    }

seaAnimals.splice(this.id-1, 1, (document.getElementById(this.id).getAttribute("src")));
}

function checkAnswer(shuffle) {
    
    // Clone seaAnimals (user choice) to prepare for cleaning and comparisons with shuffle (computer choice)
    var cloneSeaAnimals = [...seaAnimals];
    
    // Tidy up user choice cloneSeaAnimals
    cloneSeaAnimals = cloneSeaAnimals.map(x=>x.substring(14, x.length));
    cloneSeaAnimals = cloneSeaAnimals.map(x=>x.substring(0, x.length -4));
    
    // Compare each element of the arrays
    for (let j = 0; j < 4; j++) {
        if (shuffle[j] === cloneSeaAnimals[j]) {
            document.getElementById(j + 1).style.border = "thick solid #50C878";
        } else {
            document.getElementById(j + 1).style.border = "thick solid #FF0000 ";
        }
    }

    // Find elements from the first array that are not contained in the second array
    // https://bobbyhadz.com/blog/javascript-get-difference-between-two-arrays
    function getDifference(a, b) {
        return a.filter(element => {
          return !b.includes(element);
        });
    }

    // Check if the arrays are the same
    // https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
    Array.prototype.equals = function (array) {
        for (var i = 0, l=this.length; i < l; i++) {
            if (this[i] != array[i]) { 
                return false;   
            }          
        }     
        return true;
    };

    if ((getDifference(shuffle, cloneSeaAnimals).length) != 0) {
        alert(`Oops!! Choose one of each sea animal i.e. ${getDifference(shuffle, cloneSeaAnimals)}`);  
        incrementClone();           
    }  else if (shuffle.equals(cloneSeaAnimals)) 
        { alert(`Well Done!!! You chose all of the correct sea animals.  Click "Start" to start a new game.`);  
        document.getElementById("submit").disabled = true;
        document.getElementById('1').onclick = null;
        document.getElementById('2').onclick = null;
        document.getElementById('3').onclick = null;
        document.getElementById('4').onclick = null; 
    }  else {
        alert(`Hard luck! try again to see if you can guess correctly!`);
        incrementClone();    
    }
}

// Add image choice id to user choice to identify and keep the clone unique
function changeImageId(item) {
    item.id = item.id + "x" + imageChoiceId;
    }

// Create and increment clones
function incrementClone() {
    if (imageChoiceId >= 1026) {
        alert(`You have tried to guess the sequence more than 25 times without any luck!  Start a new game by clicking on the start button.`);
        throw `Aborting game!`;
    } else {
    imageChoiceId++;
    let clonedElement = document.querySelector(".cloned-area-center");
    let seaAnimalsElement = document.querySelector(".try-area-center");
    let clonedImages = seaAnimalsElement.cloneNode(true);
    clonedImages.id = imageChoiceId;
    clonedImages.classList = "answer-area";
    clonedImages.querySelectorAll('img').forEach(changeImageId);
    clonedElement.appendChild(clonedImages);
    }
}