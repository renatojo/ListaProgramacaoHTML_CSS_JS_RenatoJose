const divForms = document.getElementById('forms');
const inputs = divForms.querySelectorAll('input');
const btn = divForms.querySelector('button');
console.log(inputs);

btn.addEventListener('click', () => {
    const newTag = document.createElement('p');
    newTag.innerHTML = `As operações com base nos valores digitados são: \n
    - Soma: ${inputs[0].value} + ${inputs[1].value} = ${inputs[0].value + inputs[1].value} \n
    - Subtração: ${inputs[0].value} - ${inputs[1].value} = ${inputs[0].value - inputs[1].value} \n
    - Multiplicação: ${inputs[0].value} * ${inputs[1].value} = ${inputs[0].value * inputs[1].value} \n
    - Divisão: ${inputs[0].value} / ${inputs[1].value} = ${inputs[0].value / inputs[1].value} \n`;
    divForms.appendChild(newTag);   
    

})
