document.getElementById('btnMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.classList.toggle('text-dark');
      link.classList.toggle('text-light');
    });
    var buttons = document.querySelectorAll('.btn-border');
    buttons.forEach(function(button) {
      if (document.body.classList.contains('dark-mode')) {
        button.style.backgroundColor = '#121212';
        button.style.color = '#ffffff';
        button.style.borderColor = '#ffffff';
      } else {
        button.style.backgroundColor = '';
        button.style.color = '';
        button.style.borderColor = '';
      }
    });
    let text = document.querySelectorAll('.text-dark');
    text.forEach(function(texte) {
      if (document.body.classList.contains('dark-mode')) {
        texte.style.color = '#000000';
      } else {
        texte.style.color = '#ffffff';
      }
    });
    let esp = document.querySelectorAll('.esp');
    esp.forEach(function(texte) {
      if (document.body.classList.contains('dark-mode')) {
        texte.style.color = '#ffffff';
      } else {
        texte.style.color = '#333333';
      }
    });
  });
