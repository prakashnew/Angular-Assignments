currentindex=0
images=["image1.jpg","image2.jpg","image3.jpg"]
arrow=["downarrow.png","uparrow.png"]

currentarrow=1

setInterval(function(){
    currentindex=Math.round(Math.random()*2)
    document.getElementById("img1").src =images[currentindex]
},2000)


function changeimage(arrowtype){
    if(arrowtype=="right")
        currentindex=currentindex==2?0:++currentindex
    else if(arrowtype=="left")
        currentindex=currentindex==0?2:--currentindex
    document.getElementById("img1").src=images[currentindex]
}



function showOrHide() 
{
    var div = document.getElementById("slide-area");
    if (div.style.display == "block") 
    {
        document.getElementById("img-arrow").src = "images/downarrow.png";
        div.style.display = "none";
    }
    else 
    {
        div.style.display = "block";
        document.getElementById("img-arrow").src = "images/uparrow.png";
    }
}
