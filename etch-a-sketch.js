const container = document.querySelector("#container")

function createGrids(){
    let width = container.clientWidth / 16;
    console.log(width)
    let height = container.clientHeight / 16;
    let gridSize = 16*16
    for(let i=0; i<gridSize; i++){
        const grid = document.createElement("div")
        grid.classList.add("grid")
        grid.style.width = `${width}px`
        grid.style.height = `${height}px`
        container.appendChild(grid)
    }
}

createGrids();

for(const grid of container.children){
    grid.addEventListener('mouseenter', () => {
        grid.style.backgroundColor = "purple"
        console.log(container.clientWidth)
    })
}

