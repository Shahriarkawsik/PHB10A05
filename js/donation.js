
// single card Donation
// Noakhali Donation
let totalRemainingAmount = getValueFromButton("totalAvailableBalance");
document.getElementById("forDonationBtn").addEventListener('click',function(){

  const inputAmount = getValueFromInputField("forDonationInput");   //moved
  if(totalRemainingAmount < inputAmount){
    alert("You have not enough money for donating")
  }
  else{ 
    const RemainingAmount = calculateTotalDonationAmount("forDonationInput","forDonationAvailableBalance");
    document.getElementById("forDonationAvailableBalance").textContent = RemainingAmount;
  }
  totalRemainingAmount -= inputAmount; //moved
  document.getElementById("totalAvailableBalance").textContent = totalRemainingAmount; //moved
  
  console.log(inputAmount);
})