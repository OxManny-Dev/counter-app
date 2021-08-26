const $count = document.querySelector('#count');
const $incrementBtn = document.querySelector('#inc');

let count = 0;



$incrementBtn.onClick(function() {
  count++;
  $count.textContent = count.toString();
})
