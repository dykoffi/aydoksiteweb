$(".carre").paroller({
    factor: 0.2,            // multiplier for scrolling speed and offset
    //factorXs: 0.1,           // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'vertical', // vertical, horizontal
    // transition: 'transform 0.2s ease-in' // CSS transition
});

$(".rond").paroller({
    factor: 0.2,            // multiplier for scrolling speed and offset
    //factorXs: 0.1,           // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'horizontal', // vertical, horizontal
    // transition: 'transform 0.2s ease-in' // CSS transition
});


ScrollReveal().reveal('.card',
    {
        delay: 100,
        interval : 300,
        scale : 0.6,
        duration : 1200,
        distance: '90%',
    }
);

ScrollReveal().reveal('#partenaires img',
    {
        delay: 100,
        interval : 300,
        scale : 0.6,
        duration : 1200,
        distance: '90%',
    }
);



ScrollReveal().reveal('.information h1, .information p',
    {
        delay: 0,
        scale : 0.8,
        duration : 500,
        distance: '20%',
        origin: 'left'
    }
);