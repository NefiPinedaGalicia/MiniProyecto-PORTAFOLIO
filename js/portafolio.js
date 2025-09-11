const portfolioProjects = [
  {
    title: "Proyectos Frontend",
    description: "Aplicaciones web interactivas y responsivas",
    projects: [
      {
        name: "Ver Proyecto 1",
        url: "https://nefipinedagalicia.github.io/ProyectosPersonales/",
        color: "from-[#ffcc00] to-[#ffdd66]",
        textColor: "text-gray-900",
        borderColor: "border-[#d6a100] hover:border-[#ff6b6b]",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
        </svg>`,
      },
      {
        name: "Ver Proyecto 2",
        url: "https://nefipinedagalicia.github.io/Funval-G5/Practica-9/index.html",
        color: "from-[#6c79db] to-[#9db4f0]",
        textColor: "text-white",
        borderColor: "border-[#4e5ca3] hover:border-[#a8c0ff]",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>`,
      },
      {
        name: "Ver Proyecto 3",
        url: "https://nefipinedagalicia.github.io/Funval-G5/Practica-10/index.html",
        color: "from-[#ee99ac] to-[#f5ccd5]",
        textColor: "text-gray-900",
        borderColor: "border-[#d87c8f] hover:border-[#ff9aac]",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v16H4z" />
        </svg>`,
      },
    ],
  },
  {
    title: "Prácticas y Ejercicios",
    description: "Desafíos de programación y ejercicios prácticos",
    projects: [
      {
        name: "Ver Práctica 7",
        url: "https://nefipinedagalicia.github.io/Funval-G5/Practica-7/index.html",
        color: "from-[#f08030] to-[#f8bc84]",
        textColor: "text-gray-900",
        borderColor: "border-[#d5671e] hover:border-[#ff9d5c]",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3" />
        </svg>`,
      },
      {
        name: "Ver Práctica 6",
        url: "https://nefipinedagalicia.github.io/Funval-G5/Practica-6/index.html",
        color: "from-[#78c850] to-[#a8e87c]",
        textColor: "text-gray-900",
        borderColor: "border-[#5e9c3d] hover:border-[#8cff66]",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>`,
      },
      {
        name: "Ver Práctica 5",
        url: "https://nefipinedagalicia.github.io/Funval-G5/Practica-4/index.html",
        color: "from-[#6890f0] to-[#98c8f8]",
        textColor: "text-white",
        borderColor: "border-[#4a71c1] hover:border-[#7eb0ff]",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M12 3v18" />
        </svg>`,
      },
    ],
  },
];

function renderPortfolio() {
  const portfolioContainer = document.querySelector("#portfolio-container");

  portfolioContainer.innerHTML = portfolioProjects
    .map(
      (category) => `
    <div class="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#fdba62] border-4 border-transparent dark:hover:border-[#fdba62] flex flex-col justify-between">
      <div class="text-center mb-6">
        <h3 class="text-2xl font-bold text-[#18568a] dark:text-[#fdba62] mb-2 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:rotate-1">
          ${category.title}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out">
          ${category.description}
        </p>
      </div>
      <div class="flex flex-col gap-4 mt-8">
        ${category.projects
          .map(
            (project) => `
          <a href="${project.url}" class="px-6 py-3 bg-gradient-to-r ${project.color} ${project.textColor} font-bold rounded-full transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 border-2 ${project.borderColor}">
            ${project.icon}
            ${project.name}
          </a>
        `
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");

  const emptyLinks = portfolioContainer.querySelectorAll('a[href="#"]');
  emptyLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  const realLinks = portfolioContainer.querySelectorAll('a:not([href="#"])');
  realLinks.forEach((link) => {
    link.setAttribute("target", "_blank");
  });
}

export { renderPortfolio };
