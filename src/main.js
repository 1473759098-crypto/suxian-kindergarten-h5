const contact = document.querySelector('#contact');
document.querySelectorAll('.js-contact').forEach((item) => item.addEventListener('click', () => contact.scrollIntoView({ behavior: 'smooth', block: 'start' })));
const toast = document.querySelector('.toast');
document.querySelectorAll('.js-toast').forEach((item) => item.addEventListener('click', () => { toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3000); }));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
