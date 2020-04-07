$("ul").on("click","li",function() {
	$(this).toggleClass("done");
});
$("ul").on("click","span",function(e) {
e.stopPropagation();//to stop event bubbling 
 $(this).parent().fadeOut(1000,function(){
      $(this).remove();
 });
});
$("input").keypress(function(event) {
	if(event.which==13){
		var todo=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todo+"</li>");
	}
});
$(".fa-plus").click(function(){
	$("input").fadeToggle(500);
})