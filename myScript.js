const logo = document.getElementById("logo");
logo.textContent = "FITZONE GYM";

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function(link){
    link.addEventListener("click", function(){
        console.log(link.textContent);
        link.style.color = "red";
    });
});

const heroTitle = document.getElementById("heroTitle");
const heroText= document.getElementById("heroText");
const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", function(){
    heroTitle.textContent = "Welcome to Fitzone Gym!";
    heroText.textContent = "Your journey to fitness starts here.";
    joinBtn.textContent = "Get Started";
});


const aboutTitle = document.getElementById("aboutTitle");
const aboutText = document.getElementById("aboutText");
const aboutBtn = document.getElementById("aboutBtn");

let aboutExpanded = false;
aboutBtn.addEventListener("click", function(){
    if (aboutExpanded === false){
    aboutTitle.textContent = "Welcome to Fitzone!";
    aboutText.textContent = "At Fitzone, we provide quality training, guidance and a supportive environment for your fitness journey.";
    aboutBtn.textContent = "Read Less";
        aboutExpanded = true;
    } else {
        aboutTitle.textContent = "About Fitzone";
        aboutText.textContent = "Welcome to Fitzone! We are a state-of-the-art fitness centre dedicated to helping you achieve your health and wellness goals. Our modern facilities and expert trainers are here to support you on your fitness journey. Whether you are a beginner or an experienced athlete,  we have the resources and the suppport you need to help reach your goals.";
        aboutBtn.textContent = "Learn More";

        aboutExpanded = false;
    }
});


const planMessage = document.querySelector("#planMessage");
premiumBtn.addEventListener("click", function(event) {
    event.preventDefault();
    planMessage.textContent = "You selected the Premium plan.";
});

annualBtn.addEventListener("click", function(event) {
    event.preventDefault();
    planMessage.textContent = "You selected the Annual plan.";
});

const contactForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#formMessage");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formMessage.textContent = "Thank you, " + nameInput.value + "! Your message has been received. We will get back to you at " + emailInput.value + ".";
});

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});


