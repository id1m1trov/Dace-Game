var c = document.getElementById("diceOne");
var ctx = c.getContext("2d");


var clickCounter = 0;
var playerTwoScore = 0;
var playerOneScore = 0;

// number of games
var numberOfGames = 0;
var threeGames = document.getElementById("threeGames");
var fiveGames = document.getElementById("fiveGames");
var tenGames = document.getElementById("tenGames");




// taking the names from the inputs
var playerOneName = document.getElementById("playerOneNameGet").value;
var playerTwoName = document.getElementById("playerTwoNameGet").value;


// taking welcome row and play row 
var inputRow = document.getElementById("inputRow");
var playRow = document.getElementById("playRow");


//sound effects
var taDaSound = new Audio("sounds/winCheer.mp3");
var rollDiceSound = new Audio("sounds/dice2.WAV");
var slideSound = new Audio("sounds/slide.mp3");







document.getElementById("playBtn").addEventListener("click", function () {

    playerOneName = document.getElementById("playerOneNameGet").value;
    playerTwoName = document.getElementById("playerTwoNameGet").value;

    document.querySelector("#playerOneNameSet").textContent = playerOneName;
    document.querySelector("#playerTwoNameSet").textContent = playerTwoName;

    // players turn in beginning
    document.querySelector("#playersTurn span").textContent = playerOneName;

    // cheking numbers of game selected 
    if (threeGames.checked) {
        numberOfGames = 3 * 2;
    } else if (fiveGames.checked) {
        numberOfGames = 5 * 2;
    } else if (tenGames.checked) {
        numberOfGames = 10 * 2;
    }

    // hide the Input row box 
    document.getElementById("inputRow").classList.add("hideBox");
    // hide the header 
    document.getElementById("mainHeader").classList.add("hideHeader");
    // show the play box 
    document.getElementById("playRow").classList.add("showBox");

    trollSix();

    // play slide sound effect
    slideSound.play();
});






document.getElementById("trollBtn").addEventListener("click", function () {

    if (clickCounter <= numberOfGames - 1) {
        var trollNumber = Math.floor(Math.random() * 6) + 1;
        if (trollNumber === 1) {
            trollOne();
        } else if (trollNumber === 2) {
            trollTwo();
        } else if (trollNumber === 3) {
            trollThree();
        } else if (trollNumber === 4) {
            trollFour();
        } else if (trollNumber === 5) {
            trollFive();
        } else if (trollNumber === 6) {
            trollSix();
        }


        // clicks of the first player 
        if (clickCounter % 2 === 0) {

            // rotate animation on the canvas 
            document.getElementById("diceOne").style.transform = "rotate(360deg)";

            // players turn pointer
            document.querySelector("#playersTurn span").textContent = playerTwoName;

            // adding the score 
            playerOneScore += trollNumber;

            // crating new list items and adding them to ul
            var playeListScore = document.createElement("li");
            playeListScore.textContent = " troll: " + trollNumber;
            document.querySelector("#playerOneStats ul").append(playeListScore);
            
            // adding total score to paragraph
            document.querySelector("#totalOne").innerHTML = playerOneScore;

            // play sound effect
            rollDiceSound.play();
        }

        // clicks of the second player
        else if (clickCounter % 2 === 1) {

            // rotate animation on the canvas 
            document.getElementById("diceOne").style.transform = "rotate(-360deg)";

            // players turn pointer
            document.querySelector("#playersTurn span").textContent = playerOneName;

            // adding the score 
            playerTwoScore += trollNumber;

            // crating new list items and adding them to ul
            var playeListScore = document.createElement("li");
            playeListScore.textContent = " troll: " + trollNumber;
            document.querySelector("#playerTwoStats ul").append(playeListScore);

            // adding total score to paragraph
            document.querySelector("#totalTwo").innerHTML = playerTwoScore;

            // sound effect
            rollDiceSound.play();
        }

        // counting the numbers of clicks
        clickCounter++;

        // chek for the end of the game 
    } else if (clickCounter === numberOfGames) {
        //dialog win box
        document.getElementById("winDialog").style.display = "block";

        //confetti
        for (var i = 0; i < 50; i++) {
            var confContainer = document.createElement("div");
            confContainer.classList.add("confetti-piece");
            document.getElementById("confetti").append(confContainer);
        }

        taDaSound.play();

        var points;
        // if player one have more than player two
        if (playerOneScore > playerTwoScore) {
            points = playerOneScore - playerTwoScore;

            //document.querySelector("#playerOneNameSet").style.color = "red"; 

            // set the winner name in win boxx
            document.getElementById("winnerName").textContent = playerOneName;

            //write the points in score span
            document.getElementById("points").textContent = points;
        }

        // if player two have more than player one
        else {
            points = playerTwoScore - playerOneScore;


            document.querySelector("#playerTwoNameSet").style.color = "green";

            // set the winner name in win boxx
            document.getElementById("winnerName").textContent = playerTwoName;
            //write the points in score span
            document.getElementById("points").textContent = points;
        }
    }
});



// canvas circle draw
function trollOne() {
    ctx.beginPath();
    ctx.rect(20, 20, 250, 260);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(140, 140, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
}

function trollTwo() {
    ctx.beginPath();
    ctx.rect(20, 20, 250, 260);
    ctx.fillStyle = "white";
    ctx.fill();

    // 1 lqv
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(65, 60, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();


    //6 dese
    ctx.beginPath();
    ctx.arc(225, 225, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
}
// Troll Three
function trollThree() {
    ctx.beginPath();
    ctx.rect(20, 20, 250, 260);
    ctx.fillStyle = "white";
    ctx.fill();

    // 1 lqv
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(65, 60, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(140, 140, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();

    //6 dese
    ctx.beginPath();
    ctx.arc(225, 225, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
}

function trollFour() {

    //ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.rect(20, 20, 250, 260);
    ctx.fillStyle = "white";
    ctx.fill();

    // 1 lqv
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(65, 60, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();

    // 3 lqv
    ctx.beginPath();
    ctx.arc(65, 225, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
    // 4 desen
    ctx.beginPath();
    ctx.arc(225, 60, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();

    //6 dese
    ctx.beginPath();
    ctx.arc(225, 225, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
}

function trollFive() {
    ctx.beginPath();
    ctx.rect(20, 20, 250, 260);
    ctx.fillStyle = "white";
    ctx.fill();

    // 1 lqv
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(65, 60, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();

    // 3 lqv
    ctx.beginPath();
    ctx.arc(65, 225, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();

    // x
    ctx.beginPath();
    ctx.arc(140, 140, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();

    // 4 desen
    ctx.beginPath();
    ctx.arc(225, 60, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();

    //6 dese
    ctx.beginPath();
    ctx.arc(225, 225, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
}

function trollSix() {

    ctx.beginPath();
    ctx.rect(20, 20, 250, 260);
    ctx.fillStyle = "white";
    ctx.fill();

    // 1 lqv
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(65, 60, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
    // 2 lqv
    ctx.beginPath();
    ctx.arc(225, 60, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
    // 3 lqv
    ctx.beginPath();
    ctx.arc(65, 145, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
    // 4 desen
    ctx.beginPath();
    ctx.arc(225, 145, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
    // 5 desen
    ctx.beginPath();
    ctx.arc(65, 225, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
    //6 dese
    ctx.beginPath();
    ctx.arc(225, 225, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
}



// document.querySelector("#btn").addEventListener("click", clickk);

// function clickk() {
//     let randRedColor = Math.floor(Math.random() * 255);
//     let randGreenColor = Math.floor(Math.random() * 255);
//     let randBlueColor = Math.floor(Math.random() * 255);
//     document.querySelector("h1").style.backgroundColor = "rgba(" + randRedColor + ", " +
//         randGreenColor + ", " + randBlueColor + ")";
// }


// var ul = document.querySelector("ul");
// ul.style.listStyle = "none";
// var li;
//     for (let i = 1; i <= 10; i++) {

//             li = document.createElement("li");

//             let lottaryNum = Math.round(Math.random() * 60);


//             li.innerText =  i + " number is: " + lottaryNum;
//             // document.querySelector("li").innerHTML = lottaryNum;
//             ul.appendChild(li);
//     };


// var header = document.createElement("h1");
// header.textContent = "Здравейте бе мушмуроци";





// let lotaryList = document.createElement("ol");
// document.querySelector("body").appendChild(lotaryList);
// let lotaryItem;


// for (let i = 1 ; i <= 10 ; i++){
//     let randRedColor = Math.floor(Math.random() * 255);
//     let randGreenColor = Math.floor(Math.random() * 255);
//     let randBlueColor = Math.floor(Math.random() * 255);
//     // за всяка итерация създавам нов лист елемтн
//     lotaryItem = document.createElement("li");

//     // за всеки нов лист елемент създавам нова стойност с рандом число
//     let randNumber = Math.floor(Math.random() * 20 );
//     lotaryItem.innerText = randNumber;
//     lotaryItem.style.color = "rgba(" + randRedColor + ", " +
//     randGreenColor + ", " + randBlueColor + ")";;

//     // добавям лист елемент към подреденият лист
//     lotaryList.appendChild(lotaryItem);


// };
// lotaryItem.lastChild.textContent = "Ашналадор";
// document.querySelector("ol li:nth-child(6)").style.color = "orange";
// document.querySelector("ol").append(header);

// // let i = 1;
// // while ( i <= 20) {
// //     let lottaryNum = Math.round(Math.random() * 60);
// //     // document.querySelector("ul").add.innerHTML = "<li>" + lottaryNum + "</li>";
// //     document.querySelector("ul li").append( i + " number is : " + lottaryNum + "\\");
// //     i++;
// // }