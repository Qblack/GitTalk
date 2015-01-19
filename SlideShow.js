
var windowHeight = $(window).height()

var sections = $('.slide')

sections.css("height", windowHeight);


$(window).resize(function () {
    "use strict";
    var windowHeight = $(window).height(), windowWidth = $(window).width(), centerHeight = windowHeight / 2, centerWidth = windowWidth / 2;
    sections.css("height", windowHeight);
});

var current = 0;
function MoveUp() {
    "use strict";
    current -= 1;
    current = Math.min(sections.length-1, Math.max(current, 0));

    $("html, body").animate({ scrollTop: sections.eq(current).offset().top});
}

function MoveDown() {
    "use strict";
    current += 1;
    current = Math.min(sections.length-1, Math.max(current, 0));
    console.log(sections.eq(current));
    $("html, body").animate({ scrollTop: sections.eq(current).offset().top});
}

document.onkeydown = function (evt) {
    "use strict";
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37: //<-
            MoveUp();
            break;
        case 39: //->
            MoveDown();
            break;
    }
};