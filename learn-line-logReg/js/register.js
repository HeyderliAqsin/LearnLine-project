
$(".log ").click(function(){
    const index = $(this).index();
    $(".login-form").stop().slideUp(0);
    $(" .login-form").eq(index).stop().slideDown();
    $(".logo").css("display","none");
 })
 
 $(".reg").click(function(){
    const regIndex = $(this).index();
    $(".login-form").stop().slideUp(0);
    $(" .login-form").eq(regIndex).stop().slideDown();
    $(".logo").css("display","none");
    
 })