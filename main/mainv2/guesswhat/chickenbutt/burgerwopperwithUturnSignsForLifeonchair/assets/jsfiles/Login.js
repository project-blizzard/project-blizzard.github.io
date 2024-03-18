function checkUser(){
    if(document.getElementById('username').value == 'fish'){ 
       //alert('correct Passcode!');
       if(document.getElementById('passcode').value == 'fish'){
        location.href = "http://fishuuui.github.io/main/mainv2/guesswhat/chickenbutt/burgerwopperwithUturnSignsForLifeonchair/";
        }
      } else {
      //alert('Wrong Passcode or Username');
       return false;
     }

    if(document.getElementById('username').value == 'crit'){
      if(document.getElementById('passcode').value == 'crit'){
        location.href = "http://fishuuui.github.io/main/mainv2/guesswhat/chickenbutt/burgerwopperwithUturnSignsForLifeonchair/";
        }
    } else {
        //alert('Wrong Passcode or Username');
        return false;
    }

    if(document.getElementById('username').value == 'gecko'){
        if(document.getElementById('passcode').value == 'gecko'){
            location.href = "http://fishuuui.github.io/main/mainv2/guesswhat/chickenbutt/burgerwopperwithUturnSignsForLifeonchair/";
        }
    }
}