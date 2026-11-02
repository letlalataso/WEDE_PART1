
document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("show-menu");
        });
    }

    // Enquiry form validation
    const enquiryForm = document.getElementById("enquiry-form");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (enquiryForm.checkValidity()) {
                alert("Thank you! Your enquiry has been received.");
                enquiryForm.reset();
            } else {
                enquiryForm.reportValidity();
            }
        });
    }

    // Contact form validation
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (contactForm.checkValidity()) {
                alert("Thank you! Your message has been received.");
                contactForm.reset();
            } else {
                contactForm.reportValidity();
            }
        });
    }

});
