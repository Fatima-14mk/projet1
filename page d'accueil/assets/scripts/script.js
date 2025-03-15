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
 /*debut slider*/

/*fin slader*/