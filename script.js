const DATA_URL = 'data.json';

let paisesData = [];
let currentSlide = 0;
let slides = [];

// Carrega o JSON
fetch(DATA_URL)
    .then(res => res.json())
    .then(data => {
        paisesData = data;
        initCards();
    })
    .catch(err => console.error('Erro ao carregar paises.json:', err));

function initCards() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const pais = paisesData.find(p => p.id === card.id);
            if (pais) openModal(pais);
        });
    });
}

/* função pesquisa */
const searchInput = document.getElementById('busca');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const paisNome = card.querySelector('h3').textContent.toLowerCase();
            if (paisNome.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
} /* naõ pesquisa */ function clearSearch() {
    if (searchInput) {
        searchInput.value = '';
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }
}



/* Modal */
function openModal(pais) {
    document.getElementById('modal-title').textContent = pais.nome;
    document.getElementById('modal-descricao').textContent = pais.descricao;

    // Imagem principal do país (primeira imagem do slider)
    if (pais.lugares && pais.lugares.length > 0) {
        document.getElementById('modal-image').src = pais.lugares[0].imagem;
    }

    buildSlider(pais.lugares);

    // Botão "Saiba Mais"
    let i = 0;
    const btnSaibaMais = document.getElementById('btn-saiba-mais');
    btnSaibaMais.onclick = () => {
        if (pais.link) {
            window.open(pais.link, '_blank');
            i++;
        }

        if (i >= 0) {
            let fecharModal = document.getElementById('modal-close-btn');
            document.getElementById('modal-overlay').classList.add('active');
            fecharModal.addEventListener('click', () => {
                document.getElementById('modal-overlay').classList.remove('active');
            });
        }


    };

    document.getElementById('modal-overlay').classList.add('active');

}

/* Função para mudar o Slide */
let anteriorSlide = document.querySelector('.prev');
let proximoSlide = document.querySelector('.next');

/* Slide Anterior */
anteriorSlide.addEventListener('click', (e) => {
    e.preventDefault();
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

/* Slide Posterior */
proximoSlide.addEventListener('click', (e) => {
    e.preventDefault();
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

/* Fechar Modal */
let fecharModal = document.getElementById('modal-close-btn');
document.getElementById('modal-overlay').classList.add('active');
fecharModal.addEventListener('click', () => {
    document.getElementById('modal-overlay').classList.remove('active');
});


/* Fechar Modal ao clicar fora */
document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
        document.getElementById('modal-overlay').classList.remove('active');
    }
});


/* Slider */
function buildSlider(lugares) {
    const track = document.getElementById('slider-track');
    const dotsContainer = document.getElementById('slider-dots');
    track.innerHTML = '';
    dotsContainer.innerHTML = '';
    currentSlide = 0;
    slides = lugares;

    lugares.forEach((lugar, i) => {
        // Slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `
                    <img src="${lugar.imagem}" alt="${lugar.nome}" loading="lazy">
                    <div class="slide-caption">
                        <strong>${lugar.nome}</strong>
                        <span>${lugar.descricao}</span>
                    </div>
                `;
        track.appendChild(slide);

        // Dot
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    updateSlider();
}

/* Pegar o número do Slide */
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

/* Atualizar o Slider  de froma transição sem clicar*/
let sliderInterval = setInterval(() => {
    if (slides.length > 0) {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }
}, 5000);

/* Atualizar o Slider  de froma transição com clicar*/
function updateSlider() {
    const track = document.getElementById('slider-track');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });

    // Atualiza imagem principal ao mudar slide
    if (slides[currentSlide]) {
        document.getElementById('modal-image').src = slides[currentSlide].imagem;
    }

}
