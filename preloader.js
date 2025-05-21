window.onload = function () {
    const preloader = document.getElementById("preloader");
    const logo = document.getElementById("logo");
    const content = document.getElementById("content");

    // Run full animation only on index page
    const isIndexPage =
        window.location.pathname.includes("index.html") ||
        window.location.pathname.endsWith("/") ||
        window.location.pathname.endsWith("Portfolio/");

    if (isIndexPage) {
        // Full animation logic for index only
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
                        preloader.style.display = "none";
                        content.style.visibility = "visible";
                        gsap.to(content, { opacity: 1, duration: 1 });
                        document.body.classList.add("loaded");
                    }
                });
            }
        });
    } else {
        // No animation — just hide it fast
        if (preloader) preloader.style.display = "none";
        if (content) {
            content.style.visibility = "visible";
            content.style.opacity = "1";
        }
        document.body.classList.add("loaded");
    }
};
