// script.js - minimal
document.addEventListener('DOMContentLoaded', () => {
  // header shrink on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  // mobile menu toggle (simple)
  const mobile = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav');
  if (mobile) {
    mobile.addEventListener('click', () => {
      nav.classList.toggle('open');
      mobile.classList.toggle('open');
    });
  }

  // simple contact form validation (if contact form exists)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[name="email"]').value.trim();
      const name = form.querySelector('input[name="name"]').value.trim();
      if (!email || !name) {
        alert('Please fill name and email.');
        return;
      }
      // For demo: show success (in real: send to backend)
      alert('Thanks! Your message has been submitted.');
      form.reset();
    });
  }
});
function goToCars() {
window.location.href = "cars.html";
}
function goToContact() {
window.location.href = "contact.html";
}
function openCar(page) {
window.location.href = page;
}