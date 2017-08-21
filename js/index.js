$(function() {
	$(".jia").click(function() {
		var num = $(this).prev().html();

		num++;
		if(num >= 99) {
			num = 99;
		}
		$(this).prev().html(num);
		sum();
	});
	$(".jian").click(function() {
		var num = $(this).next().html();
		num--;
		if(num <= 0) {
			num = 0;
		}
		$(this).next().html(num);
		sum();
	});

	//	总价
	function sum() {
		var sum;
		var one = $(".one").html() * $(".picone").html();
		var two = $(".two").html() * $(".pictwo").html();
		var three = $(".san").html() * $(".picthree").html();
		sum = one + two + three;
		$(".pic .price").html(sum + ".00");
	}

	//	弹窗

	$(".pic button").click(function() {
		var pi = parseInt($(".pic .price").html());
		if(pi == 0) {
			$(".elect").addClass("active");
		} else {
			$(".produce").addClass("active");
			$(".produce div").addClass("active");
		}
	});
	$(".elect .disappear").click(function() {
		$(".elect").removeClass("active");
	});

	//	下拉加载更多
	//默认十张
	var i = 10;

	function appchi(data) {
		$.each(data, function(index, value) {
			if(index < i) {
				var lis = "<li class='clearlr'><div class='left'><p>加油券</p><p><span>" + data[index].num + "</span>元</p></div>" +
					"<div class='right'><p>" + data[index].title + "</p><p>消费电话号码:" + data[index].telete + "</p>" +
					"<p class='clearlr'><span>有效期至:</span><span>" + data[index].indate + "</span><span>" + data[index].time + "</span></p></div></li>";
				$(".main ul").append(lis);
			}
			//			添加滚动监听
			$(window).scroll(function() {
				//页面高度
				var windowheight = $(window).height();
				//内容高度
				var sumheight = $('body')[0].scrollHeight;
				//滚动条可滚动距离
				var winscroll = sumheight - windowheight;
				//滚动条滚动的距离
				var scroll = $(window).scrollTop();

				//滚到到底部时加载，每次10张
				if(scroll / winscroll >= 0.95 && index > i && index < i + 10) {
					for(var j = i;j < i + 10;j++) {
						
						if(j>=data.length){
							break;
						}
					
						var lis = "<li class='clearlr'><div class='left'><p>加油券</p><p><span>" + data[j].num + "</span>元</p></div>" +
							"<div class='right'><p>" + data[j].title + "</p><p>消费电话号码:" + data[j].telete + "</p>" +
							"<p class='clearlr'><span>有效期至:</span><span>" + data[j].indate + "</span><span>" + data[j].time + "</span></p></div></li>";
						$(".main ul").append(lis);
						
					}
					i+=10;
				}
			});
		});
	}
	//获取数据
	$.ajax({
		type: "GET",
		url: "data/data.json",
		async: true,
		dataType: 'json',
		success: function(data) {
			appchi(data);
		}
	});

});