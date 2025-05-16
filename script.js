// Esperar a que cargue todo el contenido HTML
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el botón del eslogan
    const sloganButton = document.querySelector("#slogan button");
  
    // Agregar evento de clic al botón
    if (sloganButton) {
      sloganButton.addEventListener("click", function () {
        alert("¡Gracias por visitarnos!");
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("#organic .card");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.3
    });
  
    cards.forEach(card => {
      card.classList.add("hidden"); // clase inicial oculta
      observer.observe(card);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const botonOrganic = document.querySelector("#organic button");
  
    botonOrganic.addEventListener("click", () => {
      alert("¡Explora nuestra colección Organic!");
      // O podrías redirigir a una página específica:
      // window.location.href = "organic.html";
    });
  });

  document.querySelectorAll("#organic .card").forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });
  
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Animación scroll en LOVEMADE
    const cardsLovemade = document.querySelectorAll("#Lovemade .card");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
  
    cardsLovemade.forEach(card => observer.observe(card));
  
    // Botón VER LOVEMADE
    const lovemadeBtn = document.querySelector("#Lovemade button");
    lovemadeBtn.addEventListener("click", () => {
      alert("Explora todos los productos Lovemade en nuestro catálogo 📖");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Botón VER PEARLS
    const pearlsBtn = document.querySelector("#pearls button");
    pearlsBtn.addEventListener("click", () => {
      alert("Explora todos los productos Pearls en nuestro catálogo 📖");
    });
  
    // Botón VER LOVEMADE
    const lovemadeBtn = document.querySelector("#Lovemade button");
    lovemadeBtn.addEventListener("click", () => {
      alert("Explora todos los productos Lovemade en nuestro catálogo 📖");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
  
    const observerOptions = {
      threshold: 0.1 // Cuando al menos el 10% del card está visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Deja de observar cuando ya apareció
        }
      });
    }, observerOptions);
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });

  // Seleccionamos el elemento h1 de la sección Oferta
const ofertaTexto = document.querySelector('#Oferta h1');

// Definimos el tamaño normal y el tamaño máximo
const normalScale = 1;
const zoomScale = 1.2;

// Duración de cada paso en milisegundos
const duration = 1500;

function zoomIn() {
  ofertaTexto.style.transform = `scale(${zoomScale})`;
  // Después de duration ms, hacer zoom out
  setTimeout(zoomOut, duration);
}

function zoomOut() {
  ofertaTexto.style.transform = `scale(${normalScale})`;
  // Después de duration ms, hacer zoom in
  setTimeout(zoomIn, duration);
}

// Inicializamos el loop de zoom
zoomIn();