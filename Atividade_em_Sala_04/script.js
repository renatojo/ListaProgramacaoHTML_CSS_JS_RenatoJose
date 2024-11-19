document.getElementById("themeToogle").addEventListener("click", () => {
    if (!document.body.classList.item('dark')) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
});
