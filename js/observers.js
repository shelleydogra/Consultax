const header = document.querySelector("nav");
const sectionOne = document.querySelector(".home-hero");

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
                console.log(entry);
            } else {
                header.classList.remove("reverse-navbar");
                console.log(entry);
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);