var movingForward = true;


function moveRight() {
    let click = document.getElementById('btn');
    let gcontainer = document.getElementById('groom-container');
    let groom = document.getElementById('groom');
    let inv =document.getElementById('inv');
    
    if (click != null && gcontainer != null && groom!= null) {
        if (movingForward) {
           
            gcontainer.classList.remove('animation-back');
            gcontainer.classList.add('animation');
            inv.classList.remove('d-none');
            inv.classList.add('animation');
            inv.classList.remove('animation-back');
           
            
            movingForward = false;
        }
        else {
            gcontainer.classList.add('animation-back');
            inv.classList.add('animation-back');
            gcontainer.classList.remove('animation');
            
            inv.classList.remove('animation');
            inv.classList.add('d-none');
            

            // gcontainer.classList.add('animation-revcard');
            // invitation.classList.add('d-none');
           
            movingForward = true;
        }
    }
}
