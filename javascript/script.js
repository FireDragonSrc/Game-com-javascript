const mario = document.querySelector('.mario');
const inimigo = document.querySelector('.pipe');
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
const loop = setInterval(() =>{
    const pipePosition = inimigo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if(pipePosition < 120 && pipePosition > 0 && marioPosition < 90){
        inimigo.style.animation = 'none';
        inimigo.style.left = `${inimigo}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = '/Gif/morte.gif'
        clearInterval(loop);
       setInterval(() => {window.location.reload();},1500)
    }
} ,10)
document.addEventListener('keydown', jump);