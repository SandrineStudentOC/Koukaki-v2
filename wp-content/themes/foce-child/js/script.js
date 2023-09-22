

// FADE IN TITRES

// on crée l'observer pour titre histoire
const observerStorytitle = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const titre = entry.target.querySelector('.story-span')

        if (entry.isIntersecting ) { 
            titre.classList.add ('story-span__animation');
            return;
        }
        titre.classList.remove('story-span__animation')
    }); 

},{
    threshold: 0.9
}
);

observerStorytitle.observe(document.querySelector(".story__titre"));


// on crée l'observer pour titre studio
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

// on crée l'observer pour section story et studio

const ratio = .15
const options = {
  root: null,
  rootMargin: '0px' ,
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add ('animateSection-visible')
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver (handleIntersect, options)
document.querySelectorAll('.animateSection').forEach(function (r) {
  observer.observe(r)
})


// accélération des fleurs au scroll

const root = document.documentElement;
let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;
    root.style.setProperty("--rotation", "5s");
    
    setTimeout(() => {
      isScrolling = false;
      root.style.setProperty("--rotation", "20s");
    }, 600);
  }
});

/*
const element = document.querySelector('.story__titre::after'); // Sélectionne l'élément animé

window.addEventListener('scroll', function() {
  const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight); // Calcule le pourcentage de défilement

  const animationSpeed = 5 - scroll * 4; // Ajuste la vitesse de l'animation en fonction du défilement

  element.style.animationDuration = `${animationSpeed}s`; // Applique la nouvelle durée de l'animation
});
*/

// Slide Swiper Coverflow

const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  effect: "coverflow",
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
   delay: 500,
  },
  loop: true,
});


// Ouverture du menu burger au clic sur la croix

const navMenu = document.querySelector(".nav");
const links = document.querySelectorAll(".nav__liste li");

icons.addEventListener("click",()=> {
  navMenu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});