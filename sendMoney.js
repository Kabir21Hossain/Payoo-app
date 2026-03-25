document.getElementById('send-btn').addEventListener('click', function () {
    const sendNumber = getInputValue('send-number');
    const sendAmount = getInputValue('send-amount');
    const sendPin = getInputValue('send-pin');
    const currentBalance = getCurrentBalance();
    // sendAmount=Number(sendAmount);

    if (sendNumber.length === 11) {
        if (sendPin === '1234') {
            if (Number(sendAmount) > 0 && Number(sendAmount) <= currentBalance) {
                updateBalance(sendAmount, false);
                alert(`${sendAmount} is sent to ${sendNumber} successfully.`);
                document.getElementById('send-number').value = '';
                document.getElementById('send-amount').value = '';
                document.getElementById('send-pin').value = '';

                const container = document.getElementById('history-container');
                        const div = document.createElement('div');
                        div.className = 'bg-base-100 p-4 rounded-2xl border border-gray-200 my-4 flex justify-between items-center shadow-sm';
                        div.innerHTML = `
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 bg-base-200 rounded-full flex items-center justify-center">
                                    <img src="assets/opt-1.png" alt="" class="w-7 h-7">
                                </div>
                                <div>
                                    <p class="font-bold text-lg text-gray-700">Sent Money to ${sendNumber}</p>
                                    <p class="text-sm text-gray-500">Today ${new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</p>
                                </div>
                            </div>
                            <div class="text-gray-500 cursor-pointer">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        `;
                        container.appendChild(div);


            }
            else {
                alert('Insufficient Balance');
                return;

            }

        }
        else {
            alert('Incorrect Pin.');
            return;
        }

    }
    else {
        alert('Invalid account number');
        return;
    }
})