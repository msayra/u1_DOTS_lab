/*
 * DOTS: Level One
 *
 */
function switchColor(colors) {
    randomColor = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomColor]
    randomColor = Math.floor(Math.random() * colors.length)
    for (ball of balls) {
        ball.style.backgroundColor = colors[randomColor]
    }
}