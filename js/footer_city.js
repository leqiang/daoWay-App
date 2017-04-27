
$(function(){
	changeCity()
	
	function changeCity(){
		//点击底部城市切换顶部城市并且保存到localStorage里（缓存）
		$('#showCity').text(window.localStorage.getItem('city'))
		$('.footer i').click(function(){
			$('#showCity').text($(this).text())
			window.localStorage.clear()
			window.localStorage.setItem('city', $(this).text())
			$('html,body').animate({scrollTop:0},10);
			
		})
	}
	
	
	
})












