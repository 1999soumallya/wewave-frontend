var $grid = $('.grid-fliter').isotope({
    itemSelector: '.gallery_items',
})
// filter items on button click
$('.gallery_menu').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

$('.gallery_menu ul li').click(function () {
    $('.gallery_menu ul li').removeClass('active');
    $(this).addClass('active');
});