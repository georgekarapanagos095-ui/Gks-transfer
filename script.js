function setLang(lang){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-en][data-el]').forEach(el=>el.textContent=el.dataset[lang]);
 document.querySelectorAll('[data-en-ph][data-el-ph]').forEach(el=>el.placeholder=el.dataset[lang+'Ph']);
}
function sendMail(e){
 e.preventDefault();
 const v=id=>document.getElementById(id).value;
 const subject=encodeURIComponent('Transfer Request: '+v('route'));
 const body=encodeURIComponent(
  'Name: '+v('name')+'\nEmail: '+v('email')+'\nPhone/WhatsApp: '+v('phone')+
  '\nRoute: '+v('route')+'\nDate & Time: '+v('datetime')+'\nPassengers: '+v('passengers')+
  '\n\nMessage: '+v('message')
 );
 location.href='mailto:gkstransferinfo@gmail.com?subject='+subject+'&body='+body;
}