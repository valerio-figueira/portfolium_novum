const projects = [
    {
        name: "Project A",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "",
        url: "#"
    },
    {
        name: "Project B",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "",
        url: "#"
    },
    {
        name: "Project C",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "",
        url: "#"
    }
]

















window.addEventListener("scroll", reveal);

function reveal(){
    const reveals = document.querySelectorAll(".reveal");

    for(let reveal of reveals){
        let windowheight = window.innerHeight;
        let revealtop = reveal.getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveal.classList.add("active");
        } else{
            reveal.classList.remove("active");
        }
    }
}