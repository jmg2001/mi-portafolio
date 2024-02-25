function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}   


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    function updateSectionsVisibility() {
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.5 || index === 0) {
                section.querySelector('.content').classList.add('show');
            } else {
                section.querySelector('.content').classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', updateSectionsVisibility);

    // Llama a la función para asegurarte de que la primera sección esté visible al cargar la página
    updateSectionsVisibility();
});


let lastScrollTop = 0;
let isNavbarHidden = false;

window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && !isNavbarHidden) {
        // Desplazamiento hacia abajo y la barra de navegación no está oculta
        navbar.classList.add('hidden');
        isNavbarHidden = true;
    } else if (currentScroll <= lastScrollTop && isNavbarHidden) {
        // Desplazamiento hacia arriba y la barra de navegación está oculta
        navbar.classList.remove('hidden');
        isNavbarHidden = false;
    }

    lastScrollTop = currentScroll;
});

document.addEventListener('mousemove', function(event) {
    let navbar = document.getElementById('navbar');
    if (event.clientY < 50 && isNavbarHidden) {
        // Si el mouse está cerca de la parte superior y la barra de navegación está oculta, mostrarla
        navbar.classList.remove('hidden');
        isNavbarHidden = false;
    } // else if (event.clientY > 75 && !isNavbarHidden) {
    //     // Si el mouse está alejado de la parte superior y la barra de navegación no está oculta, ocultarla
    //     navbar.classList.add('hidden');
    //     isNavbarHidden = true;
    // }
});


document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('.navbar ul li a');

    // Iteramos sobre cada enlace y agregamos un eventListener para el clic
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Evitamos el comportamiento predeterminado del enlace (salto brusco a la sección)
            event.preventDefault();
            
            // Obtenemos el valor del atributo href del enlace (el ID de la sección a la que nos queremos desplazar)
            const targetId = link.getAttribute('href');

            // Obtenemos la posición vertical de la sección a la que nos queremos desplazar
            const targetPosition = document.querySelector(targetId).offsetTop;

            // Realizamos el desplazamiento suave utilizando la función scrollTo
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Animación suave
            });
        });
    });
});