const navLinks = document.querySelectorAll('.navlink');


navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href');

    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const readMoreButton = document.querySelector('.homebuttons a');

readMoreButton.addEventListener('click', (e) => {
  e.preventDefault();
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({
    behavior: 'smooth',
  });
});