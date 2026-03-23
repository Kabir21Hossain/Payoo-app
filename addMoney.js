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

})

