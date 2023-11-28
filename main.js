const scrollRevealOption  = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//header container
ScrollReveal().reveal(".header_container h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_form",{
    ...scrollRevealOption,
    delay: 500,
});

//trending container
ScrollReveal().reveal(".trending_card", {
    ...scrollRevealOption,
    interval: 500,
})

