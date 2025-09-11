import { renderSkills, setupDownloadButtons } from './habilidades.js';
import { renderPortfolio } from './portafolio.js';

let todo = document.querySelector("#todo");
let darkButton = document.querySelector("#dark-button");
let lightButton = document.querySelector("#light-button");
let menuButton = document.querySelector("#menu-button");
let navItems = document.querySelectorAll(".navegador ul li");
let contactForm = document.querySelector("#contact-form");

let contactMessages = [];
let mobileMenuOpen = false;

darkButton.addEventListener("click", function () {
  todo.classList.add("dark");
  darkButton.classList.add("hidden");
  lightButton.classList.remove("hidden");
});

lightButton.addEventListener("click", function () {
  todo.classList.remove("dark");
  lightButton.classList.add("hidden");
  darkButton.classList.remove("hidden");
});

navItems.forEach((item, index) => {
  item.addEventListener("click", function() {
    const sections = ["home", "quien-soy", "habilidades", "portafolio", "contacto"];
    const targetSection = document.querySelector(`#${sections[index]}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  });
});

menuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  const header = document.querySelector("header");
  
  if (!mobileMenuOpen) {
    const mobileMenu = document.createElement("div");
    mobileMenu.id = "mobile-menu";
    mobileMenu.innerHTML = `
      <div class="absolute top-20 left-0 w-full bg-[#fdba62] dark:bg-[#2d384b] border-t border-gray-300 dark:border-gray-600 z-40">
        <ul class="flex flex-col p-4 space-y-2">
          <li class="text-[#2d384b] dark:text-white px-4 py-3 rounded-lg hover:bg-[#2d384b] hover:text-[#fdba62] dark:hover:bg-[#fdba62] dark:hover:text-[#2d384b] transition-colors duration-200 cursor-pointer">Home</li>
          <li class="text-[#2d384b] dark:text-white px-4 py-3 rounded-lg hover:bg-[#2d384b] hover:text-[#fdba62] dark:hover:bg-[#fdba62] dark:hover:text-[#2d384b] transition-colors duration-200 cursor-pointer">Quien soy</li>
          <li class="text-[#2d384b] dark:text-white px-4 py-3 rounded-lg hover:bg-[#2d384b] hover:text-[#fdba62] dark:hover:bg-[#fdba62] dark:hover:text-[#2d384b] transition-colors duration-200 cursor-pointer">Habilidades</li>
          <li class="text-[#2d384b] dark:text-white px-4 py-3 rounded-lg hover:bg-[#2d384b] hover:text-[#fdba62] dark:hover:bg-[#fdba62] dark:hover:text-[#2d384b] transition-colors duration-200 cursor-pointer">Portafolio</li>
          <li class="text-[#2d384b] dark:text-white px-4 py-3 rounded-lg hover:bg-[#2d384b] hover:text-[#fdba62] dark:hover:bg-[#fdba62] dark:hover:text-[#2d384b] transition-colors duration-200 cursor-pointer">Contacto</li>
        </ul>
      </div>
    `;
    
    header.appendChild(mobileMenu);
    
    const mobileNavItems = mobileMenu.querySelectorAll("li");
    mobileNavItems.forEach((item, index) => {
      item.addEventListener("click", function() {
        const sections = ["home", "quien-soy", "habilidades", "portafolio", "contacto"];
        const targetSection = document.querySelector(`#${sections[index]}`);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
        toggleMobileMenu();
      });
    });
    
    mobileMenuOpen = true;
  } else {
    const mobileMenu = document.querySelector("#mobile-menu");
    if (mobileMenu) {
      mobileMenu.remove();
    }
    mobileMenuOpen = false;
  }
}

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const messageData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    timestamp: new Date().toLocaleString()
  };
  
  contactMessages.push(messageData);
  console.log("Nuevo mensaje:", messageData);
  console.log("Todos los mensajes:", contactMessages);
  contactForm.reset();
  
  alert("Mensaje enviado correctamente!");
});

const socialLinks = document.querySelectorAll('a[href="#"]');
socialLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  renderSkills();
  setupDownloadButtons();
  renderPortfolio();
});