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
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay:true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });