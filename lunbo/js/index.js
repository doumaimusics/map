$(function(){
	var num = 0;
	$(".imgbox>a").hide().eq(0).show();
	function move(){
		num++;
		if(num>=$(".imgbox>a").length){
			num=0;
		}
		$(".imgbox>a").fadeOut().eq(num).fadeIn();
		$(".btn>div").removeClass("hot").eq(num).addClass("hot")
	}
//	鼠标移入事件  移出事件
	var t=setInterval(move,1000);
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,1000);
	})
	//鼠标移到小按钮上
	$(".btn>div").mouseover(function(){
		var index=$(this).index();
		$(".imgbox>a").fadeOut().eq(index).fadeIn();
		$(".btn>div").removeClass("hot").eq(index).addClass("hot");
		num=index;
	})
	
	/*********************************/
	$(".bannerImgbox img").hide().eq(0).show();
	$(".bannerImgbox a").hide().eq(0).show();
	$(".anniu li img").css("border","3px solid #b17437").eq(0).css("border","3px solid #fff");
	var num2=0;
	function move2(){
		num2++;
		if(num2>=$(".bannerImgbox img").length){
			num2=0;
		}
		$(".bannerImgbox img").fadeOut().eq(num2).fadeIn();
		$(".bannerImgbox a").hide().eq(num2).show();
		$(".anniu li img").css("border","3px solid #b17437").eq(num2).css("border","3px solid #fff");
	}
	var t2=setInterval(move2,1000)
	//鼠标移入移出
	$(".banner").hover(function(){
		clearInterval(t2);
	},function(){
		t2=setInterval(move2,1000);
	})
	//鼠标移到小按钮上
	$(".anniu li img").mouseover(function(){
		var index=$(this).index(".anniu li img");
		$(".bannerImgbox img").fadeOut().eq(index).fadeIn();
		$(".bannerImgbox a").hide().eq(index).show();
		$(".anniu li img").css("border","3px solid #b17437").eq(index).css("border","3px solid #fff");
		num2=index;
	})
	
})
