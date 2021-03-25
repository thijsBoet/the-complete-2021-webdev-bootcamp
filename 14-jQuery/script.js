// add and removing classes
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");

// changing text or html
// $("h1").text("Bye")
// $("button").html("<em>Click</em>");

// changing attributes
$("h1").attr("class", "big-title");
$("a").attr("href", "http://www.google.com");

// events
$("h1").on("mouseover", () => $("h1").css("color", "purple"))
$("h1").click(() => {
  $("h1").css("color", "grey")
})
$("input").keypress((e) => {
  $("h1").text(e.key);
});

// javascript way
for (let i = 0; i < 5; i++){
  document.querySelectorAll("button")[i].addEventListener("click", () => {
    document.querySelector("h1").style.color = "gold"
  })
}

// same script using jQuery
$("button").click(() => {
  $("h1").css("color", "navy")
})

// adding stuff to DOM
$("h1").before("<button class='created'>Before</button>")
$("h1").after("<button class='created'>After</button><br>")

// inside h1 tag
$("h1").prepend("<button class='created'>prepend</button><br>");
$("h1").append("<button class='created'>append</button><br>");

// removing stuff from DOM
$("button").remove(".created");

// animation
// $(".toggleBtn").click(() => {
//   $("h1").hide();
// });

// $(".toggleBtn").click(() => {
//   $("h1").show();
// });

$(".toggleBtn").click(() => {
  $("h1").toggle();
});

$(".fadeOut").click(() => {
  $("h1").fadeOut();
});

$(".fadeIn").click(() => {
  $("h1").fadeIn();
});

$(".fadeToggle").click(() => {
  $("h1").fadeToggle();
});

$(".fadeToggle").click(() => {
  $("h1").fadeToggle();
});

$(".fadeToggle").click(() => {
  $("h1").fadeToggle();
});

$(".slideDown").click(() => {
  $("h1").slideDown();
});

$(".slideUp").click(() => {
  $("h1").slideUp();
});

$(".slideToggle").click(() => {
  $("h1").slideToggle();
});

$(".animate").click(() => {
  $("h1").animate({
    opacity: 0.5,
    margin: "20%"
  });
});


console.log($("h1").hasClass("margin-50"))
console.log($("button").css("color"))