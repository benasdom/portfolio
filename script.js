    // CURSOR
    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursorTrail');
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      setTimeout(() => {
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
      }, 80);
    });

    // THEME TOGGLE
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    let dark = true;
    toggle.addEventListener('click', () => {
      dark = !dark;
      html.setAttribute('data-theme', dark ? 'dark' : 'light');
      toggle.innerHTML = dark ? '☀' : '🌙';
    });

    // ACTIVE NAV
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`header nav a[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => observer.observe(s));

    // SCROLL REVEALS
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => revealObserver.observe(el));

    // SMOOTH SCROLL FOR NAV LINKS
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });