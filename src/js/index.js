const inputMenuHamburger = document.getElementById('menu-hamburguer')
const corujaContainer = document.getElementById("eye-container")
const corujaEyes = document.getElementById("pupil")
const progressBar = document.getElementById('progress-bar')
let rectContainer = corujaContainer.getBoundingClientRect();

const corujaContainerHome = document.getElementById("eye-container-home")
const corujaEyesHome = document.getElementById("pupil-home")
let rectContainerHome = corujaContainerHome.getBoundingClientRect();

const aboutWindow = document.getElementById('sobre-mim')
const aboutRestoreButton = document.getElementById('about-restore-button')
const aboutMaximizeButton = document.getElementById('about-maximize-button')

if (inputMenuHamburger) {
  const hamburguer = document.querySelector('.hamburguer');
  inputMenuHamburger.addEventListener('change', () => {
    hamburguer.classList.toggle('open');
  })
} else {
  throw new Error("Elemento 'menu-hamburguer' não encontrado no DOM.");
}

// MARK: Barra de progresso
window.addEventListener('scroll', function () {
  const scrollY = window.scrollY; // Posição atual da rolagem
  const scrollHeight = document.documentElement.scrollHeight; // Altura total do conteúdo
  const clientHeight = document.documentElement.clientHeight; // Altura da janela visível

  const progress = (scrollY / (scrollHeight - clientHeight)) * 100;

  progressBar.style.width = `${progress}%`

  const corujaShow = this.document.getElementById('coruja')
  if (progress > 17) {
    corujaShow.style.bottom = '-10px'
    updateRect()
  } else {
    corujaShow.style.bottom = '367px'
  }
});

// MARK: Header barra NAV
const navLinks = document.querySelectorAll('nav a[data-title]');
const navTitleDisplay = document.getElementById('nav-title-display');

if (navLinks.length > 0 && navTitleDisplay) {
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const title = link.getAttribute('data-title');
      navTitleDisplay.textContent = title;
      navTitleDisplay.style.opacity = '1';
    });

    link.addEventListener('mouseleave', () => {
      navTitleDisplay.style.opacity = '0';
    });
  });
}

// MARK: Header Coruja
function updateRect() {
  rectContainer = corujaContainer.getBoundingClientRect();
  rectContainerHome = corujaContainerHome.getBoundingClientRect();
}

window.addEventListener("resize", updateRect);
window.addEventListener("mousemove", (e) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  let posX = (mouseX / screenWidth) * (rectContainer.width - corujaEyes.offsetWidth);
  let posY = (mouseY / screenHeight) * (rectContainer.height - corujaEyes.offsetHeight);

  if (mouseY >= 70 && posY < 7) posY = 7
  if (mouseY < 70 && mouseY > rectContainer.top) posY = 4;

  corujaEyes.style.setProperty('--pupil-translate-x', `${posX}px`);
  corujaEyes.style.setProperty('--pupil-translate-y', `${posY}px`);

  let posXHome = (mouseX / screenWidth) * (rectContainerHome.width - corujaEyesHome.offsetWidth);
  let posYHome = (mouseY / screenHeight) * (rectContainerHome.height - corujaEyesHome.offsetHeight);

  const mouseOnEyes = mouseX > rectContainerHome.left && mouseX < rectContainerHome.right && mouseY < rectContainerHome.bottom && mouseY > rectContainerHome.top

  if (mouseX < rectContainerHome.left && posXHome >= 3) posXHome = 3;
  if (mouseX > rectContainerHome.left && mouseX < rectContainerHome.right) posXHome = (rectContainerHome.width - corujaEyesHome.offsetWidth) / 2;
  if (mouseOnEyes) {
    posXHome = (rectContainerHome.width - corujaEyesHome.offsetWidth) / 2
    posYHome = (rectContainerHome.height - corujaEyesHome.offsetHeight) / 2
  }

  corujaEyesHome.style.transform = `translate(${posXHome}px, ${posYHome}px)`
})

// MARK: Home dev text
document.addEventListener('DOMContentLoaded', () => {
  const animatedTextSpan = document.getElementById('dev-text');
  const words = ['frontend', 'backend', 'fullstack'];
  let wordIndex = 0;

  function updateText() {
    animatedTextSpan.classList.remove('is-visible');

    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      animatedTextSpan.textContent = words[wordIndex];

      animatedTextSpan.classList.add('is-visible');
    }, 300);
  }

  animatedTextSpan.textContent = words[0];
  animatedTextSpan.classList.add('is-visible');

  setInterval(updateText, 3000);
});

// MARK: About Buttons
if (aboutRestoreButton) {
  aboutRestoreButton.addEventListener("click", () => {
    aboutWindow.classList.remove('lg:max-h-[1000px]', 'opacity-100');
    aboutWindow.classList.add('max-h-0', 'opacity-0');
    aboutMaximizeButton.classList.remove('-bottom-[100px]');
    aboutMaximizeButton.classList.add('bottom-0');
  })
}

if (aboutMaximizeButton) {
  aboutMaximizeButton.addEventListener("click", () => {
    aboutWindow.classList.remove('max-h-0', 'opacity-0');
    aboutWindow.classList.add('lg:max-h-[1000px]', 'opacity-100');
    aboutMaximizeButton.classList.remove('bottom-0');
    aboutMaximizeButton.classList.add('-bottom-[100px]');
  })
}

const aboutTextDefault = `> Eae povo! Me chamo William Alexander e sou um amante da programação.
>
> Tenho paixão por resolver desafios complexos de maneira criativa, principalmente ao trabalhar com barreiras e limites definidos. Sou comprometido, trabalhando bem tanto de forma independente quanto em equipe.
>
> Estou constantemente aprendendo e aprimorando minhas habilidades para me tornar um colaborador eficaz e eficiente, tendo impacto positivo com quem for trabalhar.
> Sonho um dia em criar meu próprio Shadow of The Colossus, quem sabe 🙌🏽.`

const aboutTextBox = document.querySelector('.about-text-box');
const aboutPhoto = document.querySelector('.about-photo');

aboutTextBox.addEventListener('input', () => {
  if (aboutTextBox.textContent.trim() != aboutTextDefault.trim()) {
    aboutPhoto.src = 'src/assets/images/sobre-mim-foto-alt.png'
  } else {
    aboutPhoto.src = 'src/assets/images/sobre-mim-foto.png'
  }
})

// MARK: Show Habilidades
const showSkills = document.getElementById('show-skills');
const skillSectionShow = document.querySelector('.skill-section-show');
const skillsContainer = document.getElementById('skills-container');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const targetY = entry.boundingClientRect.y;

    if (entry.isIntersecting) {
      skillSectionShow.classList.add('max-h-[1000svh]');
      skillSectionShow.classList.remove('pointer-events-none');
      if (skillsContainer) skillsContainer.classList.remove('invisible');
    } else {
      if (targetY > 0) {
        skillSectionShow.classList.remove('max-h-[1000svh]');
        skillSectionShow.classList.add('pointer-events-none');

        if (skillsContainer) skillsContainer.classList.add('invisible');
      }
    }
  });
}, {
  threshold: 1,
  rootMargin: '0px 0px -200px 0px',
});

observer.observe(showSkills);

// MARK: Skills Interaction
document.addEventListener('DOMContentLoaded', () => {
  const skillsList = document.querySelectorAll('.skill-card-interactive');

  skillsList.forEach(skill => {
    let timeoutId = null;

    const activateEffect = () => {
      clearTimeout(timeoutId);
      skill.classList.add('is-active');
    };

    const startDeactivationTimer = () => {
      timeoutId = setTimeout(() => {
        skill.classList.remove('is-active');
      }, 2000);
    };

    skill.addEventListener('mouseenter', activateEffect);
    skill.addEventListener('mouseleave', startDeactivationTimer);

    skill.addEventListener('touchstart', (e) => {
      e.preventDefault();
      activateEffect();
    });
    skill.addEventListener('touchend', () => {
      startDeactivationTimer();
    });
  });
});

// MARK: Project Choose List
const listHeader = document.getElementById('list-header-projects').children;
const showcase = document.getElementById('project-showcase')
const other = document.getElementById('project-other')

const listHeaderArray = [...listHeader]

listHeaderArray.forEach(list => {
  list.addEventListener('click', () => {
    listHeaderArray.forEach(sibling => {
      sibling.classList.remove('z-1', 'is-active')
    })
    list.classList.add('z-1', 'is-active')
    if (showcase.classList.contains('z-1')) {
      showcaseProjectsList.innerHTML = listOfProjectsToShowcase
    } else {
      showcaseProjectsList.innerHTML = `
        <li class="">
          <a href="https://github.com/Williaw-Al?tab=repositories" target="_blank" class="project-item">Minha página no Github</a>
        </li>
        <li>
          <a href="https://gitlab.com/william.al.avila" target="_blank" class="project-item">Meus projetos do Gitlab</a>
        </li>`
    }
  })
})

// Pegando os dados do showcase json
const showcaseProjectsList = document.getElementById('showcase-projects-list')
let jsonProjects
let listOfProjectsToShowcase = ""

const displayDesktop = document.querySelector('.display-desktop')
const displayTablet = document.querySelector('.display-tablet')
const displayMobile = document.querySelector('.display-mobile')
const displayQrCode = document.querySelector('.display-qrcode')
const projectDescription = document.querySelector('.project-description')
let languageIcons

function displayProject(e) {
  [...showcaseProjectsList.children].forEach(child => child.classList.remove('select'))
  languageIcons = ""
  let projectIdKey
  e.target.classList.add('select')

  switch (e.target.id) {
    case 'pokedex':
      projectIdKey = jsonProjects[0];
      break;

    case 'summary':
      projectIdKey = jsonProjects[1];
      break;

    case 'huddle':
      projectIdKey = jsonProjects[2];
      break;

    case 'dragdrop':
      projectIdKey = jsonProjects[3];
      break;

    default:
      projectIdKey = jsonProjects[0];
      break;
  }
  displayDesktop.innerHTML = `<img src='${projectIdKey.samples.displayDesktop}' class='min-h-full'/>`;
  displayTablet.innerHTML = `<img src='${projectIdKey.samples.displayTablet}' class='min-h-full'/>`;
  displayMobile.innerHTML = `<img src='${projectIdKey.samples.displayMobile}' class='min-h-full'/>`;
  displayQrCode.innerHTML = `<img src='${projectIdKey.samples.displayQrCode}' class="size-full"/>`;

  projectIdKey.technologies.map(language => {
    languageIcons += getIcons(language)
  })

  projectDescription.innerHTML = `
        <span class="flex gap-3 justify-center items-center mb-5">${languageIcons}</span>
        <p class="text-xl text-center mb-5">${projectIdKey.description}</p>
        <div class="grid grid-cols-2 gap-4 text-center">
          <a href="${projectIdKey.links.direct}" title="Abrir projeto" target="_blank" class="bg-(--color-accent) text-(--color-primary) hover:shadow-[-3px_3px_var(--color-bold-extra)] hover:translate-x-1 hover:-translate-y-1 transition-all duration-200
          active:bg-(--color-active)">
            <i class="fas fa-external-link-alt"></i>
          </a>
          <a href="${projectIdKey.links.repository}" title="Abrir repositório" target="_blank" class="bg-(--color-accent) text-(--color-primary) hover:shadow-[-3px_3px_var(--color-bold-extra)] hover:translate-x-1 hover:-translate-y-1 transition-all duration-200
          active:bg-(--color-active)">
            <i class="devicon-github-original"></i>
          </a>
        </div>`;

  projectDescription.classList.remove('hidden')

}

async function getShowcaseProjects() {
  const response = await fetch('showcase-projects.json')
  const data = await response.json()
  return data
}
const applyShowcaseProjects = async () => {
  const list = await getShowcaseProjects()
  jsonProjects = list
  jsonProjects.forEach(item => listOfProjectsToShowcase +=
    `<li id=${item.id} tabindex="0" class="project-item">
        ${item.name}
    </li>`)
  showcaseProjectsList.innerHTML = listOfProjectsToShowcase
}
showcaseProjectsList.addEventListener('click', displayProject)
applyShowcaseProjects()

// Imagens sendo mostradas
function getIcons(language) {
  switch (language) {
    case 'html':
      return '<i class="devicon-html5-plain hover:text-orange-500 active:text-orange-500" title="HTML5"></i>'
    case 'css':
      return '<i class="devicon-css3-plain hover:text-blue-500 active:text-blue-500" title="CSS3"></i>'
    case 'js':
      return '<i class="devicon-javascript-plain hover:text-yellow-400 active:text-yellow-400" title="JavaScript"></i>'
    case 'ts':
      return '<i class="devicon-typescript-plain hover:text-blue-700 active:text-blue-700" title="TypeScript"></i>'
    case 'reactjs':
      return '<i class="devicon-react-original hover:text-sky-500 active:text-sky-500" title="ReactJS"></i>'
    case 'vite':
      return '<i class="devicon-vitejs-plain hover:text-purple-500 active:text-purple-500" title="ViteJS"></i>'
    case 'tailwindcss':
      return '<i class="devicon-tailwindcss-original hover:text-cyan-500 active:text-cyan-500" title="TailwindCSS"></i>'
  }
}

// MARK: Footer Form
// Form submission with JavaScript
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = this
  const formData = new FormData(form);
  const submitButton = form.querySelector("button[type='submit']");
  const originalText = submitButton.textContent;

  const messageBox = document.getElementById('formMessage');
  const messageText = document.getElementById('formMessageText');
  const messageClose = document.getElementById('formMessageClose');

  // fecha pop-up
  messageClose.addEventListener('click', () => {
    messageBox.style.display = 'none';
  });

  // ===== VALIDAÇÃO EXTRA no JS (assegura subject e message)
  const subjectVal = (form.querySelector('[name="subject"]')?.value || '').trim();
  const messageVal = (form.querySelector('[name="message"]')?.value || '').trim();
  if (!subjectVal || !messageVal) {
    showMessage('Por favor preencha o assunto e a mensagem.', true);
    return;
  }

  try {
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      showMessage('Mensagem enviada com sucesso!', false);
      form.reset();
    } else {
      const serverMsg = (result && result.message) ? result.message : 'Falha ao enviar. Tente novamente.';
      showMessage('Erro: ' + serverMsg, true);
      console.error('Web3Forms response error:', result);
    }
  } catch (error) {
    console.error('Fetch error:', error);
    showMessage('Erro de conexão. Verifique sua internet e tente novamente.', true);
  } finally {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }

  // função que exibe o pop-up
  function showMessage(text, isError = false) {
    messageText.textContent = text;
    messageBox.style.display = 'block';
    messageBox.style.border = isError ? '2px solid #f66' : '2px solid #2bca66';
    // opcional: esconder automaticamente após 5s
    if (!isError) {
      setTimeout(() => { messageBox.style.display = 'none'; }, 5000);
    }
  }
});