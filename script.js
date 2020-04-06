function addGame() {

    let title = prompt(`Please enter the title of a recent game you've played:`);
    let score = Number(prompt(`On a scale of 0-5, how would you rate this game?`));

    if (score > 3) {
        document.querySelector(".title").style.color = "green";
    } else {
        document.querySelector(".title").style.color = "red";
    }

    document.querySelector(".title").textContent = title;
    document.querySelector(".score").textContent = score;

}
