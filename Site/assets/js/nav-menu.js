$(document).ready(function() {
    $('.nav-link').on('click', function(event) {
        event.preventDefault();
        var page = $(this).data('page');
        $('#content').load(page);
    });
});

$('#content').load('view/Home.html');