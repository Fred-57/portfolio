/** Détection du scroll */
const slidingNewsletter1 = document.querySelector('.proj1');
console.log(slidingNewsletter1);

window.addEventListener('scroll',() => {

    const {scrollTop, clientHeight} = 
    document.documentElement;

    const topElementToTopViewport1 =
    slidingNewsletter1.getBoundingClientRect().top; //espace entre le haut de l'element "slidingNewsletter" et le haut de la partie visible de la page

    if (scrollTop > (scrollTop + topElementToTopViewport1).toFixed() - clientHeight * 0.50) {
        slidingNewsletter1.classList.add('active');
    }

})

const slidingNewsletter2 = document.querySelector('.proj2');
console.log(slidingNewsletter2);

window.addEventListener('scroll',() => {

    const {scrollTop, clientHeight} = 
    document.documentElement;

    const topElementToTopViewport2 =
    slidingNewsletter2.getBoundingClientRect().top; //espace entre le haut de l'element "slidingNewsletter" et le haut de la partie visible de la page

    if (scrollTop > (scrollTop + topElementToTopViewport2).toFixed() - clientHeight * 0.50) {
        slidingNewsletter2.classList.add('active');
    }

})

const slidingNewsletter3 = document.querySelector('.exp1');
console.log(slidingNewsletter3);

window.addEventListener('scroll',() => {

    const {scrollTop, clientHeight} = 
    document.documentElement;

    const topElementToTopViewport3 =
    slidingNewsletter3.getBoundingClientRect().top; //espace entre le haut de l'element "slidingNewsletter" et le haut de la partie visible de la page

    if (scrollTop > (scrollTop + topElementToTopViewport3).toFixed() - clientHeight * 0.50) {
        slidingNewsletter3.classList.add('active');
    }

})

const slidingNewsletter4 = document.querySelector('.exp2');
console.log(slidingNewsletter4);

window.addEventListener('scroll',() => {

    const {scrollTop, clientHeight} = 
    document.documentElement;

    const topElementToTopViewport4 =
    slidingNewsletter4.getBoundingClientRect().top; //espace entre le haut de l'element "slidingNewsletter" et le haut de la partie visible de la page

    if (scrollTop > (scrollTop + topElementToTopViewport4).toFixed() - clientHeight * 0.50) {
        slidingNewsletter4.classList.add('active');
    }

})
/** Fin Détection du scroll */

/** Scroll Timeline */

const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})
/** Fin Scroll Timeline */