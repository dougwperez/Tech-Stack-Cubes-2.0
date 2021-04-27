$(document).ready(function () {
  // $(".front-end").show();
  // $(".back-end").hide();
  // $(".devops").hide();

  $("#dropDown1, #dropDown2, #dropDown3").click(function () {
    $(".drop-down").toggleClass("drop-down--active");
    $(".front-end").addClass("show");
  });
  // $(".bedrop").click(function () {
  // $(".back-end").show();
  //   // $(".drop-down").toggleClass("drop-down--active");
  //   alert("Clicked");
  // });
  $("#fedrop1, #fedrop2, #fedrop3").on("click", function (event) {
    $(".devops").hide();
    $(".front-end").addClass("animated fadeInLeft");
    $(".front-end").show();
    $(".back-end").hide();
  });

  $("#bedrop1, #bedrop2, #bedrop3").on("click", function (event) {
    $(".devops").hide();
    $(".front-end").hide();
    $(".back-end").addClass("animated fadeInLeft");
    $(".back-end").show();
  });

  $("#devopsdrop1, #devopsdrop2, #devopsdrop3").on("click", function (event) {
    $(".devops").addClass("animated fadeInLeft");
    $(".devops").show();
    $(".front-end").hide();
    $(".back-end").hide();
  });
});
