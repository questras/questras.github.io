const embedNav = () => {
    const navHTML = `
        <div class="logo">
        <h4>Michał Wiśniewski</h4>
        </div>

        <ul class="nav-links">
        <li class="nav-link">
            <a href="about.html">About</a>
        </li>
        <li class="nav-link">
            <a href="projects.html">Projects</a>
        </li>
        <li class="nav-link">
            <a href="education.html">Education</a>
        </li>
        <li class="nav-link">
            <a href="#">CV</a>
        </li>
        <li class="nav-link">
            <a href="contact.html">Contact</a>
        </li>
        </ul>

        <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
        </div>
    `;
    const nav = document.getElementById("nav");
    nav.innerHTML = navHTML;
}

const slideNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-links-active');
    })
}

embedNav();
slideNav();
