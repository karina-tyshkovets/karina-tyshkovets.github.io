ScrollOut({
    
//    once:true,
    
    onShown: function (el) {

        anime({
            targets: '.wave.anime',
            duration: 0,
            easing: 'easeOutQuad',
            translateY:-500,
            opacity: 1
        });

        anime({
            targets: '.wave.anime',
            duration: 2500,
            delay: 200,
            easing: 'easeOutQuad',
            translateY: 0,
            opacity: 1
        });

        anime({
            targets: '.anime .morph',
            // direction: "alternate",
            d: [
            
            {
                value: 'M500,444.2c-17.3,19.9-67.3,28-93.1,26.5c-35.4-2-58.4-12.4-102.1-11.3c-29.8,0.7-80.2,15.6-112.4,16.7c-34.9,1.2-62.5-12.4-97.7-17.7C66.9,454.1,19,459.3,0,477v23h500V444.2z'
            },
            
            {
                value: 'M500,444.2c-20.3,25.4-60,35.8-93.1,30.5c-35.1-5.6-58.4-30.5-102.1-29.4c-29.8,0.7-80.2,26.9-112.4,28c-34.9,1.2-62.5-23.7-97.7-29.1C66.9,439.9,20,453.8,0,477v23h500V444.2z'
            }
            ],
            // easing: 'easeOutInBack',
            // easing: 'easeInOutCirc',
            easing: 'linear',
            duration: 2500,
            delay: 200,
            loop: false
        });
    },
    
    onHidden: function (el) {

    }
});
