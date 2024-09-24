
// single card Donation
let totalRemainingAmount = getValueFromButton("totalAvailableBalance");

// Noakhali Donation
document.getElementById("forDonationBtn").addEventListener('click',function(){

  const inputAmount = getValueFromInputField("forDonationInput");   
  if(totalRemainingAmount < inputAmount){
    alert("You have not enough money for donating")
  }
  else{ 
    const RemainingAmount = calculateTotalDonationAmount("forDonationInput","forDonationAvailableBalance");
    document.getElementById("forDonationAvailableBalance").textContent = RemainingAmount;
  }
  totalRemainingAmount -= inputAmount; 
  document.getElementById("totalAvailableBalance").textContent = totalRemainingAmount; 

})

// Donate for relief
document.getElementById("forReliefBtn").addEventListener('click',function(){

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

})

// For Quota Movement
document.getElementById("forQuotaMoveBtn").addEventListener('click',function(){

  const inputAmount = getValueFromInputField("forQuotaMoveInput");   
  if(totalRemainingAmount < inputAmount){
    alert("You have not enough money for donating")
    return;
  }
  else{ 
    const RemainingAmount = calculateTotalDonationAmount("forQuotaMoveInput","forQuotaMoveAvailableBalance");
    document.getElementById("forQuotaMoveAvailableBalance").textContent = RemainingAmount;
  }
  totalRemainingAmount -= inputAmount; 
  document.getElementById("totalAvailableBalance").textContent = totalRemainingAmount; 

})

