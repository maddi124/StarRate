var slides = document.querySelectorAll(".silder");
var dot = document.querySelectorAll(".dots");
var index = 0;

function slideshow(){
    if(index < 0){
        index = slides.length-1;
    }
    if(index > slides.length-1){
        index= 0;
    }
    for(var i=0;i<slides.length;i++){
        slides[i].style.display="none";
        dots[i].classList.remove("active");
    }
    slides[index].style.display="block";
    dots[index].classList.add("acttive");

    index++

    setTimeout(slideshow,2000);
}




