function getValueFromInputField(inputId){
  const inputValue = Number(document.getElementById(inputId).value);
  return inputValue;
};
function getValueFromButton(btnId){
  const btnValue = Number(document.getElementById(btnId).innerText);
  return btnValue;
};
function getValueFromText(textId){
  const textValue = document.getElementById(textId).innerText;
  return textValue;
}
let totalRemainingAmount = getValueFromButton("totalAvailableBalance");
// console.log(totalRemainingAmount);
function checkDonation(inputAmount){
  const donateAmount = inputAmount;
    if(typeof donateAmount === 'number' && donateAmount > 0 && totalRemainingAmount >= donateAmount){
    return true
  }
  else{
    return false;
  }
}
function increaseDonationSectorAmount(inputAmount,btnId){
  const forDonationAvailableBalance = getValueFromButton(btnId) + inputAmount;// number
  document.getElementById(btnId).textContent = forDonationAvailableBalance
  // return forDonationAvailableBalance;
}
function decreaseYourCurrentBalance(inputAmount){
  let totalRemainingAmount = getValueFromButton("totalAvailableBalance");
  totalAmount = totalRemainingAmount - inputAmount;
  document.getElementById("totalAvailableBalance").textContent = totalAmount;
}

function showDonationModal(id){
  document.getElementById(id).showModal();
}

function createNewDiv(inputAmount,donationCardTitle){
  const donationDate = new Date();
  const historyContainer = document.getElementById("historyContainer");
  const historyCard = document.createElement("div");
  historyCard.classList.add('p-8', 'border', 'border-solid', 'border-borderColor2', 'rounded-2xl', 'space-y-4');
  // historyCard.innerHTML = "";
  historyCard.innerHTML =
  `
    <h1 class="text-20 font-bold leading-8 text-textColor"> ${inputAmount} Taka is Donated for ${donationCardTitle} </h1>
    <p class="text-textColor2 font-light leading-7 ">Date : ${donationDate}</p>
  `;  
  historyContainer.appendChild(historyCard);
}
