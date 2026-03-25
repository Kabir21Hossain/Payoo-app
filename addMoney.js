document.getElementById('add-btn').addEventListener('click', function () {
    const bankName = getInputValue('bank-name');
    const account = getInputValue('add-number');
    const amount = getInputValue('add-amount');
    const pin = getInputValue('add-pin');

    // console.log(bankName,account,amount,pin);
    if (bankName && account && amount && pin) {
        if (bankName !== 'Select A Bank') {
            if (account.length === 11) {
                if (pin.length === 4 && pin === '1234') {
                    if (Number(amount) > 0) {
                        alert(`Money Added Successfully at ${account} in ${bankName} on ${new Date().toLocaleString()}`);

                        updateBalance(Number(amount), true);

                        document.getElementById('add-number').value = '';
                        document.getElementById('add-amount').value = '';
                        document.getElementById('add-pin').value = '';
                        document.getElementById('bank-name').value = 'Select A Bank';

                        const container = document.getElementById('history-container');
                        const div = document.createElement('div');
                        div.className = 'bg-base-100 p-4 rounded-2xl border border-gray-200 my-4 flex justify-between items-center shadow-sm';
                        div.innerHTML = `
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 bg-base-200 rounded-full flex items-center justify-center">
                                    <img src="assets/opt-1.png" alt="" class="w-7 h-7">
                                </div>
                                <div>
                                    <p class="font-bold text-lg text-gray-700">Added Money from ${bankName}</p>
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
                        alert('Please enter a valid amount.');
                        return;
                    }


                }
                else {
                    alert('Please enter a valid pin number.');
                    return;
                }

            }
            else {
                alert('Please enter a valid account number.');
                return;
            }


        }
        else {
            alert('Please Select a Bank.');
            return;
        }
    }
    else {
        alert('please fill out all the fields.');
    }

});

