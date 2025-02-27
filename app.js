// animation-timeline: view() replacement

document.addEventListener("DOMContentLoaded", function() {
    if(window.innerWidth <= 768) {
        const elements = document.querySelectorAll(".scrollBlock");
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        }, {threshold: 0.3});
    
        elements.forEach(el => observer.observe(el));
    }
})