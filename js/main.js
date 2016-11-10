
        //SLIDER 
        
       
    var imagecount = 1;
    var total = 3;
        function slide (x) {
            
            var image = document.getElementById("images");
            
            imagecount = imagecount+x;
            if (imagecount>total){
                
                imagecount=1;
            }
            
            if (imagecount<=0)
                {imagecount=total}
                
                image.src="images/slide"+imagecount+".jpg";
            
        }

      window.setInterval(function(){
             slide(1)
}, 2000);
    
    
        
        var clickk = true
document.getElementById("buttonId").addEventListener("click", function (){
if (clickk==true){

document.getElementById("resp").style.display="block";
clickk=false
}
else {
document.getElementById("resp").style.display="none";
clickk=true;
}
})
    
 