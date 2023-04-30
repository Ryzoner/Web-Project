function rectangularCollision(rectangle1, rectangle2) {
    return (
        rectangle1.attackBox.x + rectangle1.attackBox.width >=
        rectangle2.x &&
        rectangle1.attackBox.x <=
        rectangle2.x + rectangle2.width &&
        rectangle1.attackBox.y + rectangle1.attackBox.height >=
        rectangle2.y &&
        rectangle1.attackBox.y <= rectangle2.y + rectangle2.height
    )
}

function determineWinner(player, enemy, timerId) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Tie'
    } else if (player.health > enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
    } else if (player.health < enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
    }
}

let timer = 60
let timerId

function decreaseTimer({ player, enemy }) {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000, { player, enemy })
        timer--
        document.querySelector('#timer').innerHTML = timer
    }

    if (timer === 0) {
        determineWinner(player, enemy, timerId)
    }
}