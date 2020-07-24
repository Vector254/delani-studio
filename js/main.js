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
    $('#work1, #work2, #work3, #work4, #work5, #work6, #work7, #work8').hover(function() {
        $(this).animate({opacity:0.6});
        $('#work1text').fadeIn();
    
    }, function() {
        $(this).animate({opacity:1})
        $('#work1text').fadeOut();
    
    });
    
});
//feedback fetch
$("button").click(function (event) {
    var client = document.getElementById('name').value;
    alert(' Dear  esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    event.preventDefault();
  });