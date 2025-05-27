$(document).ready(function () {
  $("#registerBtn").click(function () {
    $(".eventCard").fadeIn();
  });

  $(".eventCard").dblclick(function () {
    $(this).fadeOut();
  });
});