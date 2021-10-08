const links = document.querySelectorAll('.header__menu-link');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const ID = e.target.getAttribute('href').substr(1);

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});