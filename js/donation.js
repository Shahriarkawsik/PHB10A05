// let totalRemainingAmount = getValueFromButton("totalAvailableBalance");

document.getElementById("forDonationBtn").addEventListener('click',function(event){
  event.preventDefault();
  const inputAmount = getValueFromInputField("forDonationInput");
  let donationCardTitle = getValueFromText("donationCardTitle");
  // console.log(donationCardTitle);
  // window.alert(typeof inputAmount);
  // typeOf inputAmount is number

  if(checkDonation(inputAmount)){
    increaseDonationSectorAmount(inputAmount,"forDonationAvailableBalance");
    decreaseYourCurrentBalance(inputAmount);
    showDonationModal("my_modal_1");
    createNewDiv(inputAmount,donationCardTitle);
    // window.alert("pass");
  }
  else{
    window.alert("Invalid Donation");
  }
  document.getElementById("forDonationInput").value ="";

})