// document.getElementById('cashout-btn').addEventListener('click', function () {
//     const agentNumber = document.getElementById('cashout-number').value;
//     const amount = document.getElementById('cashout-amount').value;
//     const pin = document.getElementById('cashout-pin').value;
//     const balance = document.getElementById('balance').innerText;

//     if (amount > 0 && amount <= balance) {
//         if (agentNumber.length === 11 && pin === '1234') {
//             const newBalance = Number(balance )- Number(amount);
//             document.getElementById('balance').innerText = newBalance;

//             document.getElementById('cashout-number').value = '';
//             document.getElementById('cashout-amount').value = '';
//             document.getElementById('cashout-pin').value = '';

//             alert('Cashout successful');

//         }
//         else {
//             alert('Invalid agent number or pin');
//         }

//     }
//     else {
//         alert('Insufficient balance');
//     }

// })



document.getElementById('cashout-btn').addEventListener('click',function(){
    const agentNumber=getInputValue('cashout-number');
    const amount=Number(getInputValue("cashout-amount"));
    const pin=getInputValue('cashout-pin');
    const balance=getCurrentBalance();

    if(agentNumber.length===11 && pin==='1234' && amount> 0 && amount<=balance){
        updateBalance(amount,false);
        alert('cashout successful');
    }
    else{
        alert('Invalid agent number or pin');
    }

})