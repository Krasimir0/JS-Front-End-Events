document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const showMoreBtns = document.getElementsByTagName("button");
    
    for (const btn of showMoreBtns) {
        btn.addEventListener("click", e => {
            e.preventDefault();
            const profile = e.target.closest(".profile");
            const unlockInput = profile.querySelector('input[id$="Unlock"]');
            
            if (unlockInput.checked) {
                const hiddenFields = profile.querySelector('.hidden-fields');
                const isVisible = hiddenFields.style.display === 'block';

                hiddenFields.style.display = isVisible ? 'none' : 'block';
                e.target.textContent = isVisible ? 'Show more' : 'Hide it';
            }
        })   
    }
}