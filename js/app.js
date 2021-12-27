//Header scroll
const header=document.querySelector("#header .top-head")

window.onscroll=function(){
    if(this.scrollY>120 ){
        header.classList.add("head-active")
    }else{
        header.classList.remove("head-active")

    }
}

 ///Slick
 $('.Slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed:500,
    autoplay:true
  });

  