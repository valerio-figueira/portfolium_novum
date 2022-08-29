const projects = [
    {
        name: "Project A",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "imgs/pexels-soumil-kumar-735911.jpg",
        url: "#"
    },
    {
        name: "Project B",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "imgs/pexels-bich-tran-669996.jpg",
        url: "#"
    },
    {
        name: "Project C",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "imgs/pexels-josh-sorenson-1714208.jpg",
        url: "#"
    },
    {
        name: "Project D",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "imgs/pexels-sora-shimazaki-5926389.jpg",
        url: "#"
    },
    {
        name: "Project E",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "imgs/pexels-negative-space.jpg",
        url: "#"
    },
    {
        name: "Project F",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "imgs/pexels-pixabay-60504.jpg",
        url: "#"
    },
    {
        name: "Project G",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "imgs/pexels-cottonbro-5474295.jpg",
        url: "#"
    },
    {
        name: "Project H",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "imgs/pexels-josh-sorenson-1714208.jpg",
        url: "#"
    },
];

/*Insert projects into section tag*/
let starterIndex = 0;
let endIndex = 6;
let indexPoint = 6;

displayProjects(starterIndex, endIndex);

function displayProjects(start, end){
    const portfolium = document.querySelector(".portfolium");
    const html = projects.slice(start, end).map(project => {
        return `
        <article class="projects">
            <a href="${project.url}">
                <img src="${project.img}" alt="${project.name}">
            </a>
            <a href="${project.url}"><h3 class="name">${project.name}</h3></a>
            <a href="${project.url}" target="blank" class="knowmore">Know more <span class="fa fa-angle-double-right icon"></span></a>
        </article>
        `;
    }).join("");
    btnController(start, end);
    portfolium.innerHTML = html;
    return starterIndex = start, endIndex = end;
}

const next = document.querySelector(".controller #next");
const prev = document.querySelector(".controller #prev");

next.addEventListener("click", () => displayProjects(starterIndex -= indexPoint, endIndex -= indexPoint));
prev.addEventListener("click", () => displayProjects(starterIndex += indexPoint, endIndex += indexPoint));

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

const reveal = document.querySelector(".reveal");
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
io.observe(reveal);