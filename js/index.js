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
		$(".pic span").html("￥"+sum+".00");
	}
	
	
	
	
	
});
