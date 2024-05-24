document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Gracias, ${name}. Tu mensaje ha sido enviado.`);
            form.reset();
        } else {
            alert('Por favor, completa todos los campos del formulario.');
        }
    });

    // Example of handling project clicks (optional feature)
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            alert(`Has seleccionado el ${this.querySelector('h3').textContent}.`);
        });
    });
});
