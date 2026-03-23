document.getElementById('send-btn').addEventListener('click',function(){
    const sendNumber=getInputValue('send-number');
    const sendAmount=getInputValue('send-amount');
    const sendPin=getInputValue('send-pin');
    const currentBalance=getCurrentBalance();
    // sendAmount=Number(sendAmount);

    if(sendNumber.length===11){
        if(sendPin==='1234'){
            if(Number(sendAmount)>0 && Number(sendAmount)<=currentBalance){
                updateBalance(sendAmount,false);
                alert(`${sendAmount} is sent to ${sendNumber} successfully.`);
                document.getElementById('send-number').value='';
                document.getElementById('send-amount').value='';
                document.getElementById('send-pin').value='';
                

            }
            else{
                alert('Insufficient Balance');
                return;

            }

        }
        else{
            alert('Incorrect Pin.');
            return;
        }

    }
    else{
        alert('Invalid account number');
        return;
    }
})