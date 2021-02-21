const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

//create block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }     
}

//all of the blocks
const blocks = [
    new block(10,270)
]

//draw all of the blocks
function addBlock() {
    for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0]
    block.style.bottom = '50px'
    grid.appendChild(block)
    }
}

addBlock()
