const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__content--close');


const addListener = (element, close) => {
  element.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
  });
  close.addEventListener('click', () => {
    modal.classList.add('hidden')
    modal.classList.remove('visible')
  })
}

addListener(button1, closeButton);
addListener(button2, closeButton);
addListener(button3, closeButton);