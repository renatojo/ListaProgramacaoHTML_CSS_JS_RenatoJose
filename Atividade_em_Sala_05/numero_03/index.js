const input = document.getElementById('input');
const btn = document.getElementById('btn');
const texto = document.getElementById('texto');

btn.addEventListener('click', () => {
    texto.innerHTML = `
    ${input.value} * 1 = ${input.value * 1} \n
    ${input.value} * 2 = ${input.value * 2} \n
    ${input.value} * 3 = ${input.value * 3} \n
    ${input.value} * 4 = ${input.value * 4} \n
    ${input.value} * 5 = ${input.value * 5} \n
    ${input.value} * 6 = ${input.value * 6} \n
    ${input.value} * 7 = ${input.value * 7} \n
    ${input.value} * 8 = ${input.value * 8} \n
    ${input.value} * 9 = ${input.value * 9} \n
    ${input.value} * 10 = ${input.value * 10} \n`;
})