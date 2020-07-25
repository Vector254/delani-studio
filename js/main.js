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
    $(".hover1").hover(function() {
        //$(this).animate({opacity:0.4});
        $('#work1text').show();
    }, function() {
       // $(this).animate({opacity:1})
        $('#work1text').hide();  
    });
    $(".hover2").hover(function() {
        $(this).animate({opacity:0.4});
        $('#work2text').fadeIn();
    }, function() {
        $(this).animate({opacity:1})
        $('#work2text').fadeOut();  
    });
    $(".hover3").hover(function() {
        $(this).animate({opacity:0.4});
        $('#work3text').fadeIn();
    }, function() {
        $(this).animate({opacity:1})
        $('#work3text').fadeOut();  
    });
    $(".hover4").hover(function() {
        $(this).animate({opacity:0.4});
        $('#work4text').fadeIn();
    }, function() {
        $(this).animate({opacity:1})
        $('#work4text').fadeOut();  
    });
    $(".hover5").hover(function() {
        $(this).animate({opacity:0.4});
        $('#work5text').fadeIn();
    }, function() {
        $(this).animate({opacity:1})
        $('#work5text').fadeOut();  
    });
    $(".hover6").hover(function() {
        $(this).animate({opacity:0.4});
        $('#work6text').fadeIn();
    }, function() {
        $(this).animate({opacity:1})
        $('#work6text').fadeOut();  
    });
    $(".hover7").hover(function() {
        $(this).animate({opacity:0.4});
        $('#work7text').fadeIn();
    }, function() {
        $(this).animate({opacity:1})
        $('#work7text').fadeOut();  
    });$(".hover8").hover(function() {
        $(this).animate({opacity:0.4});
        $('#work8text').fadeIn();
    }, function() {
        $(this).animate({opacity:1})
        $('#work8text').fadeOut();  
    });

    
});
//feedback fetch
