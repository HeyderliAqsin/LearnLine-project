window.onscroll = function () {
    scrollFunction();

};
$(window).on("load", function () {
    setTimeout(() => {
        $(".myload").fadeOut("slow");
        $("body").css("overflow-y", "scroll")
    }, 3500);

});
// this is for loading effect (end)


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $(".scrollBtn").css(
            "bottom", "5%"
        )

    } else {
        $(".scrollBtn").css(
            "bottom", "-150px"
        )
    }
}


$(".scrollBtn").click(function () {
    toTop();


})

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$('.mySlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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

  

  $(".blogs .LeftMenu .dropped>a").click(function(e){
    e.preventDefault()
    $(".dropped-item").stop().slideUp()
    $(this).parent().find(".dropped-item").stop().slideToggle()
})
