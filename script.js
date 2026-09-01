function setLang(lang, button){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-en][data-el]').forEach(el=>el.textContent=el.dataset[lang]);
 document.querySelectorAll('[data-en-ph][data-el-ph]').forEach(el=>el.placeholder=el.dataset[lang+'Ph']);
 document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang===lang));
}
function sendWhatsApp(e){
 e.preventDefault();
 const v=id=>document.getElementById(id).value.trim();
 const lines = [
   'Hello GKS TRANSFER, I would like to request a transfer.',
   '',
   'Name: ' + v('name'),
   'Email: ' + v('email'),
   'Phone / WhatsApp: ' + v('phone'),
   'Pickup: ' + v('pickup'),
   'Destination: ' + v('destination'),
   'Date & Time: ' + v('datetime'),
   'Passengers: ' + v('passengers'),
   'Luggage: ' + v('luggage'),
   'Flight / Ferry: ' + v('flight'),
   '',
   'Additional information: ' + v('message')
 ];
 const text = encodeURIComponent(lines.join('
'));
 const whatsappUrl = 'https://wa.me/306985752229?text=' + text;
 window.open(whatsappUrl, '_blank');
}