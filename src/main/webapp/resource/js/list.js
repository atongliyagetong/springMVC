$(function(){
	

});
//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
//例子：
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
//(new Date()).Format("yyyy-M-d h:m:s.S")   ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
var o = {
 "M+": this.getMonth() + 1, //月份
 "d+": this.getDate(), //日
 "h+": this.getHours(), //小时
 "m+": this.getMinutes(), //分
 "s+": this.getSeconds(), //秒
 "q+": Math.floor((this.getMonth() + 3) / 3), //季度
 "S": this.getMilliseconds() //毫秒
};
if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
for (var k in o)
if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
return fmt;
}

function save(){
	var $row = $(event.target).parents('tr');
	$.ajax({
		url: '/goods/update',
		type: 'post',
		dataType: 'json',
		data: {
			'id': $row.find('input[name="id"]').val(),
			'goodsNo': $row.find('input[name="goodsNo"]').val(),
			'goodsName': $row.find('input[name="goodsName"]').val(),
			'price': $row.find('input[name="price"]').val(),
			'createTime': $row.find('input[name="createTime"]').val()
		},
		success: function(data, status, xhr){
			$.ajax({
				url : "/goods/selectOneRow",
				type : "post",
				dataType : "json",
				data : {
					'id' : $row.find('input[name="id"]').val(),
					'goodsNo': $row.find('input[name="goodsNo"]').val(),
					'goodsName': $row.find('input[name="goodsName"]').val(),
					'price': $row.find('input[name="price"]').val(),
					'createTime': $row.find('input[name="createTime"]').val()
				},
				success : function(data, status, xhr){
					var goods = data['data'];
					var id = goods['id'];
					var goodsNo = goods['goodsNo'];
					var goodsName = goods['goodsName'];
					var price = goods['price'];
					var createTime = goods['createTime'];
					var dateTime = new Date(createTime).Format("yyyy-MM-dd hh:mm:ss");

					$row.find('span[name="id"]').text(id);
					$row.find('span[name="goodsNo"]').text(goodsNo);
					$row.find('span[name="goodsName"]').text(goodsName);
					$row.find('span[name="price"]').text(price);
					$row.find('span[name="createTime"]').text(dateTime);
					$row.find('.saveFlag').addClass('hidden');
					$row.find(".editFlag").removeClass('hidden');
				}
			});
		}
	});
}

function edit(){
	var $row = $(event.target).parents('tr');
	$row.find('.editFlag').addClass('hidden');
	$row.find('.saveFlag').removeClass('hidden');
	
	var $id = $row.find('input[name="id"]');
	$id.val($id.siblings('span').text());
	var $goodsNo = $row.find('input[name="goodsNo"]');
	$goodsNo.val($goodsNo.siblings('span').text());
	var $goodsName = $row.find('input[name="goodsName"]');
	$goodsName.val($goodsName.siblings('span').text());
	var $price = $row.find('input[name="price"]');
	$price.val($price.siblings('span').text());
	var $createTime = $row.find('input[name="createTime"]');
	$createTime.val($createTime.siblings('span').text());
}

function remove(){
	if(confirm('确认要删除吗？')){
		
		var $row = $(event.target).parents('tr');
		var goodsNo = $row.find('span[name="goodsNo"]').text();
		$.ajax({
			url : "goods/delete",
			type : "post",
			dataType : "json",
			data : {
				"goodsNo" : goodsNo
			},
			success : function(){
				$row.addClass('hidden');
			}
		});
	}
	else{
		return false;
	}

}
function add(){
	
	var $tr = $(event.target).parents('tr').prev();
	var txt = "<tr> " + 
			"<td>" + 
			" <span class=' ' name='id'>" +
			"</span>" +
			"<input type='text' class='saveFlag ' name='id' hidden/>" +
			"</td>" +
			"<td>" +
			"<span class='editFlag hidden' name='goodsNo'>" +
			"</span>" +
			"<input type='text' class='saveFlag ' name='goodsNo'/>" +
			"</td>" +
			"<td>" +
			"<span class='editFlag hidden' name='goodsName'>" +
			"</span>" +
			"<input type='text' class='saveFlag ' name='goodsName'/>" +
			"</td>" +
			"<td>" +
			"<span class='editFlag hidden' name='price'>" +
			"</span>" +
			"<input type='text' class='saveFlag ' name='price'/>	" +
			"</td>" +
			"<td>" +
			"<span class='' name='createTime'>" +
			"</span>" +
			"<input type='text' class='saveFlag ' name='createTime' hidden/>" +
			"</td>" +
			"<td>" +
			"<a class='btn btn-info editFlag hidden' href='javascript:;' onclick='edit()'>编辑</a>" +
			"<a class='btn btn-info saveFlag ' href='javascript:;' onclick='insert()'>保存</a>" +
			"</td>" +
			"<td>" +
			"<a class='btn btn-info' href='javascript:;' onclick='remove()' >删除</a>" +
			"</td>" +
			"<td hidden='hidden'>${status.index+1}</td>" +
			"</tr>";
	
	$tr.after(txt);

}

function formatDate(now) {
	var year = now.getFullYear(),
	month = now.getMonth() + 1,
	date = now.getDate(),
	hour = now.getHours(),
	minute = now.getMinutes(),
	second = now.getSeconds();
	 
	return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}
function insert(){
	var $tr = $(event.target).parents('tr');
	$.ajax({
		url : "/goods/insert",
		type : "post",
		dataType : 'json',
		//加上contentType后台json数据转换成java对象失败
//		contentType : 'application/json;charset=utf-8',
		data : {
			'id': $tr.find('input[name="id"]').val(),
			'goodsNo' : $tr.find('input[name="goodsNo"]').val(),
			'goodsName' : $tr.find('input[name="goodsName"]').val(),
			'price' : $tr.find('input[name="price"]').val(),
			'createTime' : $tr.find('input[name="createTime"]').val()
		},
		success : function(data, status, xhr){
			
			$.ajax({
				url : "/goods/selectOneRow",
				type : "post",
				dataType : "json",
				data : {
					'id' : $tr.find('input[name="id"]').val(),
					'goodsNo': $tr.find('input[name="goodsNo"]').val(),
					'goodsName': $tr.find('input[name="goodsName"]').val(),
					'price': $tr.find('input[name="price"]').val(),
					'createTime': $tr.find('input[name="createTime"]').val()
				},
				success : function(data, status, xhr){
					var goods = data['data'];
					var id = goods['id'];
					var goodsNo = goods['goodsNo'];
					var goodsName = goods['goodsName'];
					var price = goods['price'];
					var createTime = goods['createTime'];
					var dateTime = new Date(createTime).Format("yyyy-MM-dd hh:mm:ss")
					$tr.find('span[name="id"]').text(id);
					$tr.find('span[name="goodsNo"]').text(goodsNo);
					$tr.find('span[name="goodsName"]').text(goodsName);
					$tr.find('span[name="price"]').text(price);
					$tr.find('span[name="createTime"]').text(dateTime);
					$tr.find('.saveFlag').addClass('hidden');
					$tr.find(".editFlag").removeClass('hidden');
					$tr.find('a.saveFlag').attr("onclick","save()");
				}
			})

		}
	});
}