$(".button-collapse").sideNav()
$('.carousel').carousel({fullWidth: true, duration: 100})

$('#carousel-prev-button').click(() => $('.carousel').carousel('prev'))
$('#carousel-next-button').click(() => $('.carousel').carousel('next'))