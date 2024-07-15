const box = document.getElementsByClassName('boxContainer')[0];
box.addEventListener('click', function() {
  this.classList.toggle('open');
})