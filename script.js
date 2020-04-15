function addGame() {

    function Game(title, score, color) {
        this.title = title;
        this.score = score;
        this.color = color;
    }
        
    let userTitle = prompt(`Please enter the title of a recent game you've played:`);
    let userScore = Number(prompt(`On a scale of 0-5, how would you rate ${userTitle}?`));
    if (userScore > 5) {
        userScore = Number(prompt(`Please rate ${userTitle} on a scale of 0 to 5.`));
        }

    if (userScore >= 4 && userScore <= 5) {
        userColor = "green";
    } else if (userScore < 4) {
        userColor = "red";
    } else {
        userColor = null;
    }

    let userGame = new Game(userTitle, userScore, userColor);
    console.log(userGame);

    let gameTitles = document.querySelector(".titles");
    let newTitle = document.createElement("li");
    newTitle.innerText = userGame.title;
    if (userGame.color === "green") {
        newTitle.style.color = "seagreen";
    } else if (userGame.color === "red") {
        newTitle.style.color = "red";
    } else {
        newTitle.style.color = "black";
    }
    gameTitles.appendChild(newTitle);
    
    let gameScores = document.querySelector(".scores");
    let newScore = document.createElement("p");
    newScore.innerHTML = `You gave <b>${userGame.title}</b> a score of <b>${userGame.score}</b> out of 5.`;
    gameScores.appendChild(newScore);

}
