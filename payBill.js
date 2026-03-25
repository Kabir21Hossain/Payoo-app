document.getElementById('bill-btn').addEventListener('click', function () {
    const billName = getInputValue('bill-name');
    const billNumber = getInputValue('bill-number');
    const billAmount = getInputValue('bill-amount');
    const billPin = getInputValue('bill-pin');
    const currentBalance = getCurrentBalance();

    if (billName !== 'Select A Bill') {
        if (billNumber.length === 11) {
            if (billPin === '1234') {
                if (Number(billAmount) > 0 && Number(billAmount) <= currentBalance) {
                    updateBalance(billAmount, false);
                    alert(`Successfully paid $${billAmount} for ${billName} bill to account ${billNumber}.`);

                    document.getElementById('bill-name').value = 'Select A Bill';
                    document.getElementById('bill-number').value = '';
                    document.getElementById('bill-amount').value = '';
                    document.getElementById('bill-pin').value = '';

                    const container = document.getElementById('history-container');
                        const div = document.createElement('div');
                        div.className = 'bg-base-100 p-4 rounded-2xl border border-gray-200 my-4 flex justify-between items-center shadow-sm';
                        div.innerHTML = `
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 bg-base-200 rounded-full flex items-center justify-center">
                                    <img src="assets/opt-1.png" alt="" class="w-7 h-7">
                                </div>
                                <div>
                                    <p class="font-bold text-lg text-gray-700">Bill Paid to ${billName}</p>
                                    <p class="text-sm text-gray-500">Today ${new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</p>
                                </div>
                            </div>
                            <div class="text-gray-500 cursor-pointer">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        `;
                        container.appendChild(div);
                } else {
                    alert('Insufficient Balance');
                }
            } else {
                alert('Incorrect Pin.');
            }
        } else {
            alert('Invalid Biller Account Number');
        }
    } else {
        alert('Please Select a Bill Type');
    }
});
