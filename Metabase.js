const element = document.querySelector('div');

element.addEventListener('touchstart', (e) => {
    // prevent swipe to navigate gesture
    e.preventDefault();
});
