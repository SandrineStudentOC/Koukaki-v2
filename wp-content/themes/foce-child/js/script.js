// on crée l'observer pour titre histoire
const observerStory = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const titre = entry.target.querySelector('.story-span')

        if (entry.isIntersecting ) { 
            titre.classList.add ('story-span__animation');
            return;
        }
        titre.classList.remove('story-span__animation')
    }); 

},{
    threshold: 0.7
}
);

observerStory.observe(document.querySelector(".story__titre"))


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
  threshold: 0.7
}
);

observerStudio.observe(document.querySelector(".studio__titre"))


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
const root = document.documentElement;

window.addEventListener("scroll", () => {
  var vertical = -1;
  setInterval(function () {
    if (window.scrollY !== vertical) {
      vertical = window.scrollY;
      root.style.setProperty("--rotation", "5s");
    } else {
      root.style.setProperty("--rotation", "20s");
    }
  }, 600);
});*/

// Slide Swiper Coverflow
const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  effect: "coverflow",
  //loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  //slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});


