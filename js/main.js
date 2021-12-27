'use strict'

//Mobile menu
$("#Main .LeftMenu .dropped>a").click(function(e){
    e.preventDefault()
    $(".dropped-item").stop().slideUp()
    $(this).parent().find(".dropped-item").stop().slideToggle()
})


//Modal

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

//DropFile

var myDropAre=new Dropzone("div#myDropArea",{url:"/file/post"})


//Video Modal
$('.modal').on('hidden.bs.modal', function(e){
	$(this).find(".playerid").attr("src",$(this).find(".playerid").attr("src"));
  
  })
  
  function toggle(btn){
	var video=$(btn).paretns(".modal-content").find("iframe")
	let videoLink=$(video).attr("src")
	$(video).currentTime=0;
	$(video).attr("src","");
	$(video).attr("src",videoLink);
  
  }	
  

 


 


