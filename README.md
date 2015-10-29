#img_slider

a simple img_fader created with jquery

AUTHOR: AICHBAUER LUKAS

email: rudolfson.junior@gmail.com

***

## how to use

***

import the css and the js file to your html file.

    <link rel="stylesheet" type="text/css" href="http://localhost/tuts/img_slider_tut/css/img_slider.css" />
    <script type="text/javascript" src="http://localhost/tuts/img_slider_tut/js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="http://localhost/tuts/img_slider_tut/js/img_slider.js"></script>

create a new div in your html file

    <div id="slider">
    </div>

give it the id slider

now import pictures on your project and link the paths in the var images array on the img_slider.js

example:

    var images = ["http://localhost/tuts/img_slider_tut/img/bg1.jpg","http://localhost/tuts/img_slider_tut/img/bg2.jpg]

changing height and width of the slider in the css file and the js file

css

    sliderWindow
    {
       position: relative;
       width: CHANGE ME;
       height: CHANGE ME;
       margin: 0 auto;
       padding: 0;
       overflow: hidden;
       border: solid grey;
    }
    
js

    var slideWidth = CHANGE ME;
