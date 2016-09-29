// (function($) {
//     "use strict";

//     $('body').scrollspy({
//         target: '.navbar-fixed-top',
//         offset: 60
//     });

//     $('#topNav').affix({
//         offset: {
//             top: 200
//         }
//     });
    
//     new WOW().init();
    
//     $('a.page-scroll').bind('click', function(event) {
//         var $ele = $(this);
//         $('html, body').stop().animate({
//             scrollTop: ($($ele.attr('href')).offset().top - 60)
//         }, 1450, 'easeInOutExpo');
//         event.preventDefault();
//     });
    
//     $('.navbar-collapse ul li a').click(function() {
//         /* always close responsive nav after click */
//         $('.navbar-toggle:visible').click();
//     });

//     $('#galleryModal').on('show.bs.modal', function (e) {
//        $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
//     });

// })($);





var words = [
        'links',
        'facebook ads',
        'SEO'
    ];
var time = 0;

function typeWord(word, time) {
	setTimeout(function() {$('#word').html(word)},time);
}

function writeWords() {
    for(x = 0; x < words.length; x++) {
		for(y = 0; y <= words[x].length; y++) {
			var word = words[x].substr(0,y)
			time = time + 200;
			typeWord(word, time);
		}
		time = time+1000;
		for(z = words[x].length; z >= 0; z--) {
			var word = words[x].substr(0, z);
			time = time + 100;
			typeWord(word, time);
		}
		time = time + 1000;
	}
	return time;
}
$(document).ready(function () {
    var finalTime = writeWords();
	setInterval(writeWords(), finalTime);

	 $('.button').mousedown(function (e) {
	    var target = e.target;
	    var rect = target.getBoundingClientRect();
	    var ripple = target.querySelector('.ripple');
	    $(ripple).remove();
	    ripple = document.createElement('span');
	    ripple.className = 'ripple';
	    ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
	    target.appendChild(ripple);
	    var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
	    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
	    ripple.style.top = top + 'px';
	    ripple.style.left = left + 'px';
	    return false;
	});

	AOS.init({
		duration: 1200,
		once: true
	});
	// $(.post)
    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    //new WOW().init();
    
    // $('a.page-scroll').bind('click', function(event) {
    //     var $ele = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: ($($ele.attr('href')).offset().top - 60)
    //     }, 1450, 'easeInOutExpo');
    //     event.preventDefault();
    // });
    
    // $('.navbar-collapse ul li a').click(function() {
    //     /* always close responsive nav after click */
    //     $('.navbar-toggle:visible').click();
    // });
});