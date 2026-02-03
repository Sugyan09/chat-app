// code for moving slider in navbar
const navbar = document.querySelector('.navbar-items-area');
const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.nav-item');
const defaultItem = document.querySelector('.default');

function moveSlider(item) {
    const rect = item.getBoundingClientRect();
    const parentRect = navbar.getBoundingClientRect();

    slider.style.width = rect.width + 'px';
    slider.style.left = (rect.left - parentRect.left) + 'px';
}

function setActive(item) {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
}

/* INITIAL STATE */
setActive(defaultItem);
moveSlider(defaultItem);

/* HOVER */
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        setActive(item);
        moveSlider(item);
    });
});

/* LEAVE NAVBAR */
navbar.addEventListener('mouseleave', () => {
    setActive(defaultItem);
    moveSlider(defaultItem);
});
//--------------------------------------------------------




