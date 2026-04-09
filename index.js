let p=document.getElementById("about");
function delayed(text){
    setTimeout(() => {
        showText(text);
        if(callback) callback;
    }, 2500);
};

function showText(){
    p.style.display="block";
}
delayed(p);

const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
