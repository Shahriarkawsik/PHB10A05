
// single card Donation
let totalRemainingAmount = getValueFromButton("totalAvailableBalance");

// Noakhali Donation
document.getElementById("forDonationBtn").addEventListener('click',function(event){
  event.preventDefault();
  const donationCardTitle = document.getElementById("donationCardTitle").innerText;
  const inputAmount = getValueFromInputField("forDonationInput");   
  if(totalRemainingAmount < inputAmount){
    alert("You have not enough money for donating");
  }
  else{ 
    const RemainingAmount = calculateTotalDonationAmount("forDonationInput","forDonationAvailableBalance");
    document.getElementById("forDonationAvailableBalance").textContent = RemainingAmount;
  }
  totalRemainingAmount -= inputAmount; 
  document.getElementById("totalAvailableBalance").textContent = totalRemainingAmount; 
  const donationDate = new Date();
  createNewDiv(inputAmount,donationCardTitle,donationDate);
  document.getElementById('forDonationInput').value = '';
})

// Donate for relief
document.getElementById("forReliefBtn").addEventListener('click',function(){
  const donationCardTitle = document.getElementById("ReliefCardTitle").innerText;
  const inputAmount = getValueFromInputField("forReliefInput");   
  if(totalRemainingAmount < inputAmount){
    alert("You have not enough money for donating")
  }
  else{ 
    const RemainingAmount = calculateTotalDonationAmount("forReliefInput","forReliefAvailableBalance");
    document.getElementById("forReliefAvailableBalance").textContent = RemainingAmount;
  }
  totalRemainingAmount -= inputAmount; 
  document.getElementById("totalAvailableBalance").textContent = totalRemainingAmount; 

  const donationDate = new Date();
  createNewDiv(inputAmount,donationCardTitle,donationDate);
  document.getElementById('forReliefInput').value = '';
})

// For Quota Movement
document.getElementById("forQuotaMoveBtn").addEventListener('click',function(){
  const donationCardTitle = document.getElementById("quotaMoveCardTitle").innerText;
  const inputAmount = getValueFromInputField("forQuotaMoveInput");   
  if(totalRemainingAmount < inputAmount){
    alert("You have not enough money for donating");
    return;
  }
  else{ 
    const RemainingAmount = calculateTotalDonationAmount("forQuotaMoveInput","forQuotaMoveAvailableBalance");
    document.getElementById("forQuotaMoveAvailableBalance").textContent = RemainingAmount;
    const donationDate = new Date();
    createNewDiv(inputAmount,donationCardTitle,donationDate);
  }
  totalRemainingAmount -= inputAmount; 
  document.getElementById("totalAvailableBalance").textContent = totalRemainingAmount; 
  document.getElementById('forQuotaMoveInput').value = '';
})

