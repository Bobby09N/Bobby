window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

const words = ["برنامه نویس", "طراح وب", "توسعه دهنده Front-End", "عاشق تکنولوژی"];
let wordIndex = 0,
    charIndex = 0,
    deleting = false;
const typing = document.getElementById("typing");

function typeEffect() {
    if (!typing) return;
    const current = words[wordIndex];
    if (!deleting) {
        typing.textContent = current.substring(0, charIndex);
        charIndex++;
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typing.textContent = current.substring(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, deleting ? 60 : 120);
}
typeEffect();

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const themeBtn = document.getElementById("themeBtn");
const icon = themeBtn.querySelector("i");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "light");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark");
    }
});

const reveals = document.querySelectorAll("section");
function reveal() {
    const height = window.innerHeight;
    reveals.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top < height - 120) sec.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);
reveal();

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.style.boxShadow =
        window.scrollY > 50 ? "0 10px 30px rgba(0,0,0,.3)" : "none";
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
        const top = sec.offsetTop;
        if (pageYOffset >= top - 150) current = sec.getAttribute("id");
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
});

for (let i = 0; i < 25; i++) {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    bubble.style.left = Math.random() * 100 + "%";
    const size = Math.random() * 20 + 10;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.animationDuration = Math.random() * 8 + 6 + "s";
    bubble.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(bubble);
}

const glow = document.createElement("div");
glow.id = "cursorGlow";
document.body.appendChild(glow);
document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});