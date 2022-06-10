$(document).ready(function () {
    $('.btn-top').click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })
})