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

        const container = document.getElementById('history-container');
                        const div = document.createElement('div');
                        div.className = 'bg-base-100 p-4 rounded-2xl border border-gray-200 my-4 flex justify-between items-center shadow-sm';
                        div.innerHTML = `
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 bg-base-200 rounded-full flex items-center justify-center">
                                    <img src="assets/opt-1.png" alt="" class="w-7 h-7">
                                </div>
                                <div>
                                    <p class="font-bold text-lg text-gray-700">Got Bonus $${bonusAmount}</p>
                                    <p class="text-sm text-gray-500">Today ${new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</p>
                                </div>
                            </div>
                            <div class="text-gray-500 cursor-pointer">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        `;
                        container.appendChild(div);


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