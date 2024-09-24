// Tab switching 
document.getElementById("historyBtn").addEventListener('click',function(){
  // add class in history button 
  document.getElementById("historyBtn").classList.add('activeBtn');
  document.getElementById("historyBtn").classList.remove('inactiveBtn');
  // remove class from Donation button 
  document.getElementById("donationBtn").classList.remove('activeBtn');
  document.getElementById("donationBtn").classList.add('inactiveBtn');

  // Have to hide Donation related element.
  document.getElementById("donationElement").classList.add('hidden');
  document.getElementById("historySection").classList.remove('hidden');
  document.getElementById("footerSec").classList.add('fixed','bottom-0', 'w-full');

})

document.getElementById("donationBtn").addEventListener('click',function(){

  document.getElementById("donationBtn").classList.add('activeBtn'); 
  document.getElementById("donationBtn").classList.remove('inactiveBtn');

  document.getElementById("historyBtn").classList.add('inactiveBtn');
  document.getElementById("historyBtn").classList.remove('activeBtn');

  // Have to show Donation related element.
  document.getElementById("donationElement").classList.remove('hidden');
  document.getElementById("historySection").classList.add('hidden');
  document.getElementById("footerSec").classList.remove('fixed','bottom-0', 'w-full');
})