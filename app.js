window.onload = function () {
    const preloader = document.getElementById("preloader");
    const logo = document.getElementById("logo");
    const content = document.getElementById("content");

    gsap.to(logo, {
        scale: 0.5,
        x: "-40vw",
        y: "-40vh",
        duration: 1.5,
        ease: "power2.out",
        delay: 1,
        onComplete: function () {
            gsap.to(preloader, {
                opacity: 0,
                duration: 0.5,
                onComplete: function () {
                    preloader.style.display = "none";  // Hide the preloader
                    content.style.visibility = "visible";  // Make content visible
                    gsap.to(content, { opacity: 1, duration: 1 });  // Fade in content
                    
                    // Allow scrolling after preloader disappears
                    document.body.classList.add("loaded");
                }
            });
        }
    });
};

// Initialize EmailJS with your User ID
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("R768MBVBpJujNqF2A"); // your public key
  
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Remove old 'time' input if exists to avoid duplicates
      const oldTimeInput = form.querySelector("input[name='time']");
      if (oldTimeInput) form.removeChild(oldTimeInput);
  
      // Add timestamp
      const now = new Date().toLocaleString();
      let timeInput = document.createElement("input");
      timeInput.type = "hidden";
      timeInput.name = "time";
      timeInput.value = now;
      form.appendChild(timeInput);
  
      emailjs.sendForm("service_p4cf7vn", "template_izgu3fb", form)
        .then(function () {
          alert("✅ Message sent successfully!");
          form.reset();
        }, function (error) {
          alert("❌ Failed to send message. Error: " + JSON.stringify(error));
        });
    });
  });
  
  // About me
  function toggleContent(id) {
    const el = document.getElementById(id);
    const all = document.querySelectorAll('.timeline-content');
    
    all.forEach(content => {
      if (content.id !== id) {
        content.classList.remove('active');
      }
    });

    el.classList.toggle('active');
  }


  gsap.from(".timeline-line", {
    scaleY: 0,
    transformOrigin: "top",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".timeline-container",
      start: "top center",
    },
  });

const phrases = ["AI", "Design", "Code"];
let current = 0;
let char = 0;
const speed = 120;
const target = document.getElementById("typewriter");

function typeLoop() {
  if (char <= phrases[current].length) {
    target.innerHTML = phrases[current].substring(0, char);
    char++;
    setTimeout(typeLoop, speed);
  } else {
    setTimeout(() => eraseLoop(), 1000);
  }
}

function eraseLoop() {
  if (char >= 0) {
    target.innerHTML = phrases[current].substring(0, char);
    char--;
    setTimeout(eraseLoop, speed / 1.5);
  } else {
    current = (current + 1) % phrases.length;
    setTimeout(typeLoop, 400);
  }
}

typeLoop();