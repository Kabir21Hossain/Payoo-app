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

        const container = document.getElementById('history-container');
                        const div = document.createElement('div');
                        div.className = 'bg-base-100 p-4 rounded-2xl border border-gray-200 my-4 flex justify-between items-center shadow-sm';
                        div.innerHTML = `
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 bg-base-200 rounded-full flex items-center justify-center">
                                    <img src="assets/opt-1.png" alt="" class="w-7 h-7">
                                </div>
                                <div>
                                    <p class="font-bold text-lg text-gray-700">Cashout to ${agentNumber} for $${amount}</p>
                                    <p class="text-sm text-gray-500">Today ${new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</p>
                                </div>
                            </div>
                            <div class="text-gray-500 cursor-pointer">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        `;
                        container.appendChild(div);
    }
    else{
        alert('Invalid agent number or pin');
    }

})