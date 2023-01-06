
var groom = null;
     function init(){
         groom = document.getElementById('groom-container');
         groom.style.position= 'relative';
         groom.style.bottom ='0px';
         groom.style.left = '0px';
      }   
      function moveRight(){
       let right=groom.style.left = parseInt(groom.style.left) + 140 + 'px';
       let invitation =document.getElementById('inv');
       let btn =document.getElementById('btn');
         if(right!=0)
         {
            invitation.classList.remove('d-none');
            btn.classList.add('d-none');
            var step=100;
            var x= document.getElementById('inv').offsetTop;
            x=x+step;
            document.getElementById('inv').style.top=x+'px';



         }
         else{
            invitation.classList.add('d-none');
            btn.classList.remove('d-none');
         }
        
      }
      window.onload =init;