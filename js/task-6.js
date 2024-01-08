function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  let value = Number(inputEl.value);
  if (value < 1 || value > 100) {
    return;
  } else {
    destroyBoxes()
    let size = 30;
    for (let i = 0; i < value; i++) {
      const myElem = document.createElement('div');
      myElem.style.width = `${size}px`;
      myElem.style.height = `${size}px`;
      myElem.style.backgroundColor = getRandomHexColor();
      boxEl.appendChild(myElem);
      size += 10;
    }
    inputEl.value = '';
  }
}

 function destroyBoxes() {
    boxEl.innerHTML = '';
  }