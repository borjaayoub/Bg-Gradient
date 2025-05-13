const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const body = document.querySelector('body');
const css = document.querySelector('#css')

body.addEventListener('input', function(){
    console.log(body.style.backgroundImage);

    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background;
})


