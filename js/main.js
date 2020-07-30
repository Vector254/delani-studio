function submit() {
    var Name = document.getElementById("name").value;
    var Email=document.getElementById("e-mail").value;
    var Feedback=document.getElementById("feedback").value;
    if((Name=="")||(Email=="")||(Feedback=="")){
        alert("Please input all fields!");
    }
    else {
        alert("hello!"+Name+", we have received your message. Thank you for reaching out to us.");
    }
  };


$(document).ready(function() {
    //design section
    $(".design").click(function() {
        $("#designText").toggle("");
        $("#designImg").toggle("");
    });

    //development section
    $(".development").click(function() {
        $("#developmentText").toggle("");
        $("#developmentImg").toggle("");
    });
 
    //product section
    $(".product").click(function() {
        $("#productText").toggle("");
        $("#productImg").toggle("");
    });
  
});
$(document).ready(function() {
    $('.hover').hover(function(){
		$('#worktext',this).slideToggle('slow');
	}, function(){
		$('#worktext',this).slideToggle('slow');
    });

});

