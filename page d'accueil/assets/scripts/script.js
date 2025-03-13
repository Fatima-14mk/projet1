document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 300);
    });

    const aboutSection = document.querySelector("#about");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    observer.observe(aboutSection);
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
  
    elements.forEach((el, index = 100) => {
      // setTimeout(() => {
      el.classList.add('show');
      // }, index * 300);
    });
  
    const aboutSection = document.querySelector('#about');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSection.classList.add('show');
          } else {
            aboutSection.classList.remove('show');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px 0px 0px' }
    );
  
    observer.observe(aboutSection);
  });
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("signinModal");
    const btn = document.querySelector(".register a");
    const close = document.querySelector(".close");
  
    // Quand on clique sur "Sign in as..", on affiche le modal
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "flex";
    });
  
    // Quand on clique sur la croix, on ferme le modal
    close.addEventListener("click", () => {
        modal.style.display = "none";
    });
  
    // Fermer le modal si on clique en dehors
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
  });
  