const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const close = document.getElementById('closebtn');
const socialIcons = document.getElementById('social-icons');
const suportbtn = document.getElementById('supbtn')
const suport = document.getElementById('supmenu')
const btn1 = document.getElementById('menu-btn1');
const nav1 = document.getElementById('menu1');
const close1 = document.getElementById('closebtn1');
btn1.addEventListener('click', () => {
  nav1.classList.remove('hidden');

  // Animate fade out
  socialIcons.classList.remove('opacity-100', 'scale-100');
  socialIcons.classList.add('opacity-0', 'scale-95');

  // After animation ends, keep display flex but fully transparent & scaled down
});

close1.addEventListener('click', () => {
  nav1.classList.add('hidden');

  // Animate fade in
  socialIcons.classList.remove('opacity-0', 'scale-95');
  socialIcons.classList.add('opacity-100', 'scale-100');
});
suportbtn.addEventListener('click' , () => {

  suport.classList.remove('hidden')
  
});

btn.addEventListener('click', () => {
  nav.classList.remove('hidden');

  // Animate fade out
  socialIcons.classList.remove('opacity-100', 'scale-100');
  socialIcons.classList.add('opacity-0', 'scale-95');

  // After animation ends, keep display flex but fully transparent & scaled down
});

close.addEventListener('click', () => {
  nav.classList.add('hidden');

  // Animate fade in
  socialIcons.classList.remove('opacity-0', 'scale-95');
  socialIcons.classList.add('opacity-100', 'scale-100');
});