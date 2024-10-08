const container = document.querySelector("#container")

const gridSize = document.querySelector("#size")

const gridColour = document.querySelector("#colour")
let colour = "black"

const erase = document.querySelector("#erase")

const clear = document.querySelector("#clear")

function createGrids(size){
    while (container.firstChild) {
        container.firstChild.remove()
    }

    let width = container.clientWidth / size
    let height = container.clientHeight / size
    let gridSize = size*size

    for(let i=0; i<gridSize; i++){
        const grid = document.createElement("div")
        grid.classList.add("grid")
        grid.style.width = `${width}px`
        grid.style.height = `${height}px`
        container.appendChild(grid)
    }

    for(const grid of container.children){
        grid.addEventListener('mouseenter', () => {
            grid.style.backgroundColor = colour
        })
    }
    
}

createGrids(16);

gridSize.addEventListener('keypress' , (event) => {
    if(event.key === "Enter"){
        createGrids(gridSize.value)
    }
})

gridColour.addEventListener('input', () => {
    colour = gridColour.value
})

erase.addEventListener('click', () => {
    colour = "white"
})

clear.addEventListener('click', () =>{
    for(const grid of container.children){
        grid.style.backgroundColor = "white"
    }
})
