function scrollToObj(start, end, scrollType)
{
    var project=document.querySelector("."+start);
    var projectSection= document.querySelector("."+end);
    project.addEventListener("click",function()
    {
        projectSection.scrollIntoView({block:scrollType, behavior:"smooth"});
    });
}

function slideAnim(obj,transform1,transform2)
{
    obj.animate(
        [
            {transform: transform1},
            {transform: transform2}
        ],
        {
            duration:500,
            iterations:1
        }
    );
}

//GO TO ABOUT ME
scrollToObj("about-me-anc","about-me","center");

//GO TO PROJECTS
scrollToObj("projects-anc","project-h","start");

//GO TO CONTACTS
scrollToObj("contacts-anc","contacts","start");


//move carousel
const carouselItems=document.querySelectorAll(".carousel-item");
var nextBtn=document.querySelector(".carousel-control-next");
var prevBtn=document.querySelector(".carousel-control-prev");
var i=0;
nextBtn.addEventListener("click", function(e)
{
    
    e.preventDefault();
    if(i===carouselItems.length-1) 
    {
        slideAnim(carouselItems[i],"translateX(0px)","translateX(-100%)");
        var j=0;
        carouselItems[j].classList.add("active");
        slideAnim(carouselItems[j],"translateX(100%)","translateX(0px)");
        setTimeout(function(){carouselItems[i].classList.remove("active");i=j;},500);
    }
    else
    {
        slideAnim(carouselItems[i],"translateX(0px)","translateX(-100%)");
        carouselItems[i+1].classList.add("active");
        slideAnim(carouselItems[i+1],"translateX(100%)","translateX(0px)");
        setTimeout(function(){carouselItems[i].classList.remove("active");i++;},500);
        
        
    }
    
});

prevBtn.addEventListener("click", function(e)
{
    e.preventDefault();
    if(i===0) 
        {   slideAnim(carouselItems[i],"translateX(0px)","translateX(100%)");
            
            var j=carouselItems.length-1;
            carouselItems[j].classList.add("active");
            slideAnim(carouselItems[j],"translateX(-100%)","translateX(0px)");
            setTimeout(function(){carouselItems[i].classList.remove("active");i=j;},500);
        }
        else
        {
            slideAnim(carouselItems[i],"translateX(0px)","translateX(100%)");
            carouselItems[i-1].classList.add("active");
            slideAnim(carouselItems[i-1],"translateX(-100%)","translateX(0px)");
            setTimeout(function(){carouselItems[i].classList.remove("active");i--;},500);
            
        }
        
   

});