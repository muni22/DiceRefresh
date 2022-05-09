// Get dices element 
var dice1 = document.querySelector(".img1")
var dice2 = document.querySelector(".img2")

// Take random number
var random1 = Math.floor(Math.random()*6 + 1)
var random2 = Math.floor(Math.random()*6 + 1)

// Add random number into img-src
var src1 = "images/dice" + random1 +".png"
var src2 = "images/dice" + random2 +".png"

// When refresh , change Attribute for 2 dices 
dice1.setAttribute("src", src1)
dice2.setAttribute("src", src2)

var heading = document.querySelector(".container h1")
// Change Heading text for logic
if (random1 > random2) {
    heading.innerHTML = "<i class='fa-solid fa-flag'></i> Player 1 wins !"
}else if(random1 < random2){
    heading.innerHTML = "Player 2 wins ! <i class='fa-solid fa-flag'></i>"
}else{
    heading.innerHTML = "Get Draw!"
}

