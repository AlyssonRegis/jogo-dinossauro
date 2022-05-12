const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isjumping = false;
let position = 0;

function handlekeyUp(event){
    if(event.keyCode ===32){
        if(!isjumping){
       jump();
        }
    }
}
function jump(){

let upInterval = setInterval(() =>{
    
    if(position >= 150){
        clearInterval(upInterval);
        //descendo
       
      let  downInterval = setInterval(()=>{
          if(position <= 0){
              clearInterval(downInterval);
              isjumping = false;
          }else{
            position -=20;
            dino.style.bottom = position + 'px';

          }
           
        },20);
    }else{
    position += 20;

    dino.style.bottom = position + 'px' ;
}
},20);

}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    console.log(randomTime);


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(()=>{
        cactusPosition -= 10;
        cactus.style.left= cactusPosition + 'px';

        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
          // game over
          clearInterval(leftInterval);
          document.body.innerHTML = '<h1 class =" game-over"> fim de jogo</h1>';
           }else{   cactusPosition -= 10;
        cactus.style.left= cactusPosition + 'px';

        }
    },20);
    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handlekeyUp);