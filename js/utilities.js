
function getValueFromInputField(id){
  const inputValue = document.getElementById(id).value;
  
  if(isNaN(inputValue) || inputValue < 0 || inputValue === ""){
    alert("Sir, Please write an actual amount.");
    return 0;
  }
  else{
    const donationAmount =  parseFloat(inputValue);
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


function createNewDiv(inputAmount,donationCardTitle,donationDate){
  const historyContainer = document.getElementById("historyContainer");
  const historyCard = document.createElement("div");
  historyCard.classList.add("historyCard");
  historyCard.innerHTML =
  `
    <h1 class="historyCardTitle"> ${inputAmount} Taka is Donated for ${donationCardTitle}</h1>
    <p class="historyCardSubtitle ">Date : ${donationDate}</p>
  `;  
  historyContainer.appendChild(historyCard);
}
