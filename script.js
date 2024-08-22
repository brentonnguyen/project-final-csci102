
function changeButtonColor(event) {
    const button = event.target; 
    button.style.backgroundColor = 'lightgreen'; 
    button.innerText = '*sends user to designated page/link*'; 
}


const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', changeButtonColor);
});
