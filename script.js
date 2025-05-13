const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const body = document.querySelector('body');
const gradientText = document.querySelector('#gradientText')

body.addEventListener('input', function(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    gradientText.textContent = body.style.background;    
})