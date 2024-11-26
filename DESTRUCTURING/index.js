const generatePerson = () => {
    const alfabeto = ["a", "b", "c", "d", "e", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let firstname = "";
    
    for(let i = 0; i < 5; i++) {
        if (i == 0) {
            firstname = alfabeto[Math.floor(Math.random() * alfabeto.length)].toUpperCase();
        } else {
            firstname += alfabeto[Math.floor(Math.random() * alfabeto.length)].toLowerCase();
        }
    }
    
    let lastname = "";
    
    for(let i = 0; i < 5; i++) {
        if (i == 0) {
            lastname = alfabeto[Math.floor(Math.random() * alfabeto.length)].toUpperCase();
        } else {
            lastname += alfabeto[Math.floor(Math.random() * alfabeto.length)].toLowerCase();
        }
    }
    
return {nome: firstname, sobrenome: lastname };    
}

const {nome, sobrenome} = generatePerson();

const Pessoa = {
    nome: nome,
    sobrenome: sobrenome
}

console.log(`Nome: ${nome}, Sobrenome: ${sobrenome}`);

// Spread operator

//...

const lazeres = [ 'video game', 'cantar', 'academia']

const novoslazeres = ['ler', 'desenhar']

const mergedlazers = [...lazeres, ...novoslazeres]

console.log(mergedlazers);

// objetos

const credenciais = {
    login: 'abcd',
    senha: 1234
}

const user = {...Pessoa, ...credenciais}

console.log(user);
