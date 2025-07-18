document.documentElement.style.scrollBehavior = 'smooth';

// Animate .project items on scroll (fade-in from bottom)
const projects = document.querySelectorAll('.project');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

projects.forEach(project => {
    project.classList.add('fade-in');
    observer.observe(project);
});