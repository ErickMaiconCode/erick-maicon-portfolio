// =======================================================
// VARIÁVEIS GLOBAIS - Seleção de elementos do DOM
// =======================================================

// Elementos da navegação mobile
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');
const navIcon = mobileBtn ? mobileBtn.querySelector('i') : null;

// Elementos do alternador de tema (dark/light)
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;

// Elementos do formulário de contato e modal de sucesso
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('success-modal');
const lottiePlayer = document.getElementById('lottie-success-player');

// =======================================================
// FUNÇÕES GLOBAIS - Acessíveis pelo HTML via onclick
// =======================================================

// Função para fechar o modal de sucesso
function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        // Para a animação Lottie para reiniciar na próxima vez
        if (lottiePlayer) {
            lottiePlayer.stop();
        }
    }
}

// Função para fechar o menu mobile
function closeMenu() {
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navIcon) navIcon.classList.replace('ph-x', 'ph-list');
        document.body.style.overflow = 'auto';
    }
}

// Função auxiliar para exibir erros de validação
function setError(input, msg) {
    const errorSpan = input.parentElement.querySelector('.error-msg');
    if (errorSpan) errorSpan.textContent = msg;
    input.style.borderColor = '#ef4444';
}

// Função para carregar tema salvo ou detectar preferência do sistema
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.classList.replace('ph-moon', 'ph-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.classList.replace('ph-sun', 'ph-moon');
    }
}


// =======================================================
// INICIALIZAÇÃO - Executado quando o DOM carrega
// =======================================================
document.addEventListener('DOMContentLoaded', () => {

    // EFEITO TYPEWRITER - Animação de digitação no título
    const roles = ["Mobile iOS", "Java Backend", "React Frontend"];
    const typingElement = document.getElementById("typing-text");
    
    if (typingElement) {
        let roleIndex = 0;      // Índice da palavra atual
        let charIndex = 0;      // Índice do caractere atual
        let isDeleting = false; // Estado: digitando ou apagando

        function typeWriter() {
            const currentRole = roles[roleIndex];
            
            // Lógica de digitação/apagamento
            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            // Velocidades diferentes para digitar/apagar
            let typeSpeed = isDeleting ? 50 : 100;

            // Controle de estados da animação
            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000; // Pausa após completar palavra
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length; // Próxima palavra
                typeSpeed = 500;
            }

            setTimeout(typeWriter, typeSpeed);
        }
        typeWriter();
    }

    // CONTADOR DE VISITAS - Usando localStorage
    const visitCountElement = document.getElementById('visit-count');
    if (visitCountElement) {
        let count = localStorage.getItem('visitCount') || 0;
        count++;
        localStorage.setItem('visitCount', count);
        visitCountElement.textContent = count;
    }
});


// =======================================================
// LISTENERS GLOBAIS (NÃO dependem do DOMContentLoaded)
// =======================================================

// MENU MOBILE - Controle de abertura/fechamento
if (mobileBtn && navMenu) {
    // Toggle do menu mobile
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            navIcon.classList.replace('ph-list', 'ph-x');
            document.body.style.overflow = 'hidden'; // Bloqueia scroll
        } else {
            navIcon.classList.replace('ph-x', 'ph-list');
            document.body.style.overflow = 'auto';
        }
    });

    // Fechar menu ao clicar fora (overlay)
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !mobileBtn.contains(e.target)) {
            closeMenu();
        }
    });
}

// ALTERNADOR DE TEMA - Dark/Light mode
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Aplica o novo tema
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Salva preferência
        
        // Atualiza ícone do botão
        if (newTheme === 'dark') {
            themeIcon.classList.replace('ph-moon', 'ph-sun');
        } else {
            themeIcon.classList.replace('ph-sun', 'ph-moon');
        }
    });
}
loadTheme(); // Carrega tema salvo na inicialização

// BOTÃO VOLTAR AO TOPO - Aparece após scroll
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    // Mostra/esconde botão baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Scroll suave para o topo
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ACCORDION DOS PROJETOS - Expandir/recolher detalhes
const toggleButtons = document.querySelectorAll('.toggle-details');
toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const detailsDiv = document.getElementById(targetId);
        const icon = btn.querySelector('i');
        
        // Toggle da visibilidade dos detalhes
        if (detailsDiv.classList.contains('hidden')) {
            detailsDiv.classList.remove('hidden');
            btn.childNodes[0].nodeValue = "Ocultar detalhes ";
            icon.classList.replace('ph-caret-down', 'ph-caret-up');
        } else {
            detailsDiv.classList.add('hidden');
            btn.childNodes[0].nodeValue = "Ver mais detalhes ";
            icon.classList.replace('ph-caret-up', 'ph-caret-down');
        }
    });
});

// CONTROLE DA ANIMAÇÃO LOTTIE - Evita loop infinito
if (lottiePlayer) {
    // Para a animação quando completa
    lottiePlayer.addEventListener('complete', () => {
        lottiePlayer.pause(); // Garante que pare no último frame
    });
}


// =======================================================
// FORMULÁRIO DE CONTATO - Validação e modal de sucesso
// =======================================================
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede envio real do formulário
        
        // Captura dos campos do formulário
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;

        // Limpa erros anteriores
        document.querySelectorAll('.error-msg').forEach(span => span.textContent = '');
        document.querySelectorAll('input, textarea').forEach(field => field.style.borderColor = 'var(--card-border)');

        // VALIDAÇÕES DOS CAMPOS
        if (!name.value.trim()) { 
            setError(name, 'Por favor, digite seu nome.'); 
            isValid = false; 
        }
        
        // Validação de email com regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) { 
            setError(email, 'Digite um e-mail válido.'); 
            isValid = false; 
        }
        
        if (message.value.trim().length < 5) { 
            setError(message, 'A mensagem precisa ter pelo menos 5 letras.'); 
            isValid = false; 
        }

        // Se todas as validações passaram, exibe modal de sucesso
        if (isValid) {
            if (modal) {
                // Insere nome do usuário no modal
                const senderNameValue = document.getElementById('name').value.trim();
                document.getElementById('sender-name-display').textContent = senderNameValue;
                
                modal.classList.add('active'); 
                contactForm.reset(); // Limpa o formulário
                
                // Reinicia animação Lottie
                if (lottiePlayer) {
                    lottiePlayer.stop(); 
                    lottiePlayer.play(); 
                }
            } else {
                alert('Mensagem enviada com sucesso! (Modal não encontrado)'); 
            }
        }
    });
}