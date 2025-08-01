// window.addEventListener('DOMContentLoaded', () => {
//   const content = document.querySelector('.main-content');

//   // Re-trigger fade-in animation reliably
//   if (content) {
//     content.classList.remove('fade-in');     // Remove if present
//     void content.offsetWidth;                // Force reflow
//     content.classList.add('fade-in');        // Re-add to trigger transition
//   }

//   // Load navbar
//   fetch('/navbar.html')
//     .then(r => r.text())
//     .then(html => {
//       document.getElementById('navbar').innerHTML = html;
//     });

//   // Attach click fade-out via event delegation
//   document.addEventListener('click', function (e) {
//     const link = e.target.closest('a[href]');
//     if (!link) return;

//     const href = link.getAttribute('href');
//     const isInternal =
//       href &&
//       !href.startsWith('http') &&
//       !href.startsWith('#') &&
//       !link.hasAttribute('target');

//     if (isInternal) {
//       e.preventDefault();

//       if (content) {
//         content.classList.remove('fade-in');
//         content.classList.add('fade-out');
//       }

//       setTimeout(() => {
//         window.location.href = href;
//       }, 400); // match your fade duration
//     }
//   });

//   // Optional: Typed.js
//   if (document.querySelector('#typed-text') && window.Typed) {
//     new Typed('#typed-text', {
//       strings: [
//         "Mathematician.",
//         "Problem Solver.",
//         "Data Enthusiast.",
//         "Communicator."
//       ],
//       typeSpeed: 50,
//       backSpeed: 30,
//       backDelay: 1000,
//       loop: true
//     });
//   }
// });



window.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.main-content');
  const body = document.body;

  fetch('https://gangel27.github.io/website/navbar.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('navbar').innerHTML = html;

      // Wait a tiny bit to let DOM update, then show content
      requestAnimationFrame(() => {
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
            !href.startsWith('#') &&
            !link.hasAttribute('target');

          if (isInternal) {
            link.addEventListener('click', function (e) {
              e.preventDefault();
              if (content) {
                content.classList.remove('fade-in');
                content.classList.add('fade-out');
              }
              setTimeout(() => {
                window.location.href = href;
              }, 400);
            });
          }
          
        });
        if (document.querySelector('#typed-text') && window.Typed) {
            new Typed('#typed-text', {
            strings: [
                "Mathematician.",
                "Problem Solver.",
                "Data Enthusiast.",
                "Communicator."
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            loop: true
            });
        }
      });
    });
});
