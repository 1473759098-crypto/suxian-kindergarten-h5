const contact = document.querySelector('#contact');
document.querySelectorAll('.js-contact').forEach((item) => item.addEventListener('click', () => contact.scrollIntoView({ behavior: 'smooth', block: 'start' })));
const toast = document.querySelector('.toast');
document.querySelectorAll('.js-toast').forEach((item) => item.addEventListener('click', () => { toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3000); }));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

const music = document.querySelector('#background-music');
const musicToggle = document.querySelector('.music-toggle');
const updateMusicButton = (playing) => {
  musicToggle.classList.toggle('is-playing', playing);
  musicToggle.setAttribute('aria-pressed', String(playing));
  musicToggle.setAttribute('aria-label', playing ? '暂停背景音乐' : '播放背景音乐');
};
const playMusic = () => music.play().then(() => updateMusicButton(true)).catch(() => updateMusicButton(false));
const tryAutoplay = () => { music.volume = 0.48; playMusic(); };

tryAutoplay();
window.addEventListener('load', tryAutoplay, { once: true });
document.addEventListener('WeixinJSBridgeReady', tryAutoplay, false);
music.addEventListener('play', () => updateMusicButton(true));
music.addEventListener('pause', () => updateMusicButton(false));
musicToggle.addEventListener('click', () => { if (music.paused) playMusic(); else music.pause(); });
document.addEventListener('pointerdown', () => { if (music.paused) playMusic(); }, { once: true });
