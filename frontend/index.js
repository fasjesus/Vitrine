// Arquivo com as funções utilizadas para carregar includes, validar formulários e afins.

const currentPage = window.location.pathname;

if (currentPage.includes('form.html')) {
    setupFormValidation(); 
}

// Função para carregar o HTML do header e footer
function loadHTML(elementId, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(err => console.error(`Erro ao carregar o arquivo ${file}:`, err));
}

//loadHTML('header', '../includes/header.html');
loadHTML('footer', '../includes/footer.html'); 

// Função para validar o formulário
function setupFormValidation() {
    const form = document.getElementById('form');
    if (form) { 
        form.addEventListener('submit', function (e) {
            if (!this.checkValidity()) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
            window.location.href = "home.html";
        });
    }
}