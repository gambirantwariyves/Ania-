themToggler = document.querySelector('.them-toggle');
themToggler.addEventListener('click', () =>{
  document.body.classList.toggle("dack-theme-variables");
  themToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})