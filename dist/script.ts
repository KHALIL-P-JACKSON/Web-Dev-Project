//Smooth Scrolling
document.addEventListener("DOMContentLoaded", function (): void {
    document.querySelectorAll<HTMLAnchorElement>('nav ul li a').forEach((anchor: HTMLAnchorElement) => {
        anchor.addEventListener("click", function (event: Event): void {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId: string = this.getAttribute("href")!.substring(1); // Get section ID
            const targetElement: HTMLElement | null = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
