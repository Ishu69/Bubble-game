document.addEventListener("DOMContentLoaded", () => {
    const bubbleWrap = document.getElementById("bubble-wrap");
    const resetButton = document.getElementById("reset");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.addEventListener("click", () => {
            bubble.style.backgroundColor = "gray";
            bubble.style.transform = "scale(0.8)";
            bubble.style.boxShadow = "none";
            bubble.style.pointerEvents = "none"; // Prevent multiple clicks
        });
        return bubble;
    }

    function generateBubbles(rows, cols) {
        bubbleWrap.innerHTML = "";
        for (let i = 0; i < rows * cols; i++) {
            bubbleWrap.appendChild(createBubble());
        }
    }

    resetButton.addEventListener("click", () => generateBubbles(10, 10));

    generateBubbles(10, 10);
});