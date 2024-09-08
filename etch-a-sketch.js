const container = document.querySelector("#container")

const gridSize = document.querySelector("#size");

function createGrids(size){
    while (container.firstChild) {
        container.firstChild.remove()
    }

    let width = container.clientWidth / size;
    let height = container.clientHeight / size;
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
            grid.style.backgroundColor = "purple"
            console.log(container.clientWidth)
        })
    }
    
}

createGrids(16);


gridSize.addEventListener('keypress' , (event) => {
    if(event.key === "Enter"){
        createGrids(gridSize.value)
    }
})
