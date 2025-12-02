// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Funcionalidad para el formulario de contacto
document.getElementById('infoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validación básica
    if (!nombre || !email) {
        alert('Por favor, complete al menos los campos de nombre y correo electrónico.');
        return;
    }
    
    // Simular envío del formulario
    alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud de información. Nos pondremos en contacto contigo pronto.`);
    
    // Limpiar formulario
    this.reset();
});

// Funcionalidad para botones de compartir
document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.getAttribute('data-platform');
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        const text = encodeURIComponent('¡Mira este increíble programa de Bachillerato Técnico en Informática!');
        
        let shareUrl;
        
        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${text} ${url}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
            default:
                return;
        }
        
        // Abrir ventana para compartir
        window.open(shareUrl, '_blank', 'width=600,height=400');
    });
});

// Animación al hacer scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.programa-card, .beneficios-content, .feed, .contacto-content').forEach(el => {
    observer.observe(el);
});

// Añadir clase de animación después de que se cargue la página
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Efecto de parallax para la sección hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});