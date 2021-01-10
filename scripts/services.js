// Sidenav ham animation
$(function () {
    $('.main-myButton').click(function () {
        $('.content').slideToggle();
    });
});


// When the user scrolls down 20px from the top of the document, slide down the navbar
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myHeader").style.top = "0";
//     } else {
//         document.getElementById("myHeader").style.top = "-80pt";
//     }
// }


///////////////BTN////////////////// -->
jQuery(($) => {
    $('.mybutton--animate-click-one, .mybutton--animate-click-two, .mybutton--animate-click-three')
        .click(function () {
            return _this = this,
                $(_this).stop().addClass('mybutton--click'), setTimeout(function () {
                    $(_this).removeClass('mybutton--click');
                }, 600);
        });
});

////////////////Задержка////////////////// -->
// <!-- <script>
//     $('button').on('click', '.progress-button', function(e) {
// e.preventDefault();
// var url = $(this).data('src');
// setInterval(function() {
// window.location = url;
// }, 3000);
// });
// </script> -->