const header = document.querySelector("nav");
const sectionOne = document.querySelector(".home-hero");

const faders = document.querySelectorAll('.fade-in');

const sectionOneOptions = {
    rootMargin: "0px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add("reverse-navbar");
                
            } else {
                header.classList.remove("reverse-navbar");
                
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('appear');
        } else {
            entry.target.classList.add('appear');
            //appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})