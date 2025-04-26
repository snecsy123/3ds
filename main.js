// Section content (imported from markdown for clarity)
import guideContent from './modding-guide.md.js';

document.addEventListener("DOMContentLoaded", function () {
  // Load content into sections
  for (const [id, html] of Object.entries(guideContent)) {
    document.getElementById(id).innerHTML = html;
  }

  // Navigation
  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.ds-section');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sectionId = btn.getAttribute('data-section');
      sections.forEach(sec => {
        if (sec.id === sectionId) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });
    });
  });

  // Set default section
  navBtns[0].classList.add('active');
  sections[0].classList.add('active');
});