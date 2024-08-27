
/*--- Navbar top attachment start */
const navbarView = document.querySelector('.main-navbar');
const carousel = document.querySelector('.carousel');
window.addEventListener("scroll", function() {
    const rect = navbarView.getBoundingClientRect();
    const carouselRect = carousel.getBoundingClientRect();
    console.log( " Window height: " + window.innerHeight + " carouselRect.top: " + carouselRect.top);
    if(rect.bottom <= 0 && carouselRect.top < 0){
        console.log("Out of View");
        navbarView.style.position = "fixed";
    }
    else if(carouselRect.top == 0){
      console.log("inView");
      navbarView.style.position = "relative";
    }
})

/*--- Navbar top attachment end */

/*--- Logo slide controll start ---*/

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[index].classList.add('active');
  
  // Update the slide number
  slideNumber = index + 1;
  
  document.getElementById("slide-number").innerHTML = slideNumber + "/" + slides.length;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  
  // Pause on hover
  slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
      clearInterval(slideInterval);
    });
  
    slide.addEventListener('mouseout', () => {
      slideInterval = setInterval(nextSlide, 10000);
    });
  });
  
  // Show the first slide initially
  showSlide(currentSlide);
  
  // Change to the next slide every 3 seconds
  let slideInterval = setInterval(nextSlide, 10000);  

/*--- Logo slide controll end ---*/

/* Discription sub menu content management start*/
function showDescription(containerId, descriptionId) {
  const descriptions = document.querySelectorAll('#' + containerId + ' .description');
  descriptions.forEach(description => {
    description.classList.remove('active');
    description.classList.add('inactive');
  });

  const descriptionToShow = document.getElementById(descriptionId);
  descriptionToShow.classList.remove('inactive');
  descriptionToShow.classList.add('active');}

/* Discription sub menu content management end */

/*--- owl-Carousel start ---*/
  $(document).ready(function(){
    $(".sub-menue-content").owlCarousel({
      loop:true,
      margin:30,
      responsiveClass:true,
      autoHeight: true,
      responsive:{
        768:{
          items:2,
          nav:false
        },
        960:{
            items:3,
            nav:false
          },
        1200:{
          items:2,
          nav:true,
          loop:false
        }
      },
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
      
    });

    $(".customer-container").owlCarousel({
      loop:true,
      margin:30,
      responsiveClass:true,
      autoHeight: true,
      responsive:{
        600:{
          items:1,
          nav:false
        },
        650:{
          items:2,
          nav:false
        },
        768:{
          items:2,
          nav:false
        },
        960:{
            items:3,
            nav:false
          },
        1200:{
          items:4,
          nav:true,
          loop:false
        }
      },
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
      
    });

    $(".experties-container").owlCarousel({
      loop:true,
      margin:30,
      responsiveClass:true,
      autoHeight: true,
      responsive:{
        600:{
          items:1,
          nav:false
        },
        700:{
          items:2,
          nav:false
        },
        780:{
          items:2,
          nav:false
        },
        960:{
            items:3,
            nav:false
          },
        1200:{
          items:3,
          nav:true,
          loop:false
        }
      },
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
      
    });

    $(".news-carousels").owlCarousel({
      loop:true,
      margin:30,
      responsiveClass:true,
      autoHeight: true,
      responsive:{
        768:{
          items:2,
          nav:false
        },
        960:{
            items:3,
            nav:false
          },
        1200:{
          items:3,
          nav:true,
          loop:false
        }
      },
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
      
    });

    $(".blogs-carousels").owlCarousel({
      loop:true,
      margin:30,
      responsiveClass:true,
      autoHeight: true,
      responsive:{
        768:{
          items:2,
          nav:false
        },
        960:{
            items:3,
            nav:false
          },
        1200:{
          items:3,
          nav:true,
          loop:false
        }
      },
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
      
    });

    $(".counter-carousel").owlCarousel({
      loop:true,
      margin:30,
      responsiveClass:true,
      autoHeight: true,
      responsive:{
        768:{
          items:2,
          nav:false
        },
        960:{
            items:3,
            nav:false
          },
        1200:{
          items:5,
          nav:true,
          loop:true
        }
      },
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
      
    });

    $(".clients-section").owlCarousel({
      loop:true,
      margin:30,
      responsiveClass:true,
      autoHeight: true,
      responsive:{
        768:{
          items:2,
          nav:false
        },
        960:{
            items:2,
            nav:false
          },
        1200:{
          items:2,
          nav:true,
          loop:true
        }
      },
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
      
    });

    $(".logo-container").owlCarousel({
      responsiveClass:true,
      responsive:{
        768:{
          items:2,
          nav:false
        },
        960:{
            items:2,
            nav:false
          },
        1200:{
          items:7,
          nav:true,
          loop:true
        }
      },
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true
    });
  });
/* owl-Carousel end*/
