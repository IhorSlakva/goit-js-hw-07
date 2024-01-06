const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (e) => {
    const name = e.currentTarget.value.trim();
    output.textContent = name || 'Anonymous';
})