let prevScrollPos = window.pageYOffset;
const scrollThreshold = 10;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const scrollDifference = prevScrollPos - currentScrollPos;

  if (Math.abs(scrollDifference) > scrollThreshold) {
    if (scrollDifference > 0) {
      document.getElementById("main-head").classList.remove("scroll-down");
      document.getElementById("main-head").classList.add("scroll-up");
    } else {
      // Scrolling down
      document.getElementById("main-head").classList.remove("scroll-up");
      document.getElementById("main-head").classList.add("scroll-down");
    }

    prevScrollPos = currentScrollPos;
  }
};
$("#main-head").on('click', 'li', function () {
  $("#main-head li.active").removeClass("active");
  // adding classname 'active' to current click li 
  $(this).addClass("active");
  document.documentElement.classList.toggle("menu-open");
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper1 = new Swiper(".swiper-container-category", {
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },

  breakpoints: {
    slidesPerView: 1,
    spaceBetween: 10,
    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
      
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

var swiper1 = new Swiper(".swiper-container-events", {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 15,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1500: {
      slidesPerView: 3,
      spaceBetween: 66,
    },
    1450: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
/* Updated Sec ends*/


//animation
// just "anim" in your element
// window.addEventListener("load", () => {
function isInViewport(el, gap) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let height = el.offsetHeight;
  // console.log(el.offsetParent);
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return (
    window.pageYOffset + window.innerHeight - gap >= top &&
    window.pageYOffset <= height + top
  );
}

let getElem = document.querySelectorAll(".anime");
//please change as per the design
const breakPoints = {
  desktop: 250,
  laptop: 80,
  tab: 50,
  mobile: 30,
};
let targetGap;
window.innerWidth >= 1200
  ? (targetGap = breakPoints.desktop)
  : window.innerWidth >= 1024
  ? (targetGap = breakPoints.laptop)
  : window.innerWidth >= 768
  ? (targetGap = breakPoints.tab)
  : (targetGap = breakPoints.mobile);

function anim() {
  getElem.forEach((element) => {
    isInViewport(element, targetGap) ? element.classList.add("visible") : null;
  });
}
getElem.length > 0 ? window.addEventListener("scroll", anim, false) : null;
getElem.length > 0 ? anim() : null;
// }, false);
$(document).ready(function(){
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', 
    gallery:{
        enabled:true
      },
  
    zoom: {
      enabled: true, 
  
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
  
      opener: function(openerElement) {
  
        return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
  
  });
  
  });