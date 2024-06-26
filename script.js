const Gameboard = (() => {
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        const theBoard = document.querySelector("#game-board");
        theBoard.childNodes.forEach((ele) => {
            ele.remove();
        });
        const boardHTML = [];
        gameBoard.forEach((square, index) => {
            const squareDiv = document.createElement("div");
            squareDiv.className = "square";
            squareDiv.id = `square-${index}`;
            squareDiv.textContent = square;
            boardHTML.push(squareDiv);
        });
        boardHTML.forEach((ele) => {
            theBoard.appendChild(ele);
            ele.addEventListener("click", handleClick);
        });
    }

    const handleClick = (e) => {
        let index = parseInt(e.target.id.split("-")[1]);
        Game.update(index);
    };
    return {
        render,
        handleClick
    }
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
};

const Game = (() => {
    let players;
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
                createPlayer(document.querySelector("#player1").value, "X"),
                createPlayer(document.querySelector("#player2").value, "O")
            ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }

    const update = (index, value) => {
        gameBoard[index]
    };

    return {
        start,
        update
    }
})();

const startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", () => {
    Game.start()
});
