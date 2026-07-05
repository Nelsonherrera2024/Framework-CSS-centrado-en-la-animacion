document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {

        // Ripple Effect
        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");
            ripple.classList.add("ripple-effect");

            const rect = button.getBoundingClientRect();

            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });

        // Magnetic Hover Effect
        button.addEventListener("mousemove", (e) => {

            if (!button.classList.contains("magnetic")) return;

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)`;
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "";
        });

    });
});