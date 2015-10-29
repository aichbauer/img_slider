$(document).ready(function(){

  var currentPosition = 0;
  var slideWidth = 500;

  var createSliderWindow = $("<div id='sliderWindow'></div>");
  var createSlide = $("<div id='slide'></div>");
  var createButtons = $("<div id='buttonRight'>&gt</div><div id='buttonLeft'>&lt</div>");
  var createSlidesWrap = $("<div id='slidesWrap'></div>");

  var slider = $("#slider");

  var images = ["http://localhost/tuts/img_slider_tut/img/bg1.jpg","http://localhost/tuts/img_slider_tut/img/bg2.jpg","http://localhost/tuts/img_slider_tut/img/bg3.jpg","http://localhost/tuts/img_slider_tut/img/bg4.jpg"];
  var numbersOfSlides = images.length;


  slider.append(createSliderWindow);
  $("#sliderWindow").append(createButtons);
  $("#sliderWindow").append(createSlide);

  for(i = 0; i < numbersOfSlides; i++)
  {
    $("#slide").append("<img src='"+images[i]+"' width='500' />");
  }

  $("#slide").wrapAll(createSlidesWrap);
  $("#slidesWrap").css("float","left");
  $("#slidesWrap").css("width", slideWidth*numbersOfSlides);

  function moveSlide()
  {
    $("#slidesWrap").animate({"marginLeft": slideWidth*(-currentPosition)});
  }
  function changePosition(left)
  {
    if(currentPosition == numbersOfSlides - 1 && !left)
    {
      currentPosition = 0;
    }
    else if (!left)
    {
        currentPosition++;
    }
    if(currentPosition == 0 && left)
    {
      currentPosition = numbersOfSlides-1;
    }
    else if (left)
    {
        currentPosition--;
    }
    moveSlide();
  }

  $("#buttonLeft").click(function(){
    changePosition(true);
  });
  $("#buttonRight").click(function(){
    changePosition(false);
  });

});
