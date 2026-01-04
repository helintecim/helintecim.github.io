document.addEventListener('DOMContentLoaded', () => {
    // SSS Akordeon
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if(question){
            question.addEventListener('click', () => {
                faqItems.forEach(i => { if(i !== item) i.classList.remove('active'); });
                item.classList.toggle('active');
            });
        }
    });

    // Mobil Menü
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    if(burger) {
        burger.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '60px';
            nav.style.right = '0';
            nav.style.width = '100%';
            nav.style.background = 'white';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
        });
    }

    // Form
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Mesajınız bize ulaştı. Teşekkürler!");
            form.reset();
        });
    }
});