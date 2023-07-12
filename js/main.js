
window.addEventListener('scroll', function(){
  var header= document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);    
  });
  
  function toggleMenu(){
    var menutoggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menutoggle.classList.toggle('active');
    menu.classList.toggle('active') 
  }


 