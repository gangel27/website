let typedInstance = null;

function handlePageLoad() {
  const content = document.querySelector('.main-content');
  const body = document.body;

  // Remove preload to allow transitions
  body.classList.remove('preload');

  if (content) {
    content.classList.remove('fade-out');
    content.classList.add('fade-in');
  }

  // Setup internal link transitions
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    const isInternal =
      href &&
      !href.startsWith('http') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:') &&
      !href.startsWith('#');

    if (isInternal) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        if (content) {
          content.classList.remove('fade-in');
          content.classList.add('fade-out');
        }
        setTimeout(() => {
          window.location.href = href;
          bubbles()
        }, 400);
      });
    }
  });

  // Initialize typing animation if present and not already created
  if (document.querySelector('#typed-text') && window.Typed && !typedInstance) {
    typedInstance = new Typed('#typed-text', {
      strings: [
        "Mathematician",
        "Problem Solver",
        "Data Analyst",
        "Software Engineer"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true
    });
  }
}

window.addEventListener('DOMContentLoaded', handlePageLoad);
window.addEventListener('pageshow', handlePageLoad);
window.addEventListener('pagehide', () => {
  const content = document.querySelector('.main-content');
  if (content) {
    content.classList.remove('fade-out');
  }
});
