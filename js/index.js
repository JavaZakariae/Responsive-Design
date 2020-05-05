$('.info-list li').on('click', function () {
    $(this).addClass('selected');
    $(this).siblings('li').removeClass('selected');

    window.console.log($(this).data('class'));
    $('.info-content div').hide();
    $('.'+$(this).data('class')).show();

});
