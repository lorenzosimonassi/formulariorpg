function confereSenha(){
    const password = document.getElementById('password');
    const confirmpassword = document.getElementById('confirmpassword');

    if(confirmpassword.value === password.value){
        password.classList.remove('borda-vermelha');
        password.classList.add('borda-verde');
        confirmpassword.classList.remove('borda-vermelha');
        confirmpassword.classList.add('borda-verde');
        return true;
    }else{
        password.classList.remove('borda-vermelha');
        password.classList.add('borda-verde');
        confirmpassword.classList.remove('borda-verde');
        confirmpassword.classList.add('borda-vermelha');
        return alert("As senhas não conferem.");
       
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundAudio');
    audio.volume = 0.1;
    audio.play();
    audio.volume = 0.1;
});