$(function(){
	aChange()
	headerFixed()
	fullBanner()
	menuShowHide()
	
	function aChange(){
		// 点击a切换样式
		$('#navbar-nav li').click(function(){
			$(this).siblings().removeClass("active")
			$(this).addClass("active")
		})
	}
	
	function headerFixed(){
		// 页面上移，头部下来
	    $(window).scroll(function(event){
			var winPos = $(window).scrollTop()
			var hTop = $('header').height()
			if (winPos > hTop) {
				$('header').addClass('fixed-animated')
			}else if (winPos===0) {
				
				$('header').removeClass('fixed-animated')
			}
			
	    });
	}
	
	// 轮播图
	
	function fullBanner(){
		//图片自动淡入淡出
		var num = 0
		var autoChange = null
		
		$(".bd li").hover(function(){
			clearInterval(autoChange)	
		},function(){
			autoChange = setInterval(function(){ 
			    if(num < $(".bd li").length-1){ 
			      num ++; 
			    }else{ 
			      num = 0;
			    }
			    //调用变换处理函数
			    changeTo(num); 
			},5000);
		})
		
		// 处理小点
		
		$('.hd li').each(function(index){
			$(this).hover(function(){
				clearInterval(autoChange)				
			},function(){
				autoChange = setInterval(function(){ 
			        if(num < $(".bd li").length-1){ 
			          num ++; 
			        }else{ 
			          num = 0;
			        }
			        //调用变换处理函数
			        changeTo(num); 
		        },5000);
			})
			$(this).click(function(){
				changeTo(index)
				num == index
			})
			
		
		})
		function changeTo(num){ 
		    $(".bd").find("li").hide().eq(num).fadeIn(1000)
		    $(".hd").find("li").removeClass("on").eq(num).addClass("on")
	    }
	
	}
	
	//鼠标移动切换二级导航菜单的切换显示和隐藏
	 function menuShowHide() {
        $('.navname').hover(function () {
            //进来
            $(this).children('ul').show();
            $(this).addClass('navnamebg')
            $(this).find('img').addClass('act')
            $(this).find('img').attr("src","img/icon1 .png")
            
            var top = -$(this).height()*$(this).index()
            $(this).find('ul').css('top',top+'px')
            
        },function () {
            //出去
            $(this).children('ul').hide();
            $(this).removeClass('navnamebg')
            $(this).find('img').removeClass('act')
            $(this).find('img').attr("src","img/right.png")
            
        })
    }

	//点击查看详情跳转页面
	goToURL ()
	function goToURL (){
		$('.row').find('.btn').click(function(ev){
			ev.preventDefault()
			location.href = "fuwu.html"
		})
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})