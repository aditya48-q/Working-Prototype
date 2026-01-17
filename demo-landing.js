document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copy-credentials");

    copyButton.addEventListener("click", () => {
        const credentials = "Email: hellfirehackers@gmail.com\nPassword: H112BCE";
        navigator.clipboard.writeText(credentials).then(() => {
            copyButton.textContent = "Copied!";
            setTimeout(() => {
                copyButton.textContent = "Copy Demo Credentials";
            }, 2000);
        });
    });

    // Framer Motion Animations
    const { animate } = window.motion;

    // Page load animation for the demo box
    const demoBox = document.querySelector('.demo-box');
    if (demoBox) {
        animate(
            demoBox,
            { opacity: [0, 1], y: [-20, 0] },
            { duration: 0.7, ease: "easeOut" }
        );
    }

    // Animation for buttons
    const loginButton = document.querySelector('a.cta-button');
    const copyCredsButton = document.getElementById('copy-credentials');

    const addButtonAnimations = (element) => {
        if (element) {
            element.addEventListener('mouseenter', () => {
                animate(element, { scale: 1.05 }, { duration: 0.2, ease: 'easeOut' });
            });
            element.addEventListener('mouseleave', () => {
                animate(element, { scale: 1 }, { duration: 0.2, ease: 'easeOut' });
            });
            element.addEventListener('mousedown', () => {
                animate(element, { scale: 0.95 }, { duration: 0.2, ease: 'easeIn' });
            });
             element.addEventListener('mouseup', () => {
                animate(element, { scale: 1 }, { duration: 0.2, ease: 'easeOut' });
            });
        }
    };

    addButtonAnimations(loginButton);
    addButtonAnimations(copyCredsButton);
});
