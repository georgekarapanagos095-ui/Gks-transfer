function setLang(lang){
  document.querySelectorAll('[data-el][data-en]').forEach(el=>{
    el.textContent = el.dataset[lang];
  });
  document.documentElement.lang = lang;
}
function sendMail(e){
  e.preventDefault();
  const f=e.target;
  const subject=encodeURIComponent(f.querySelector('input[placeholder*="Θέμα"]').value || 'Transfer Request');
  const body=encodeURIComponent(
    'Name: '+f.querySelector('input[placeholder*="Όνομα"]').value+'\n'+
    'Email: '+f.querySelector('input[type="email"]').value+'\n'+
    'Phone: '+f.querySelector('input[placeholder*="Τηλέφωνο"]').value+'\n\n'+
    f.querySelector('textarea').value
  );
  window.location.href='mailto:gkstransferinfo@gmail.com?subject='+subject+'&body='+body;
}
