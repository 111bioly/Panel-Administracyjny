function toggleMenu(visible) {
    document.querySelector('.section_sidebar').classList.toggle('open', visible);
    document.querySelector('.main').classList.add('sidebar-close');
  
  }
  
  document.querySelector('.close-sidebar').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
  
  function toggleMobileMenu(visible) {
    document.querySelector('.section_sidebar').classList.toggle('open', visible);
    document.querySelector('.main').classList.add('sidebar-close');
  
  }
  
  document.querySelector('.mobile-bars').addEventListener('click', function (e) {
    console.log('click: ', e);
    e.preventDefault();
    toggleMobileMenu();
  });