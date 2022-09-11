//"scissors", "paper" --> "Player 1 won!"
//"scissors", "rock" --> "Player 2 won!"
//"paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    let winner = null;

    switch(p1) {
        case "rock":
            if (p2 === "scissors")
                winner = 1;
            else if (p2 === "paper")
                winner = 2;
            break;
        case "paper":
            if (p2 === "rock")
                winner = 1;
            else if (p2 === "scissors")
                winner = 2;
            break;
        case "scissors":
            if (p2 === "paper")
                winner = 1;
            else if (p2 === "rock")
                winner = 2;
            break;
    }

    if (winner !== null)
        return "Player " + winner + " won!";

    return "Draw!";
};