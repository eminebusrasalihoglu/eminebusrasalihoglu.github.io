let button = document.querySelector("body a");
button.addEventListener("click", () => {
    const span = document.qeurySelector("a i");
    button.getElementsByClassName.paddingRight = '10px';
    span.style.visibility = "visible";
    setTimeout(() => {
        span.style.visibility = "hidden";
        button.style.paddingRight = "0px";
    }, 3000)
})
$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

    });
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});

