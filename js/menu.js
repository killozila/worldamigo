const menu = {
    element: document.querySelector('.menu'),
    wrapper: document.querySelector('.menu_wrapper'),
    background: document.querySelector('.menu_background'),
    separator: document.querySelector('.menu_separator'),
};

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

const setting = {
    duration: 0.8,
    ease: 'expo.inOut',
    delay: '-=80%',
};

const animateMenu = () => {
    gsap.set(menu.element, { pointerEvents: 'none' });
    gsap.set(menu.wrapper, { autoAlpha: 0 });

    !isMobile 
        ? gsap.set(menu.background, {scaleY: 0, scaleX: 0.002})
        ? gsap.set(menu.background, {scaleX: 0, scaleY: 0.002});

    !isMobile ? gsap.set(menu.separator, { height: 0 }) : gsap.set(menu.separator, { width: 0 });

    !isMobile
        ? tlMenu
              .to(menu.background, {
                duration: setting.duration / 2,
                scaleY: '100%',
              })
        : tlMenu
              .to(menu.background, {
                duration: setting.duration / 2,
                scaleX: '100%',
              })
              .to(menu.background, { scaleY: 1 });

          tlMenu
              .to(menu.element, { pointerEvents: 'auto' }, setting.delay)
              .to(menu.wrapper, { autoAlpha: 1 }, setting.delay);

          !isMobile
              ? tlMenu.to(menu.separator, { height: 'calc(100% - 4rem)' }, setting.delay)
              : tlMenu.to(menu.separator, { width: 'calc(100% - 2rem)' }, setting.delay)

};

const addEventListeners = () => {
    menuOpen.addEventListener('click', () => tlMenu.play());
    menuClose.addEventListener('click', () => tlMenu.reverse(1));
};
addEventListeners();

export default animateMenu;