$(() => {
    // モバイルメニュー表示
	$('.open-btn').on("click", function(){
		$(this).toggleClass('open');
		$('.header-inner').toggleClass('open');
	});
});

$(() => {
    // モバイルメニュー非表示
    $('.close-btn').on("click", function(){
       $('.header-inner').removeClass('open');
    });
  });

$(() => {
    // モバイルメニュー非表示
    $('.header-inner a').on("click", function() {
        $('.header-inner').removeClass('open');
    });
});