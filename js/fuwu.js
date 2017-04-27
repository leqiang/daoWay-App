$(function(){
	styleChange()
	
	
	function styleChange(){
		// 点击span切换样式(分类)
		$('.fuwu span').click(function(){
			$(this).siblings().removeClass("red")
			$(this).addClass("red")
		})
		
		// 排序
		
		$('.paihang i').click(function(){
			$(this).siblings().removeClass("activity")
			$(this).addClass("activity")
		})
		
		
	}
	
	
	
	
})