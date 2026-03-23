function getInputValue(id){
    const input=document.getElementById(id);
    const value=input.value;
    return value;
}

function getCurrentBalance(){
    const balance=document.getElementById('balance').innerText;
    return Number(balance);
}

function setBalance(newBalance){
    document.getElementById('balance').innerText=newBalance;
}

function updateBalance(amount,isDeposit){
    const balance=getCurrentBalance();

    if(isDeposit){
        setBalance(balance+amount);
    }
    else{
        if(balance>=amount){
            setBalance(balance-amount);
        }
        else{
            alert('Insufficient balance');
            return;
        }
    }
}


// toggling function

function showOnly(id){
    const allSection=document.querySelectorAll('.toggles');
    allSection.forEach(section=>{
        section.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');

}