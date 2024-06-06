class Cell {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.isAlive = Math.random() > 0.9
    this.key = `${this.x}-${this.y}`
    this.lifetime = 0
    this.deadtime = 3
    this.isAliveNextGen
  }
}

export function createCells(windowSize) {
  const cellHeight = windowSize.height / 40
  const vCount = windowSize.height / cellHeight
  const hCount =
    windowSize.width / cellHeight > 80 ? 80 : windowSize.width / cellHeight
  const cellWidth = windowSize.width / hCount
  const cells = []
  for (let i = 0; i < vCount; i++) {
    const row = []
    const y = i * cellHeight
    for (let j = 0; j < hCount; j++) {
      const x = j * cellWidth
      const cell = new Cell(x, y, cellWidth, cellHeight)
      row.push(cell)
    }
    cells.push(row)
  }
  return cells
}

export function createNextGeneration(cells, mousePosition) {
  let mouseX = mousePosition.x
  let mouseY = mousePosition.y

  const cellsLength = cells.length
  for (let i = 0; i < cellsLength; i++) {
    const rowLength = cells[i].length
    for (let j = 0; j < rowLength; j++) {
      const cell = cells[i][j]
      const liveNeighbors = countLiveNeighbors(cells, i, j)
      if (cell.isAlive) {
        if (liveNeighbors === 2 || liveNeighbors === 3) {
          cell.lifetime++
          cell.isAliveNextGen = true
        } else if (liveNeighbors > 3 || liveNeighbors < 2) {
          cell.isAliveNextGen = false
          cell.lifetime = 0
        }
      } else {
        const oldNeighbors = countOldNeighbors(cells, i, j)
        if (liveNeighbors === 3 || oldNeighbors > 0) {
          cell.isAliveNextGen = true
          cell.deadtime = 0
        } else {
          cell.deadtime++
          cell.isAliveNextGen = false
        }
      }
      if (mouseX > cell.x - cell.width && mouseX < cell.x + cell.width * 2) {
        if (
          mouseY > cell.y - cell.height &&
          mouseY < cell.y + cell.height * 2
        ) {
          cell.isAliveNextGen = true
        }
      }
    }
  }

  for (let i = 0; i < cellsLength; i++) {
    const rowLength = cells[i].length
    for (let j = 0; j < rowLength; j++) {
      const cell = cells[i][j]
      cell.isAlive = cell.isAliveNextGen
      cell.isAliveNextGen = false
    }
  }
  return cells
}

const neighborCellsMap = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1]
]

function countLiveNeighbors(cells, rowIndex, cellIndex) {
  return neighborCellsMap.reduce((numNeighbors, [dx, dy]) => {
    return (
      numNeighbors + (cells[rowIndex + dy]?.[cellIndex + dx]?.isAlive ? 1 : 0)
    )
  }, 0)
}

function countOldNeighbors(cells, rowIndex, cellIndex) {
  return neighborCellsMap.reduce((numNeighbors, [dx, dy]) => {
    return (
      numNeighbors +
      (cells[rowIndex + dy]?.[cellIndex + dx]?.lifetime > 20 ? 1 : 0)
    )
  }, 0)
}
