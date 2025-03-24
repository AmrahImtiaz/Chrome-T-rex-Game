const dino = document.getElementById('t-rex')
const cactus = document.getElementById('cactus')

function jump(){
    if(!dino.classList.contains('jump')){
        dino.classList.add('jump')
    
    setTimeout(()=>{
        dino.classList.remove('jump');
        },700)
    }
}

document.addEventListener('keydown',function(event){
    if(event.code === 'Space' || event.code === 'ArrowUp'){
        jump()
    }
})

let isAlive = setInterval (function(){
    let dinoPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('top')) 
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    if (cactusLeft > 0 && cactusLeft < 50 && dinoPosition >= 500) { 
        alert("Game Over!"); // Stop the game
    }
},10)