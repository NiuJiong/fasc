$(function(){
	$(".jia").click(function(){
		var num = $(this).prev().html();
		
		num++;
		if(num>=99){
			num = 99;
		}
		$(this).prev().html(num);
		sum();
	});
	$(".jian").click(function(){
		var num = $(this).next().html();
		num--;
		if(num<=0){
			num = 0;
		}
		$(this).next().html(num);
		sum();
	});
	
//	总价
	function sum(){
		var sum;
		var one = $(".one").html() * $(".picone").html();
		var two = $(".two").html() * $(".pictwo").html();
		var three = $(".san").html() * $(".picthree").html();
		sum = one + two + three;
		$(".pic .price").html(sum+".00");
	}
	
	
	
//	弹窗
	
	$(".pic button").click(function(){
		var pi = parseInt($(".pic .price").html()); 
		if(pi == 0){
			$(".elect").addClass("active");
		}else{
			$(".produce").addClass("active");
			$(".produce div").addClass("active");
		}
	});
	$(".elect .disappear").click(function(){
		$(".elect").removeClass("active");
	});
	
});
