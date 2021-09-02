const amount = document.getElementById("amount")
const guest = document.getElementById("guest")
const quality = document.getElementById("quality")
const tipAmount = document.getElementById("tip-amount")

calculate = () => {
    const tip = ((amount.value * quality.value) / (guest.value)).toFixed(2);
    amount.value = "";
    guest.value = "";
    quality.value = "";

    if(tip === 'Nan'){
        tipAmount.innerHTML = "No tip today, Sorry"
    } else {
        tipAmount.innerHTML = "$"+tip+" each"
    }
}