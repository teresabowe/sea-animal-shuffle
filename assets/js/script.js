
// Wait for the DOM to finish loading before running the game
// call shuffle function

document.addEventListener("DOMContentLoaded", function() {

    arrayForShuffle = ['crab','octopus','seahorse','fish']; //array to be shuffled
    let shuffle = arrayShuffle(arrayForShuffle);
    console.log(shuffle);

    document.getElementById('1').onclick = toggleImage;
    document.getElementById('2').onclick = toggleImage;
    document.getElementById('3').onclick = toggleImage;
    document.getElementById('4').onclick = toggleImage; 


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

function toggleImage() {
    console.log("Function to toggle image")
};




