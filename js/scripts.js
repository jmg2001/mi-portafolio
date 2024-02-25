/*------------------ Funcion para filtrar los proyectos -----------------*/
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

/*------------------ Ocultamos el contenido si no se esta viendo -----------------*/
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


/*------------------ Ocultar la barra de navegación si scrolleamos hacia abajo -----------------*/
let lastScrollTop = 0;
let isNavbarHidden = false;

window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    var windowWidth = window.innerWidth;
    
    if (windowWidth > 768){
        if (currentScroll > lastScrollTop && !isNavbarHidden) {
            // Desplazamiento hacia abajo y la barra de navegación no está oculta
            navbar.classList.add('hidden');
            isNavbarHidden = true;
        } else if (currentScroll <= lastScrollTop && isNavbarHidden) {
            // Desplazamiento hacia arriba y la barra de navegación está oculta
            navbar.classList.remove('hidden');
            isNavbarHidden = false;
        }
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


/*------------------ Cramos la animación de scroll cuando se selecciona algun elemento de la navbar -----------------*/
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('.navbar ul li a');
    let navbar = document.getElementById('navbar');

    // Iteramos sobre cada enlace y agregamos un eventListener para el clic
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Evitamos el comportamiento predeterminado del enlace (salto brusco a la sección)
            event.preventDefault();
            navbar.classList.add('hidden');
            isNavbarHidden = true;
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

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los enlaces de la barra de navegación
    const navLinks2 = document.querySelectorAll('.bubble-menu a');

    // Iteramos sobre cada enlace y agregamos un eventListener para el clic
    navLinks2.forEach(link => {
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

    /*------------------ Ocultar bubble menu al seleccionar algo -----------------*/
    var menuItems = document.querySelectorAll('.bubble-menu  a');
    // Iterar sobre cada elemento del menú y agregar un controlador de eventos clic
    menuItems.forEach(function(item) {
        // Obtener todos los elementos del menú
        item.addEventListener('click', function() {
            // Ocultar el menú al hacer clic en una opción del menú
            var menu = document.querySelector('.bubble-menu.active');
            menu.classList.remove('active');
        });
    });
});

/*------------------ Mostrar el bubble menu -----------------*/
function toggleNav() {
    var bubbleMenu = document.querySelector('.bubble-menu');
    bubbleMenu.classList.toggle('active');
    navbar.classList.add('hidden');
}


/*------------------ Ocultar la barra negra de la navbar -----------------*/


window.addEventListener('resize', function() {
    // Obtener el ancho de la ventana
    var windowWidth = window.innerWidth;
    let navbar = document.getElementById('navbar');

    // Comprobar si la ventana se ha hecho lo suficientemente pequeña
    if (windowWidth <= 768) {
        // Realizar las modificaciones necesarias para pantallas pequeñas
        navbar.classList.add('hidden');
    }else {
        navbar.classList.remove('hidden');
    }
});

window.addEventListener('load', function() {
    var initialWidth = window.innerWidth;
    if (initialWidth <= 768) {
        // Realizar las modificaciones necesarias para pantallas pequeñas
        navbar.classList.add('hidden');
    }
});

