const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const BOMB = 'B'
const EMPTY = ' '

const generate = (width = 9, height = 9, bombs = 10) => {
  if (bombs > (width * height)) throw new Error('Too many bombs!')

  const board = Array.from(new Array(width))
    .map(() => Array.from(new Array(height)).map(() => EMPTY))

  let bombsPlaced = 0
  const rand = u => Math.floor(Math.random() * u)

  while (bombsPlaced < bombs) {
    const x = rand(width)
    const y = rand(height)

    if (board[x][y] === EMPTY) {
      board[x][y] = BOMB
      bombsPlaced++
    }
  }

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === BOMB) continue

      const tl = (board[x - 1] || [])[y + 1]
      const tm = (board[x] || [])[y + 1]
      const tr = (board[x + 1] || [])[y + 1]

      const ml = (board[x - 1] || [])[y]
      const mr = (board[x + 1] || [])[y]

      const bl = (board[x - 1] || [])[y - 1]
      const bm = (board[x] || [])[y - 1]
      const br = (board[x + 1] || [])[y - 1]

      const around = [tl, tm, tr, ml, mr, bl, bm, br]
      const count = around.reduce((acc, curr) => {
        if (curr === BOMB) acc++
        return acc
      }, 0)

      board[x][y] = count
    }
  }

  return board
}

const translate = board => {
  const lookup = [
    '⬜',
    ':one:',
    ':two:',
    ':three:',
    ':four:',
    ':five:',
    ':six:',
    ':seven:',
    ':eight:',
  ]

  return board.map(x => {
    const row = x.map(y => {
      if (y === BOMB) return ':bomb:'
      else return lookup[y]
    }).join('||||')

    return `||${row}||`
  }).join('\n')
}

const minesweeper = (width = 9, height = 9, bombs = 10) => {
  while (true) {
    const board = generate(width, height, bombs)
    const text = translate(board)

    if (text.length > 2000) continue
    else return text
  }
}
module.exports = { minesweeper }
};

module.exports.help = {
  name: "minesweeper"
};
