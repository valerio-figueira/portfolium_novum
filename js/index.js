const projects = [
    {
        name: "Base Apparel",
        description: "Uma landing page de vestuário feminino, com entrada de cadastro para lista de e-mails, feita em HTML e CSS.",
        img: "imgs/Projetos/base-apparel.jpg",
        url: "https://valerio-figueira.github.io/base-apparel-page/"
    },
    {
        name: "Landing Page",
        description: "Huddle Landing Page é um projeto feito com HTML e CSS. Algumas propriedades de CSS utilizadas foram Grid Layout, Flex Box, @mediascreen (para deixá-lo responsivo), entre outras.",
        img: "imgs/Projetos/huddle.jpg",
        url: "https://valerio-figueira.github.io/huddle-landing-page/"
    },
    {
        name: "IPMA",
        description: "Meu primeiro projeto real, feito para o Instituto de Previdência de minha cidade. O site é todo responsivo, adaptável a qualquer formato de tela. Feito com HTML, CSS e Javascript.",
        img: "imgs/Projetos/IPMA.jpg",
        url: "https://www.ipmamonte.mg.gov.br/"
    },
    {
        name: "Subscription Page",
        description: "Esta é uma página de cadastro, com valor de venda do produto por mensalidade. Feita com HTML e CSS apenas. A página é responsiva, se adaptando muito bem a qualquer dispositivo.",
        img: "imgs/Projetos/subscription-page.jpg",
        url: "https://valerio-figueira.github.io/singlepage-subscription/"
    },
    {
        name: "Ruby Project",
        description: "Este é um dos meus projetos fictícios, no qual me empenhei por boas horas para me aprimorar como desenvolvedor web. Gostei muito de tê-lo feito, utilizei várias propriedades CSS de estilização e.g. absolute position, flex, grid, @mediascreen, efeito parallax, transition, etc.",
        img: "imgs/Projetos/ruby-project.jpg",
        url: "https://valerio-figueira.github.io/ruby-project/"
    },
    {
        name: "Jasper Project",
        description: "Meu primeiro site feito com efeito parallax. É um site simples, mas com diversas propriedades avançadas de CSS. Há nele um navigator para mobiles e PCs desktop.",
        img: "imgs/Projetos/jasper-project.jpg",
        url: "https://valerio-figueira.github.io/jasper-project/"
    },
    {
        name: "Black Onyx",
        description: "Este modelo de site, com a propriedade grid, contém três colunas de artigos que, sendo visíveis para PCs desktop e outras telas, se ajustam a uma ou duas colunas conforme o dispositivo mobile.",
        img: "imgs/Projetos/onyx-project.jpg",
        url: "https://valerio-figueira.github.io/black-onyx-page/"
    },
    {
        name: "Turmalina",
        description: `Um simples modelo de site, o qual tentei fazer "imitando" o modelo de site da <a href="https://www.rocketseat.com.br/" target="_blank" rel="external">rocketseat</a>, do qual faço parte como estudante de programação.`,
        img: "imgs/Projetos/turmalina.jpg",
        url: "https://valerio-figueira.github.io/turmalina-page/"
    },
    {
        name: "Lapis Lazuli",
        description: "Meu primeiro projeto web, o qual fiz com muita dedicação, aplicando todo conhecimento que obtive por meio de cursos e leituras, conquanto seja apenas um modelo fictício. Aprendi muito sobre estruturação de sites com este primeiro projeto.",
        img: "imgs/Projetos/lapis-lazuli.jpg",
        url: "https://valerio-figueira.github.io/lapis-lazuli-page/"
    }
];

/*Insert projects into section tag*/
let startIndex = 0;
let endIndex = 6;
let indexPoint = 6;

displayProjects(startIndex, endIndex);

function displayProjects(start, end){
    const portfolium = document.querySelector(".portfolium");
    const html = projects.slice(start, end).map(project => {
        return `
        <article class="projects">
            <a href="${project.url} target="_blank">
                <img src="${project.img}" alt="${project.name}">
            </a>
            <a href="${project.url}" target="_blank"><h3 class="name">${project.name}</h3></a>
            <a href="${project.url}" target="blank" class="knowmore">Know more <span class="fa fa-angle-double-right icon"></span></a>
        </article>
        `;
    }).join("");
    btnController(start, end);
    portfolium.innerHTML = html;
    return startIndex = start, endIndex = end;
}

/*
NEXT/PREV BTNs CONTROLLER
*/
const next = document.querySelector(".controller #next");
const prev = document.querySelector(".controller #prev");

next.addEventListener("click", () => displayProjects(startIndex -= indexPoint, endIndex -= indexPoint));
prev.addEventListener("click", () => displayProjects(startIndex += indexPoint, endIndex += indexPoint));

function btnController(start, end){
    const next = document.querySelector(".controller #next");
    const prev = document.querySelector(".controller #prev");
    if(start === 0){
        next.disabled = true;
        prev.disabled = false;
    } else if (end >= projects.length - 1){
        prev.disabled = true;
        next.disabled = false;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}





/*Fade-in animation on scroll*/
/*
window.addEventListener("scroll", reveal);

function reveal(){
    const reveals = document.querySelectorAll(".reveal");

    for(let reveal of reveals){
        let windowheight = window.innerHeight;
        let revealtop = reveal.getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveal.classList.add("inview");
        } else{
            reveal.classList.remove("inview");
        }
    }
}
*/


/*
FADE IN ANIMATION ON SCROLL
*/
const reveal = document.querySelectorAll(".reveal");
const callback = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("inview");
        } else{
            entry.target.classList.remove("inview");
        }
    });
}
const io = new IntersectionObserver(callback);
for(let view of reveal){
    io.observe(view);
}





const copyright = document.querySelector(".copyright");
const year = new Date().getFullYear();
copyright.innerHTML = `Direitos Autorais - \u00A9 ${year}`;