var copyLink = new ClipboardJS('.copy-link');
copyLink.on('success', function(e) {
	$('.copy-link').addClass('copied');
	setTimeout(function(){
		$('.copy-link').removeClass('copied');
	}, 1000);
});

var copyField = new ClipboardJS('.copy-link .btn');
copyField.on('success', function(e){
	$('.copy-link .btn').text('Done!');
	setTimeout(function(){
		$('.copy-link .btn').text('Copy');
	}, 1000);
});

var copyCode = new ClipboardJS('.btn');
copyCode.on('success', function(e){
$('.btn').addClass('copied');
	setTimeout(function(){
		$('.btn').removeClass('copied');
	}, 1000);
});