// FADE IN TITRES

// On crée l'observer pour le titre "histoire"
const observerStorytitle = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const titre = entry.target.querySelector('.story-span')

        // Ajoute la classe d'animation si l'élément est visible
        if (entry.isIntersecting ) { 
            titre.classList.add ('story-span__animation');
            return;
        }

        // Retire la classe d'animation si l'élément n'est pas visible
        titre.classList.remove('story-span__animation')
    }); 

},{
    threshold: 0.9 // Seuil de visibilité pour déclencher l'animation
}
);

// Observe l'élément "histoire"
observerStorytitle.observe(document.querySelector(".story__titre"));


// On crée l'observer pour le titre "studio"
const observerStudio = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      const titre = entry.target.querySelector('.studio-span')

      if (entry.isIntersecting ) { 
          titre.classList.add ('studio-span__animation');
          return;
      }
      titre.classList.remove('studio-span__animation')
  }); 

},{
  threshold: 0.9
}
);

observerStudio.observe(document.querySelector(".studio__titre"));

// FADE IN SECTIONS

// On crée l'observer pour les sections "story" et "studio"

const ratio = 0.15; // Ratio de visibilité pour déclencher l'animation

// Options pour l'IntersectionObserver
const options = {
  root: null,
  rootMargin: '0px' ,
  threshold: ratio
};

// Fonction appelée lorsqu'une section est visible
const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > ratio) {
      // Ajoute la classe d'animation si la section est visible
      entry.target.classList.add ('animateSection-visible'); 
      observer.unobserve(entry.target);// Arrête l'observation pour cette section
    }
  });
};

// Création de l'IntersectionObserver pour les sections
const observer = new IntersectionObserver (handleIntersect, options); 

// Observer toutes les sections avec la classe 'animateSection'
document.querySelectorAll('.animateSection').forEach(element => {
  observer.observe(element);
});


// accélération des fleurs au scroll

const root = document.documentElement;
let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;
     // Change la propriété de rotation au scroll
    root.style.setProperty("--rotation", "5s");
    
    setTimeout(() => {
      isScrolling = false;
      // Rétablit la propriété de rotation après un délai
      root.style.setProperty("--rotation", "20s");
    }, 300);
  }
});


// Slide Swiper Coverflow

const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  centeredSlides: true,
   grabCursor: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 80,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
   autoplay: {
   delay: 2000,
  },
  loop: true,
});


// Ouverture du menu burger au clic sur la croix

// Sélectionne l'élément du menu et tous les liens dans le menu
const navMenu = document.querySelector(".nav");
const links = document.querySelectorAll(".nav__liste li");

// Gestionnaire d'événement pour le clic sur l'icône (burger)
icons.addEventListener("click",()=> {
  // Active/désactive la classe "active" sur le menu au clic
  navMenu.classList.toggle("active");
});

// Gestionnaire d'événement pour le clic sur un lien dans le menu
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Désactive la classe "active" sur le menu au clic sur un lien
    navMenu.classList.remove("active");
  });
});