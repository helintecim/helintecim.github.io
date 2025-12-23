document.addEventListener('DOMContentLoaded', () => {
    
    // SSS Akordeon Özelliği
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Diğerlerini kapat (opsiyonel, istersen kaldırabilirsin)
            faqItems.forEach(i => {
                if(i !== item) i.classList.remove('active');
            });
            // Tıklananı aç/kapat
            item.classList.toggle('active');
        });
    });

    // İletişim Formu Kontrolü
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Mesajınız bize ulaştı. Farkındalık hareketine katıldığınız için teşekkürler!");
            form.reset();
        });
    }

    // Mobil Menü (Burger)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if(burger) {
        burger.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '70px';
            nav.style.right = '0';
            nav.style.width = '100%';
            nav.style.background = 'white';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
        });
    }
});