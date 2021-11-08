
$(document).ready(function () {
  $(".btn-search1").click(function () {
    $(".input-search").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input-search").val("");
  });
});

