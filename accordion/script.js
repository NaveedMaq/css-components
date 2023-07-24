const buttons = document.querySelectorAll('.accordion .item .icon');
const items = document.querySelectorAll('.accordion .item');

const closedSvg =
  '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>';
const openSvg =
  '<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />';

function openItem(index) {
  buttons[index].innerHTML = openSvg;
  items[index].classList.add('open');
}

function closeItem(index) {
  buttons[index].innerHTML = closedSvg;
  items[index].classList.remove('open');
}

function closeAll() {
  items.forEach((_, i) => closeItem(i));
}

function handleToggle() {
  const itemIndex = Number(this.dataset.itemNumber);
  const isClickedOpen = items[itemIndex].classList.contains('open');

  if (isClickedOpen) return closeItem(itemIndex);

  closeAll();
  openItem(itemIndex);
}
buttons.forEach((btn) => btn.addEventListener('click', handleToggle));

function init() {
  buttons.forEach((btn, i) => (btn.dataset.itemNumber = i));
}

init();
