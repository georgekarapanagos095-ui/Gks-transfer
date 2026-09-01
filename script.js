function setLang(lang, button){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-en][data-el]').forEach(el=>el.textContent=el.dataset[lang]);
 document.querySelectorAll('[data-en-ph][data-el-ph]').forEach(el=>el.placeholder=el.dataset[lang+'Ph']);
 document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang===lang));
}
async function sendBooking(e){
 e.preventDefault();
 const form = document.getElementById('bookingForm');
 const button = document.getElementById('submitBooking');
 const status = document.getElementById('bookingStatus');
 const lang = document.documentElement.lang || 'en';

 button.disabled = true;
 button.textContent = lang === 'el' ? 'ΑΠΟΣΤΟΛΗ...' : 'SENDING...';
 status.className = 'booking-status';
 status.textContent = '';

 const data = new FormData(form);
 data.append('_subject', 'New GKS TRANSFER Booking Request');
 data.append('_template', 'table');
 data.append('_captcha', 'false');

 try {
   const response = await fetch('https://formsubmit.co/ajax/gkstransferinfo@gmail.com', {
     method: 'POST',
     headers: { 'Accept': 'application/json' },
     body: data
   });
   const result = await response.json();
   if (!response.ok || result.success === false) throw new Error('Submission failed');

   status.className = 'booking-status success';
   status.textContent = lang === 'el'
     ? '✓ Το αίτημά σας στάλθηκε επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.'
     : '✓ Thank you! Your transfer request has been sent successfully. We will contact you soon.';
   form.reset();
 } catch (err) {
   status.className = 'booking-status error';
   status.textContent = lang === 'el'
     ? 'Δεν ήταν δυνατή η αποστολή. Παρακαλώ επικοινωνήστε μαζί μας μέσω WhatsApp ή τηλεφώνου.'
     : 'We could not send your request. Please contact us by WhatsApp or phone.';
 } finally {
   button.disabled = false;
   button.textContent = lang === 'el' ? 'ΑΠΟΣΤΟΛΗ ΑΙΤΗΜΑΤΟΣ' : 'SEND BOOKING REQUEST';
 }
}