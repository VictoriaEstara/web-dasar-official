/* Saya adalah script untuk mengatur navigasi dengan tambahan animasi scroll*/

var navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link) {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  
  var targetId = this.getAttribute("href");
  var targetPosition = document.querySelector(targetId).offsetTop;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var duration = 1000; // Durasi animasi scroll dalam milidetik
  var startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var scrollY = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollY);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  function ease(t, b, c, d) {
    // Fungsi untuk menyesuaikan animasi (easeInOutCubic)
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
  }
  
  requestAnimationFrame(animation);
}

/* Saya adalah script untuk mengatur button Lebih Lanjut dan Follow My Social Media*/

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");


button1.addEventListener("click", function() {
  window.open("https://www.youtube.com/@Dedad_Fajar", "_blank");
});

button2.addEventListener("click", function() {
  window.open("https://www.youtube.com/@DedadFajarIndonesia", "_blank");
});

button3.addEventListener("click", function() {
    window.open("https://msha.ke/dedfajr", "_blank");
});