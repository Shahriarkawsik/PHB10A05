// // console.log("utilities");
// function getValueFromInputField(id){
//   const donationAmount =  parseFloat(document.getElementById(id).value).toFixed(2);
//   return donationAmount;
// }
// function getValueFromButton(id){
//   const donationTotalAmount =  parseFloat(document.getElementById(id).textContent).toFixed(2);
//   return donationTotalAmount;
// }

// function calculateTotalDonationAmount(getValueFromInputField,getValueFromButton){
//   let totalRemainingAmount = getValueFromInputField() + getValueFromButton();
//   return totalRemainingAmount;
// }

function getValueFromInputField(id){
  const value = document.getElementById(id).value;
  if(isNaN(value) || value < 0 || value === ""){
    alert ("Sir, Please write an actual amount.");
    return 0;
  }
  else{
    const donationAmount =  parseFloat(value);
    return donationAmount;
  }
}
function getValueFromButton(id){
  const donationTotalAmount =  parseFloat(document.getElementById(id).textContent);
  return donationTotalAmount;
}

function calculateTotalDonationAmount(inputId,buttonId){
  let totalRemainingAmount = getValueFromInputField(inputId) + getValueFromButton(buttonId);
  return totalRemainingAmount.toFixed(2);
}

// getValueFromInputField(10);
// getValueFromButton(10);
// const TotalDonationAmount = calculateTotalDonationAmount(10,10);
// console.log(TotalDonationAmount);