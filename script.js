const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

const links = document.querySelectorAll("#navbar a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});