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
        $('#work1text').show("");
    }, function() {
        $('#work1text').hide("");  
    });
    $(".hover2").hover(function() {
        $('#work2text').show("");
    }, function() {
        $('#work2text').hide("");  
    });
    $(".hover3").hover(function() {
        $('#work3text').show("");
    }, function() {
        $('#work3text').hide("");  
    });
    $(".hover4").hover(function() {
        $('#work4text').show("");
    }, function() {
        $('#work4text').hide("");  
    });
    $(".hover5").hover(function() {
        $('#work5text').show("");
    }, function() {
        $('#work5text').hide("");  
    });
    $(".hover6").hover(function() {
        $('#work6text').show("");
    }, function() {
        $('#work6text').hide("");  
    });
    $(".hover7").hover(function() {
        $('#work7text').show("");
    }, function() {
        $('#work7text').hide("");  
    });
    $(".hover8").hover(function() {
        $('#work8text').show("");
    }, function() {
        $('#work8text').hide("");  
    });
});

