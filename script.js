//function that shrinks nav bar when scrolling
window.addEventListener("scroll", function() {
    shrinkNavbar();
});

function shrinkNavbar() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.remove("large");
        navbar.classList.add("small");
    } else {
        navbar.classList.remove("small");
        navbar.classList.add("large");
    }
}

// Event that fixes extra data added in the mailto function only using what is in the message text
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Construct mailto URL with only the message as the subject
    const mailtoURL = `mailto:tbenzmiller@cs.com?subject=${encodeURIComponent(message)}`;
    
    // Open mail client with mailto URL
    window.location.href = mailtoURL;
}