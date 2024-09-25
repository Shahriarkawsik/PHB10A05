// for Noakhali donation
document.getElementById("forDonationBtn").addEventListener('click',function(event){
  event.preventDefault();
  const inputAmount = getValueFromInputField("forDonationInput");
  let donationCardTitle = getValueFromText("donationCardTitle");

   if(checkDonation(inputAmount)){
    increaseDonationSectorAmount(inputAmount,"forDonationAvailableBalance");
    decreaseYourCurrentBalance(inputAmount);
    showDonationModal("my_modal_1");
    createNewDiv(inputAmount,donationCardTitle);
  }
  else{
    window.alert("Invalid Donation");
  }
  document.getElementById("forDonationInput").value ="";
})

// for Relief 

document.getElementById("forReliefBtn").addEventListener('click',function(event){
  event.preventDefault();
  const inputAmount = getValueFromInputField("forReliefInput");
  let donationCardTitle = getValueFromText("ReliefCardTitle");

   if(checkDonation(inputAmount)){
    increaseDonationSectorAmount(inputAmount,"forReliefAvailableBalance");
    decreaseYourCurrentBalance(inputAmount);
    showDonationModal("my_modal_1");
    createNewDiv(inputAmount,donationCardTitle);
  }
  else{
    window.alert("Invalid Donation");
  }
  document.getElementById("forReliefInput").value ="";
})

// for Quota Movement 

document.getElementById("forQuotaMoveBtn").addEventListener('click',function(event){
  event.preventDefault();
  const inputAmount = getValueFromInputField("forQuotaMoveInput");
  let donationCardTitle = getValueFromText("quotaMoveCardTitle");

   if(checkDonation(inputAmount)){
    increaseDonationSectorAmount(inputAmount,"forQuotaMoveAvailableBalance");
    decreaseYourCurrentBalance(inputAmount);
    showDonationModal("my_modal_1");
    createNewDiv(inputAmount,donationCardTitle);
  }
  else{
    window.alert("Invalid Donation");
  }
  document.getElementById("forQuotaMoveInput").value ="";
})