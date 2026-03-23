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
