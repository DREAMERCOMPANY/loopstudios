//prevenir eventos en la etiqueta a

/* document.addEventListener('DOMContentLoaded', () => {
    
    function preventLinkEvent(){
        const links = document.querySelectorAll('a')

        links.forEach((link)=>{
            link.addEventListener('click', (e)=>{
                e.preventDefault()
            })
        })
    }
    preventLinkEvent()

}); */


document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn')
    const menu = document.getElementById('menu')
    btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        navToggle()
    });

    function navToggle(){
        btn.classList.toggle('open')
        menu.classList.toggle('flex')
        menu.classList.toggle('hidden')
    }

    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a'); // Encuentra el elemento <a> más cercano en el árbol
        if (link && link.tagName === 'A') {
            e.preventDefault();
            console.log(`Se hizo clic en el enlace: ${link.textContent.trim()}`);
        }

    });

});


