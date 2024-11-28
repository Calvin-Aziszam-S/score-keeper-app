// Select Styling
const selects = document.querySelectorAll("select");

selects.forEach((select) => {
	// Remove focus when an option is selected
	select.addEventListener("change", () => {
		select.classList.add("no-focus");
		select.blur(); // Remove focus
	});

	// Remove the no-focus class when the select is clicked again
	select.addEventListener("mousedown", () => {
		select.classList.remove("no-focus");
	});
});
// Select Styling

//App
const playerOneBtn = document.querySelector(".playerone-btn");
const playerTwoBtn = document.querySelector(".playertwo-btn");
const resetBtn = document.querySelector(".reset-btn");
const playerOneScoreText = document.querySelector("#playerone-score");
const playerTwoScoreText = document.querySelector("#playertwo-score");
const selectOption = document.querySelector("select");

let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = parseInt(selectOption.value);

const checkWinner = () => {
	if (playerOneScore === winningScore) {
		playerOneScoreText.classList.add("win");
		playerTwoScoreText.classList.add("lose");
		playerOneBtn.classList.add("disabled");
		playerTwoBtn.classList.add("disabled");
		selectOption.classList.add("disabled");
	} else if (playerTwoScore === winningScore) {
		playerOneScoreText.classList.add("lose");
		playerTwoScoreText.classList.add("win");
		playerOneBtn.classList.add("disabled");
		playerTwoBtn.classList.add("disabled");
		selectOption.classList.add("disabled");
	}
};

const addScore = (e) => {
	if (e.target.className === "playerone-btn") {
		playerOneScore += 1;
	} else if (e.target.className === "playertwo-btn") {
		playerTwoScore += 1;
	}
	playerOneScoreText.innerText = playerOneScore;
	playerTwoScoreText.innerText = playerTwoScore;

	checkWinner();
};

const resetScore = () => {
	playerOneScore = 0;
	playerTwoScore = 0;

	playerOneScoreText.innerText = playerOneScore;
	playerTwoScoreText.innerText = playerTwoScore;

	playerOneBtn.classList.remove("disabled");
	playerTwoBtn.classList.remove("disabled");
	playerOneScoreText.classList.remove("win", "lose");
	playerTwoScoreText.classList.remove("win", "lose");
	selectOption.classList.remove("disabled");
};

playerOneBtn.addEventListener("click", addScore);
playerTwoBtn.addEventListener("click", addScore);
resetBtn.addEventListener("click", resetScore);
selectOption.addEventListener("change", (e) => {
	winningScore = parseInt(e.target.value);
});
