let addbtn = document.querySelector('#addb');
let subbtn = document.querySelector('#sub');
let input = document.querySelector('#intinput');

addbtn.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
})

subbtn.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;
})