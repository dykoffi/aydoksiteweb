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


ScrollReveal().reveal('.card, #partenaires img',
    {
        delay: 250,
        scale : 0.6,
        interval : 200,
        rotate : "30deg",
        duration : 1500,
        reset : true,
        distance: '90%',
        origin: 'bottom'
    }
);



ScrollReveal().reveal('.information h1, .information p',
    {
        delay: 200,
        scale : 0.8,
        interval : 200,
        rotate : "30deg",
        duration : 1000,
        reset : true,
        distance: '20%',
        origin: 'left'
    }
);