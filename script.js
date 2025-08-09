// Smooth Scroll Navigation
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Typewriter Effect on Scroll
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        if (element.classList.contains('typewriter-animation')) {
          element.style.animation = 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite';
        }
      }
    });
  });

  const typewriterElements = document.querySelectorAll('.typewriter-animation');
  typewriterElements.forEach(el => observer.observe(el));
});

// Print Button Functionality
document.addEventListener('DOMContentLoaded', () => {
  const printButton = document.querySelector('.print-button');
  if (printButton) {
    printButton.addEventListener('click', () => {
      window.print();
    });
  }
});

// Dropdown-like Project Type Selector
document.addEventListener('DOMContentLoaded', () => {
  const selectButton = document.querySelector('button[type="button"]');
  const form = document.querySelector('form');

  if (selectButton) {
    selectButton.addEventListener('click', () => {
      const options = ['Web Development', 'Mobile App', 'E-commerce', 'Consulting', 'Other'];
      const currentText = selectButton.querySelector('span').textContent;
      const currentIndex = options.indexOf(currentText);
      const nextIndex = (currentIndex + 1) % options.length;
      selectButton.querySelector('span').textContent = options[nextIndex];
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent! Thank you for reaching out.');
    });
  }
});
