function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', () => {
   const randomColor = getRandomHexColor();
   bodyEl.style.backgroundColor = randomColor;
   spanEl.textContent = randomColor;
});
