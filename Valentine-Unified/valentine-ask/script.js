document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const questionSection = document.getElementById('question-section');
    const successSection = document.getElementById('success-section');
    const loveSvgs = document.querySelectorAll('.floating-svg');

    let noCount = 0;
    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
        "Is that your final answer?",
        "You're breaking my heart ;(",
        "Plsss? :( You're breaking my heart",
    ];

    function getNoButtonText() {
        return phrases[Math.min(noCount, phrases.length - 1)];
    }

    noBtn.addEventListener('click', () => {
        noCount++;
        noBtn.textContent = getNoButtonText();

        // Increase Yes button size
        const newSize = noCount * 20 + 16;
        yesBtn.style.fontSize = `${newSize}px`;
    });

    yesBtn.addEventListener('click', () => {
        // Hide question, show success
        questionSection.classList.add('hidden');
        successSection.classList.remove('hidden');

        // Hide floating SVGs
        loveSvgs.forEach(svg => svg.classList.add('hidden'));
    });
});
