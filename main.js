//-------------------------------------logo go up-----------------------------------
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//-------------------------------------nav bar-----------------------------------
// Select elements

// Toggle the menu
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    navMenu.classList.toggle('open');
});

const menuLinks = document.querySelectorAll('.nav-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default anchor behavior
                const targetId = link.getAttribute('href').substring(1); // Get target section ID
                const targetSection = document.getElementById(targetId);

                // Scroll smoothly to target section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close the menu after clicking
                burgerMenu.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
        
//-------------------------------------cv button-----------------------------------
const btnCv = document.querySelector(".cv-button");


btnCv.addEventListener("click", () => {
    const pdfUrl = "./media/file/cv_yi_sitmonternna.pdf"; // Replace with your actual PDF URL
    window.open(pdfUrl, "_blank");
});

