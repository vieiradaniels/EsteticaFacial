document.addEventListener('DOMContentLoaded', function () {
    const images = [
        {
            src: 'imagens/facialSpa.jpg',
            alt: 'Limpeza de pele',
        },
        {
            src: 'imagens/spaFacial.jpg',
            alt: 'Tratamento facial',
        },
        {
            src: 'imagens/beleza.png',
            alt: 'Beleza',
        }

    ];

    let currentImageIndex = 0;
    const imageElement = document.getElementById('carousel-image');

    function changeImage() {

        // Altera a imagem atual
        const currentImage = images[currentImageIndex];
        imageElement.src = currentImage.src;
        imageElement.alt = currentImage.alt;

        // Incrementa o índice ou reinicia se atingir o final do array
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeImage, 7000);

    window.scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Exibir ou ocultar botão de voltar ao topo com base no rolar da página
    const scrollTopButton = document.getElementById('scrollTopButton');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

});

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}