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
    $(".portfolioImg").hover(function() {
      $(".portfolioText").show();
      
    });
});
//feedback fetch
$("button").click(function (event) {
    var client = document.getElementById('name').value;
    alert(' Dear  esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    event.preventDefault();
  });