function checkUser(){
    if(document.getElementById('username').value == 'fish'){ 
       //alert('correct Passcode!');
       if(document.getElementById('passcode').value == 'fish'){
        location.href = "http://project-blizzard.github.io/main/mainv2/guesswhat/chickenbutt/burgerwopperwithUturnSignsForLifeonchair/";
        }
        else {
      //alert('Wrong Passcode or Username');
       return false;
     }
    }

    if(document.getElementById('username').value == 'chris'){
      if(document.getElementById('passcode').value == 'chris'){
        window.location.href = "http://project-blizzard.github.io/main/mainv2/guesswhat/chickenbutt/burgerwopperwithUturnSignsForLifeonchair/";
        } else {
        //alert('Wrong Passcode or Username');
        return false;
        }
    }
    if(document.getElementById('username').value == 'gecko'){
        if(document.getElementById('passcode').value == 'gecko'){
            location.href = "http://project-blizzard.github.io/main/mainv2/guesswhat/chickenbutt/burgerwopperwithUturnSignsForLifeonchair/";
        } else {
        //alert{'Wrong Passcode or Username'};
        return false;
    }
    }
}