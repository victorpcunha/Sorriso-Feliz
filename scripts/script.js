document.addEventListener("DOMContentLoaded", function() {
    const loadComponent = (url, placeholderId) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error('Arquivo não encontrado: ' + url);
                    return response.text();
                })
                .then(data => {
                    placeholder.innerHTML = data;
                })
                .catch(error => {
                    console.error('Erro ao carregar o componente:', error);
                    placeholder.innerHTML = `<p style="color:red; text-align:center;">Erro ao carregar ${placeholderId}. Verifique o console.</p>`;
                });
        }
    };

    loadComponent('/components/header.html', 'main-header');
    loadComponent('/components/footer.html', 'main-footer');
});

const setupHamburgerMenu = () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navContainer = document.getElementById('nav-container');

    if (hamburgerBtn && navContainer) {
        hamburgerBtn.addEventListener('click', () => {
            navContainer.classList.toggle('active');
        });
    }
};

setTimeout(setupHamburgerMenu, 2000);


// --- LÓGICA DO CARROSSEL SWIPER ---
// Este código inicializa o Swiper no elemento com a classe .mySwiper
var swiper = new Swiper(".mySwiper", {
  // Efeitos e opções
  effect: "coverflow", // Efeito legal de cartas
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto", // Mostra quantos slides couberem na tela
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // Navegação
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Paginação (as bolinhas)
  pagination: {
    el: ".swiper-pagination",
  },
});