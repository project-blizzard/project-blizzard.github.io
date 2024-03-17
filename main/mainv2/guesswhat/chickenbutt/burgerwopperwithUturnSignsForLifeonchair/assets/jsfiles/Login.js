function checkUser(){
    if(document.getElementById('username').value == 'fish'){ 
       //alert('correct Passcode!');
       if(document.getElementById('passcode').value == 'fish'){
        location.href = "http://fishuuui.github.io/main/mainv2/guesswhat/chickenbutt/burgerwopperwithUturnSignsForLifeonchair/";
        }
      } else {
      //alert('Wrong Password!');
       return false;
     }

    if(document.getElementById('username').value == 'crit'){
        location.href = "http://fishuuui.github.io/main/mainv2/guesswhat/chickenbutt/burgerwopperwithUturnSignsForLifeonchair/";
    } else {
        return false;
    }
}