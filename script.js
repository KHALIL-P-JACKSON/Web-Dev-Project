//Smooth Scrolling
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            
            const targetId = this.getAttribute("href").substring(1); // Get section ID
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
