// $(document).ready(function () {
//   // $(".front-end").show();
//   // $(".back-end").hide();
//   // $(".devops").hide();

//   $("#dropDown").click(function () {
//     $(".drop-down").toggleClass("drop-down--active");
//     $(".front-end").addClass("show");
//   });
//   // $(".bedrop").click(function () {
//   // $(".back-end").show();
//   //   // $(".drop-down").toggleClass("drop-down--active");
//   //   alert("Clicked");
//   // });
//   $("#fedrop").on("click", function (event) {
//     // $(".front-end").attr("style", "");
//     // $(".front-end").show();
//     $(".front-end").removeClass("hide");
//     $(".front-end").addClass("show");
//     // $(".back-end").hide();
//     // $(".devops").hide();
//     //(... rest of your JS code)
//   });

//   $("#bedrop").on("click", function (event) {
//     // $(".contents .front-end").toggle("slide", { direction: "right" }, 1000);
//     // alert("back");
//     // $(".back-end").attr("style", "");
//     // $(".back-end").toggle();
//     // $(".front-end").hide();
//     // $(".devops").hide();
//     // $(".front-end").toggle();
//     // $(".back-end").css("visibility", "visible");

//     // $(".devops").css("visibility", "hidden");
//     //(... rest of your JS code)
//     // $(".devops").attr("style", "");
//     // $(".front-end").attr("style", "");
//     // $(".back-end").attr("style", "");
//     // $(".back-end").removeAttr("style").show();
//     // $(".dev-ops").removeAttr("style").hide();
//     // $(".front-end").removeAttr("style").hide();
//     // $(".front-end").addClass("invisible");

//     $(".back-end").addClass("show");
//     $(".front-end").removeClass("show");
//     $(".front-end").addClass("hide");
//     $(".devops").removeClass("show");
//   });

//   $("#devopsdrop").on("click", function (event) {
//     console.log("Click detected");
//     // $(".front-end").hide();
//     // $(".back-end").hide();
//     // $(".devops").hide();
//     // $(".devops").toggle();
//     // $(".back-end").toggle();
//     // // $(".front-end").hide();
//     // // $(".devops").hide();
//     // $(".front-end").toggle();
//     $(".back-end").removeClass("show");
//     $(".devops").addClass("show");
//     // $(".front-end").addClass("hide");
//     $(".front-end").removeClass("show");
//     $(".front-end").addClass("hide");

//     // $(".back-end").removeAttr("style").hide();
//     // $(".dev-ops").removeAttr("style").show();
//     // $(".front-end").removeAttr("style").hide();
//     // // $(".devops").attr("style", "");
//     // // $(".front-end").attr("style", "");
//     // // $(".back-end").attr("style", "");
//     // $(".devops").show();

//     // // $(".back-end").hide();

//     //(... rest of your JS code)
//   });
// });

$(document).ready(function () {
  // $(".front-end").show();
  // $(".back-end").hide();
  // $(".devops").hide();

  $("#dropDown").click(function () {
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
    $(".front-end").show();
    $(".back-end").hide();
  });

  $("#bedrop1, #devopsdrop2, #bedrop3").on("click", function (event) {
    $(".devops").hide();
    $(".front-end").hide();
    $(".back-end").show();
  });

  $("#devopsdrop1, #devopsdrop2, #devopsdrop3").on("click", function (event) {
    $(".devops").show();
    $(".front-end").hide();
    $(".back-end").hide();
  });
});
