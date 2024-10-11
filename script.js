document.addEventListener("DOMContentLoaded", function() {
    const introductionSection = document.getElementById("introduction");
    const introText = introductionSection.querySelector("p");
    introText.textContent += " Feel free to explore my projects and get to know more about me.";
});
// Starfield effect
document.addEventListener("DOMContentLoaded", function () {
    const starfield = document.querySelector(".starfield");
    for (let i = 0; i < 300; i++) { // Increased from 150 to 300
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.width = `${Math.random() * 2 + 1}px`; // Randomize star size
        star.style.height = star.style.width;
        star.style.opacity = Math.random() * 0.8 + 0.2; // Randomize brightness
        starfield.appendChild(star);
    }
});
