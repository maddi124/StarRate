var slides = document.getElementsByClassName('silder');
var dot = document.getElementsByClassName('dot');
var index = 0;

function slideshow(){
    
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
        index++;
        console.log(slides.length);
    if(index > slides.length) {
        index = 1;
    }
    for(var d = 0; d < dot.length; d++) {
        dot[d].className = dot[d].className.replace('active','');
    }
    slides[index-1].style.display = 'block';
    dot[index-1].className += 'active';
    setTimeout(slideshow,2000); // change image every 2 seconds 
}

slideshow();

// if(index < 0){
//         index = slides.length-1;
//     }
//     if(index > slides.length-1){
//         index= 0;
//     }
//     for(var i=0;i<slides.length;i++){
//         slides[i].style.display="none";
//         dots[i].classList.remove("active");
//     }
//     slides[index].style.display="block";
//     dots[index].classList.add("acttive");

//     index++

//     setTimeout(slideshow,2000);
