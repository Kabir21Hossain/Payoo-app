// let isBonusClaimed = false;

// document.getElementById('bonus-btn').addEventListener('click', function () {
//     const coupon = getInputValue('bonus-coupon');
//     const bonusAmount = 500; // Setting a fixed $500 bonus

//     if (coupon === 'saukh') {
//         if (isBonusClaimed) {
//             alert('You have already claimed this bonus!');
//             document.getElementById('bonus-coupon').value = '';
//             return;
//         }

//         // Add the bonus to the balance
//         updateBalance(bonusAmount, true); // true = deposit
//         isBonusClaimed = true; // Mark as claimed globally

//         alert(`Congratulations! You have received a bonus of $${bonusAmount}.`);
//         document.getElementById('bonus-coupon').value = '';
//     } else if (coupon === '') {
//         alert('Please enter a coupon code.');
//     } else {
//         alert('Invalid coupon code!');
//     }
// });

let isBonusClaimed = false;

function attemptGetBonus(){
    const coupon = getInputValue('bonus-coupon');
    const bonusAmount = 500;

    if (coupon === 'saukh') {
        if (isBonusClaimed) {
            alert('You have already claimed this bonus!');
            return;
        }
        updateBalance(bonusAmount, true);
        isBonusClaimed = true;
        alert('Congratulations! you have received a bonus of $500');
        document.getElementById('bonus-coupon').value = '';

    }

    else if (coupon === ' ') {
        alert('Please enter a coupon code');
        return;
    }

    else {
        alert('Invalid Coupon');
        return;

    }
}

document.getElementById('bonus-btn').addEventListener('click', attemptGetBonus);

document.getElementById('bonus-coupon').addEventListener('keypress', function(event){
    if(event.key==='Enter'){
        attemptGetBonus();
    }
})