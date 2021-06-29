//Get the button
let toTopButton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scroll({ top: 0, behavior: 'smooth'});
    document.body.scrollTop = 0;
    /*document.documentElement.scrollTop = 0;*/
}
