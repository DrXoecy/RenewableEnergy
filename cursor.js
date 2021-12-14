let mouseCursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll('.nav-links');
let title = document.querySelectorAll('h1');
let subtitle = document.querySelectorAll('h2');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navlinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow")
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow")
    });
});

title.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow")
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow")
    });
});

subtitle.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow")
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow")
    });
});
