const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'black';
        document.body.style.Color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.Color = 'black';
    }
})

