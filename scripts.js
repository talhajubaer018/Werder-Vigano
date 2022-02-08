$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".nav-container").addClass(" toggler-clicked");
        $(".header-container").addClass(" toggle-active");
        $(".navbar-nav").addClass(" toggle-active");
        $(".cross").addClass(" toggle-active");
        $(".navbar-toggler").addClass(" toggle-active");
        $(".navigation-link").addClass(" toggle-active");
        $(".language-button").addClass(" toggle-active");
        $(".nav-column").addClass(" toggle-active");
        $(".logo-container").addClass(" toggle-active");
    });
    $(".cross").click(function(){
        $(".nav-container").removeClass(" toggler-clicked");
        $(".header-container").removeClass(" toggle-active");
        $(".navbar-nav").removeClass(" toggle-active");
        $(".cross").removeClass(" toggle-active");
        $(".navbar-toggler").removeClass(" toggle-active");
        $(".navigation-link").removeClass(" toggle-active");
        $(".language-button").removeClass(" toggle-active");
        $(".nav-column").removeClass(" toggle-active");
        $(".logo-container").removeClass(" toggle-active");
    });
});

var clicked = true;
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function language_dropdown_function() {
  var dropdown = document.querySelector(".language-dropdown");
  if(clicked && isMobile) {
    dropdown.style.opacity = '1';
    clicked = false;
  }
  else if (!clicked && isMobile){
    dropdown.style.opacity = '0';
    clicked = true;
  }
}

var largest = 0;

$(document).ready(function(){
  $(".expertise-names").each(function() {
    var findHeight = $(this).height();
    console.log(findHeight);
    if(findHeight > largest && !isMobile) {
      largest = findHeight + 80;
    }
    else if(findHeight > largest && isMobile) {
      largest = findHeight + 40;
    }
  })
  $(".expertise-names").css({"height":largest+"px"});
})

