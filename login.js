function attemptLogin(){
    const number=document.getElementById('number').value;
    const pin=document.getElementById('pin').value;

    if (number==='01234567890' && pin==='1234'){
        alert('login successful');
        // window.location.href='home.html';
        window.location.assign('home.html');
        //window.location.replace('/home.html');
    }
    else{
        alert('login failed');
    }
}

const numberInput=document.getElementById('number');
const pinInput=document.getElementById('pin');

document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    attemptLogin();
});

numberInput.addEventListener('keyup',function(event){
    if(event.key==='Enter'){
        if(!pinInput.value){
            alert('please fill out the Pin');
        }
        else{
            attemptLogin();
        }
    }
});

pinInput.addEventListener('keyup',function(event){
    if(event.key==='Enter'){
        if(!numberInput.value){
            alert('Please fill out your Mobile number');
        }
        else{
            attemptLogin();
        }
    }
})