/*botao aceitar cookies*/ 
document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
});

/*Contatos*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("whatsapp-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("message").value;

            const numeroWhatsApp = "556193378783"; 

            const texto = `Olá, meu nome é *${nome}*\nEmail: ${email}\nGostaria de falar sobre:\n${mensagem}`;
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

            window.open(url, "_blank");
        });
    }
});

/* Menu hamburguer */
document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    this.classList.toggle("active");
    menu.classList.toggle("show");
  });