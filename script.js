function setLang(lang, button){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-en][data-el]').forEach(el=>el.textContent=el.dataset[lang]);
 document.querySelectorAll('[data-en-ph][data-el-ph]').forEach(el=>el.placeholder=el.dataset[lang+'Ph']);
 document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang===lang));
}
function sendMail(e){
 e.preventDefault();
 const v=id=>document.getElementById(id).value;
 const subject=encodeURIComponent('GKS Transfer Request: '+v('pickup')+' to '+v('destination'));
 const body=encodeURIComponent(
 'Name: '+v('name')+'\nEmail: '+v('email')+'\nPhone/WhatsApp: '+v('phone')+
 '\nPickup: '+v('pickup')+'\nDestination: '+v('destination')+
 '\nDate & Time: '+v('datetime')+'\nPassengers: '+v('passengers')+
 '\nLuggage: '+v('luggage')+'\nFlight/Ferry: '+v('flight')+
 '\n\nAdditional information: '+v('message'));
 location.href='mailto:gkstransferinfo@gmail.com?subject='+subject+'&body='+body;
}