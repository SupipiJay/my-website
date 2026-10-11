const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  mainNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
  link.classList.add('active');
}));

const milestones = {
  proposal: {title:'Proposal Presentation', text:'Research problem, objectives, literature background, and proposed methodology.', date:'16 March 2026', marks:'Not provided', status:'Completed'},
  p1: {title:'Progress Presentation 1 (PP1)', text:'Initial research progress, component planning, and design decisions.', date:'11 May 2026', marks:'Not provided', status:'Completed'},
  p2: {title:'Progress Presentation 2 (PP2)', text:'Implementation progress, component integration, and evaluation updates.', date:'31 August 2026', marks:'Not provided', status:'Completed'},
  final: {title:'Final Presentation', text:'Present the integrated research solution, evaluation, findings, limitations, and future improvements.', date:'19 October 2026', marks:'Not provided', status:'Pending'},
  viva: {title:'Viva / Demonstration', text:'Answer questions about the research and demonstrate the system and each component where applicable.', date:'19 October 2026', marks:'Not provided', status:'Pending'}
};
const select = document.getElementById('milestoneSelect');
const detail = document.getElementById('milestoneDetail');
function renderMilestone(key) {
  const item = milestones[key];
  detail.innerHTML = `<span class="status">${item.status}</span><h3>${item.title}</h3><p>${item.text}</p><div class="milestone-meta"><div><small>Date</small><b>${item.date}</b></div><div><small>Marks allocated</small><b>${item.marks}</b></div><div><small>Status</small><b>${item.status}</b></div></div>`;
}
select.addEventListener('change', () => renderMilestone(select.value));

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('senderName').value.trim();
  const email = document.getElementById('senderEmail').value.trim();
  const subject = document.getElementById('messageSubject').value.trim();
  const body = document.getElementById('messageBody').value.trim();
  const recipient = 'oralAi@gmail.com';
  const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\\nEmail: ${email}\\n\\n${body}`)}`;
  document.getElementById('formMessage').textContent = 'Your email app will open with a prepared message to oralAi@gmail.com.';
  window.location.href = mailto;
});
