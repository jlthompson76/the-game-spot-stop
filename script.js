function addGame() {

    let title = prompt(`Please enter the title of a recent game you've played:`);
    let score = Number(prompt(`On a scale of 0-5, how would you rate ${title}?`));
    if (score > 5) {
        score = Number(prompt(`Please rate ${title} on a scale of 0 to 5.`));
    }
    console.log(title, score);

    if (score > 3) {
        document.querySelector(".title").style.color = "green";
    } else {
        document.querySelector(".title").style.color = "red";
    }

    let titleP = document.querySelector(".title");
    console.log(titleP.textContent);
    titleP.innerHTML += `<br>You recently played ${title}.`;
    let scoreP = document.querySelector(".score");
    console.log(scoreP.textContent);
    scoreP.innerHTML += `<br>You gave ${title} a score of ${score} out of 5.`;

}
