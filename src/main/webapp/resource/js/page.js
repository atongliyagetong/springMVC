$(function(){
	$.ajax({
		url : "/page",
		type : "post",
		dataType : "json",
		data : {
			pageNo : 1,
			rowCount : 5
		},
		success : function(data, status, xhr){
			var list = data['data'];
			$('tbody').empty();
			//遍历商品列表将商品信息放入tr
			list.forEach(function(e){
				var id = e['id'];
				var goodsNo= e['goodsNo'];
				var goodsName = e['goodsName'];
				var price = e['price'];
				var createTime = new Date(e['createTime']).Format("yyyy-MM-dd hh:mm:ss");
				$('tbody').append("<tr></tr>");
				var tr = $('tbody tr:last');
				
				var idTD = "<td>" + "<span class='' name='id'>" + id + "</span>"	+ 
				"<input type='text' class='saveFlag ' name='id' hidden/>" +
				"</td>";
				
				var goodsNoTD = "<td>" + "<span class='editFlag' name='goodsNo'>" + goodsNo + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsNo' />" + 
				"</td>";
				
				var goodsNameTD = "<td>" + "<span class='editFlag' name='goodsName'>" + goodsName + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsName' />" +
				"</td>";
				
				var priceTD = "<td>" + "<span class='editFlag' name='price'>" + price + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='price' />" +
				"</td>";
				
				var createTimeTD = "<td>" + "<span class='' name='createTime'>" + createTime + "</span>"	+ 
				"<input type='text' class='saveFlag' name='createTime' hidden/> " +
				"</td>";
				
				var editTD = "<td>" + "<a class='btn btn-info editFlag' href='javascript:;' onclick='edit()'>编辑</a>" + 
				"<a class='btn btn-info saveFlag hidden' href='javascript:;' onclick='save()'>保存</a>" +
				"</td>";
				
				var removeTD = "<td>" + "<a class='btn btn-info' href='javascript:;' onclick='remove()' >删除</a>" +
				"</td>";
				
				tr.append(idTD, goodsNoTD ,goodsNameTD ,priceTD ,createTimeTD ,editTD ,removeTD);
			});
			
			//增加新增按钮放入tr
			$('tbody').append('<tr></tr>');
			var nullTD = "<td></td>";
			var addTD = "<td><a class='btn btn-info'  href='javascript:;' onclick='add()' >新增</a></td>";
			$('tbody tr:last').append(nullTD, nullTD, nullTD, nullTD, nullTD, addTD);
			
			//记录总数，当前页，总页数
			var pageInfo = data['page'];
			var pageNo = pageInfo['pageNo'];
			var rowSum = pageInfo['rowSum'];
			//设置当前页
			$('li[name="pageNo"]').text(pageNo);
			//设置记录总数
			$('span[name="rowSum"]').text(rowSum);
			
			var option = $('#rowCount option:selected');
			var rowCount = option.val();
			var pageNum = Math.ceil(rowSum/rowCount);
			//设置总页数
			$('li[name="pageNum"]').text(pageNum);
			//设置首页尾页flag
			var firstPage = pageInfo['firstPage'];
			var lastPage = pageInfo['lastPage'];
			$('span[name="firstPage"]').text(firstPage);
			$('span[name="lastPage"]').text(lastPage);
		}
	});
	
	$('select#rowCount').change(function(){
		var option = $('#rowCount option:selected');
		var rowCount = option.val();
		var pageNo = $('li[name="pageNo"]').text();

		$.ajax({
			url : '/page',
			dataType : 'json',
			type : 'post',
			data : {
				pageNo : pageNo,
				rowCount : rowCount
			},
			success : function(data, status, xhr){
				var list = data['data'];
				if(list.length==0){
					alert("请在下拉框选择其他rowCount选项");
					return false;
				}
				$('tbody').empty();
				
				//遍历商品列表将商品信息放入tr
				list.forEach(function(e){
					var id = e['id'];
					var goodsNo= e['goodsNo'];
					var goodsName = e['goodsName'];
					var price = e['price'];
					var createTime = new Date(e['createTime']).Format("yyyy-MM-dd hh:mm:ss");
					$('tbody').append("<tr></tr>");
					var tr = $('tbody tr:last');
					
					var idTD = "<td>" + "<span class='' name='id'>" + id + "</span>"	+ 
					"<input type='text' class='saveFlag ' name='id' hidden/>" +
					"</td>";
					
					var goodsNoTD = "<td>" + "<span class='editFlag' name='goodsNo'>" + goodsNo + "</span>"	+ 
					"<input type='text' class='saveFlag hidden' name='goodsNo' />" + 
					"</td>";
					
					var goodsNameTD = "<td>" + "<span class='editFlag' name='goodsName'>" + goodsName + "</span>"	+ 
					"<input type='text' class='saveFlag hidden' name='goodsName' />" +
					"</td>";
					
					var priceTD = "<td>" + "<span class='editFlag' name='price'>" + price + "</span>"	+ 
					"<input type='text' class='saveFlag hidden' name='price' />" +
					"</td>";
					
					var createTimeTD = "<td>" + "<span class='' name='createTime'>" + createTime + "</span>"	+ 
					"<input type='text' class='saveFlag' name='createTime' hidden/> " +
					"</td>";
					
					var editTD = "<td>" + "<a class='btn btn-info editFlag' href='javascript:;' onclick='edit()'>编辑</a>" + 
					"<a class='btn btn-info saveFlag hidden' href='javascript:;' onclick='save()'>保存</a>" +
					"</td>";
					
					var removeTD = "<td>" + "<a class='btn btn-info' href='javascript:;' onclick='remove()' >删除</a>" +
					"</td>";
					
					tr.append(idTD, goodsNoTD ,goodsNameTD ,priceTD ,createTimeTD ,editTD ,removeTD);
				});
				
				//增加新增按钮放入tr
				$('tbody').append('<tr></tr>');
				var nullTD = "<td></td>";
				var addTD = "<td><a class='btn btn-info'  href='javascript:;' onclick='add()' >新增</a></td>";
				$('tbody tr:last').append(nullTD, nullTD, nullTD, nullTD, nullTD, addTD);
				
				//设置记录总数，当前页，总页数
				var pageInfo = data['page'];
				var pageNo = pageInfo['pageNo'];
				var rowSum = pageInfo['rowSum'];
				//当前页
				$('li[name="pageNo"]').text(pageNo);
				//记录总数
				$('span[name="rowSum"]').text(rowSum);
				
				var option = $('#rowCount option:selected');
				var rowCount = option.val();
				var pageNum = Math.ceil(rowSum/rowCount);
				//总页数
				$('li[name="pageNum"]').text(pageNum);
				//设置首页尾页flag
				var firstPage = pageInfo['firstPage'];
				var lastPage = pageInfo['lastPage'];
				$('span[name="firstPage"]').text(firstPage);
				$('span[name="lastPage"]').text(lastPage);
			}
		});
	});
});

var option = $('#rowCount option:selected');
var val = option.val();

function firstPage(){
	var pageNo = 1;
	var firstPageFlag = $('span[name="firstPage"]').text();
	var rowCount = $('#rowCount option:selected').val();
	if(firstPageFlag!="true"){
		$.ajax({
			url : '/page',
			dataType : 'json',
			type : 'post',
			data : {
				pageNo : pageNo,
				rowCount : rowCount
			},
		success : function(data, status, xhr){
			var list = data['data'];
			$('tbody').empty();
			
			//遍历商品列表将商品信息放入tr
			list.forEach(function(e){
				var id = e['id'];
				var goodsNo= e['goodsNo'];
				var goodsName = e['goodsName'];
				var price = e['price'];
				var createTime = new Date(e['createTime']).Format("yyyy-MM-dd hh:mm:ss");
				$('tbody').append("<tr></tr>");
				var tr = $('tbody tr:last');
				
				var idTD = "<td>" + "<span class='' name='id'>" + id + "</span>"	+ 
				"<input type='text' class='saveFlag ' name='id' hidden/>" +
				"</td>";
				
				var goodsNoTD = "<td>" + "<span class='editFlag' name='goodsNo'>" + goodsNo + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsNo' />" + 
				"</td>";
				
				var goodsNameTD = "<td>" + "<span class='editFlag' name='goodsName'>" + goodsName + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsName' />" +
				"</td>";
				
				var priceTD = "<td>" + "<span class='editFlag' name='price'>" + price + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='price' />" +
				"</td>";
				
				var createTimeTD = "<td>" + "<span class='' name='createTime'>" + createTime + "</span>"	+ 
				"<input type='text' class='saveFlag' name='createTime' hidden/> " +
				"</td>";
				
				var editTD = "<td>" + "<a class='btn btn-info editFlag' href='javascript:;' onclick='edit()'>编辑</a>" + 
				"<a class='btn btn-info saveFlag hidden' href='javascript:;' onclick='save()'>保存</a>" +
				"</td>";
				
				var removeTD = "<td>" + "<a class='btn btn-info' href='javascript:;' onclick='remove()' >删除</a>" +
				"</td>";
				
				tr.append(idTD, goodsNoTD ,goodsNameTD ,priceTD ,createTimeTD ,editTD ,removeTD);
			});
			
			//增加新增按钮放入tr
			$('tbody').append('<tr></tr>');
			var nullTD = "<td></td>";
			var addTD = "<td><a class='btn btn-info'  href='javascript:;' onclick='add()' >新增</a></td>";
			$('tbody tr:last').append(nullTD, nullTD, nullTD, nullTD, nullTD, addTD);
			
			//设置记录总数，当前页，总页数
			var pageInfo = data['page'];
			var pageNo = pageInfo['pageNo'];
			var rowSum = pageInfo['rowSum'];
			//当前页
			$('li[name="pageNo"]').text(pageNo);
			//记录总数
			$('span[name="rowSum"]').text(rowSum);
			
			var option = $('#rowCount option:selected');
			var rowCount = option.val();
			var pageNum = Math.ceil(rowSum/rowCount);
			//总页数
			$('li[name="pageNum"]').text(pageNum);
			//设置首页尾页flag
			var firstPage = pageInfo['firstPage'];
			var lastPage = pageInfo['lastPage'];
			$('span[name="firstPage"]').text(firstPage);
			$('span[name="lastPage"]').text(lastPage);
		}
				
		});
	}
	else{
		return false;
	}
	
}

function prevPage(){
	var pageNo = $('li[name="pageNo"]').text()-1; 
	var firstPageFlag = $('span[name="firstPage"]').text();
	if(firstPageFlag!="true"){
		var rowCount = $('select option:selected').val();
		$.ajax({
			url : '/page',
			dataType : 'json',
			type : 'post',
			data : {
				pageNo : pageNo,
				rowCount : rowCount
			},
		success : function(data, status, xhr){
			var list = data['data'];
			$('tbody').empty();
			
			//遍历商品列表将商品信息放入tr
			list.forEach(function(e){
				var id = e['id'];
				var goodsNo= e['goodsNo'];
				var goodsName = e['goodsName'];
				var price = e['price'];
				var createTime = new Date(e['createTime']).Format("yyyy-MM-dd hh:mm:ss");
				$('tbody').append("<tr></tr>");
				var tr = $('tbody tr:last');
				
				var idTD = "<td>" + "<span class='' name='id'>" + id + "</span>"	+ 
				"<input type='text' class='saveFlag ' name='id' hidden/>" +
				"</td>";
				
				var goodsNoTD = "<td>" + "<span class='editFlag' name='goodsNo'>" + goodsNo + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsNo' />" + 
				"</td>";
				
				var goodsNameTD = "<td>" + "<span class='editFlag' name='goodsName'>" + goodsName + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsName' />" +
				"</td>";
				
				var priceTD = "<td>" + "<span class='editFlag' name='price'>" + price + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='price' />" +
				"</td>";
				
				var createTimeTD = "<td>" + "<span class='' name='createTime'>" + createTime + "</span>"	+ 
				"<input type='text' class='saveFlag' name='createTime' hidden/> " +
				"</td>";
				
				var editTD = "<td>" + "<a class='btn btn-info editFlag' href='javascript:;' onclick='edit()'>编辑</a>" + 
				"<a class='btn btn-info saveFlag hidden' href='javascript:;' onclick='save()'>保存</a>" +
				"</td>";
				
				var removeTD = "<td>" + "<a class='btn btn-info' href='javascript:;' onclick='remove()' >删除</a>" +
				"</td>";
				
				tr.append(idTD, goodsNoTD ,goodsNameTD ,priceTD ,createTimeTD ,editTD ,removeTD);
			});
			
			//增加新增按钮放入tr
			$('tbody').append('<tr></tr>');
			var nullTD = "<td></td>";
			var addTD = "<td><a class='btn btn-info'  href='javascript:;' onclick='add()' >新增</a></td>";
			$('tbody tr:last').append(nullTD, nullTD, nullTD, nullTD, nullTD, addTD);
			
			//设置记录总数，当前页，总页数
			var pageInfo = data['page'];
			var pageNo = pageInfo['pageNo'];
			var rowSum = pageInfo['rowSum'];
			//当前页
			$('li[name="pageNo"]').text(pageNo);
			//记录总数
			$('span[name="rowSum"]').text(rowSum);
			
			var option = $('#rowCount option:selected');
			var rowCount = option.val();
			var pageNum = Math.ceil(rowSum/rowCount);
			//总页数
			$('li[name="pageNum"]').text(pageNum);
			//设置首页尾页flag
			var firstPage = pageInfo['firstPage'];
			var lastPage = pageInfo['lastPage'];
			$('span[name="firstPage"]').text(firstPage);
			$('span[name="lastPage"]').text(lastPage);
		}
	});
	}else{
		return false;
	}
}

function nextPage(){
	var pageNo = parseInt($('li[name="pageNo"]').text()) + 1;
	var rowCount = $('select option:selected').val();
	var lastPageFlag = $('span[name="lastPage"]').text();
	if(lastPageFlag!="true"){
		
		$.ajax({
			url : '/page',
			dataType : 'json',
			type : 'post',
			data : {
				pageNo : pageNo,
				rowCount : rowCount
			},
		success : function(data, status, xhr){
			var list = data['data'];
			$('tbody').empty();
			
			//遍历商品列表将商品信息放入tr
			list.forEach(function(e){
				var id = e['id'];
				var goodsNo= e['goodsNo'];
				var goodsName = e['goodsName'];
				var price = e['price'];
				var createTime = new Date(e['createTime']).Format("yyyy-MM-dd hh:mm:ss");
				$('tbody').append("<tr></tr>");
				var tr = $('tbody tr:last');
				
				var idTD = "<td>" + "<span class='' name='id'>" + id + "</span>"	+ 
				"<input type='text' class='saveFlag ' name='id' hidden/>" +
				"</td>";
				
				var goodsNoTD = "<td>" + "<span class='editFlag' name='goodsNo'>" + goodsNo + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsNo' />" + 
				"</td>";
				
				var goodsNameTD = "<td>" + "<span class='editFlag' name='goodsName'>" + goodsName + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsName' />" +
				"</td>";
				
				var priceTD = "<td>" + "<span class='editFlag' name='price'>" + price + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='price' />" +
				"</td>";
				
				var createTimeTD = "<td>" + "<span class='' name='createTime'>" + createTime + "</span>"	+ 
				"<input type='text' class='saveFlag' name='createTime' hidden/> " +
				"</td>";
				
				var editTD = "<td>" + "<a class='btn btn-info editFlag' href='javascript:;' onclick='edit()'>编辑</a>" + 
				"<a class='btn btn-info saveFlag hidden' href='javascript:;' onclick='save()'>保存</a>" +
				"</td>";
				
				var removeTD = "<td>" + "<a class='btn btn-info' href='javascript:;' onclick='remove()' >删除</a>" +
				"</td>";
				
				tr.append(idTD, goodsNoTD ,goodsNameTD ,priceTD ,createTimeTD ,editTD ,removeTD);
			});
			
			//增加新增按钮放入tr
			$('tbody').append('<tr></tr>');
			var nullTD = "<td></td>";
			var addTD = "<td><a class='btn btn-info'  href='javascript:;' onclick='add()' >新增</a></td>";
			$('tbody tr:last').append(nullTD, nullTD, nullTD, nullTD, nullTD, addTD);
			
			
			var pageInfo = data['page'];
			//设置记录总数，当前页，总页数
			var rowSum = pageInfo['rowSum'];
			var pageNo = pageInfo['pageNo'];
			var pageNum = pageInfo['lastPageNum'];
			//当前页
			$('li[name="pageNo"]').text(pageNo);
			//记录总数
			$('span[name="rowSum"]').text(rowSum);
			
			var option = $('#rowCount option:selected');
			var rowCount = option.val();

			//总页数
			$('li[name="pageNum"]').text(pageNum);
			//设置首页尾页flag
			var firstPage = pageInfo['firstPage'];
			var lastPage = pageInfo['lastPage'];
			$('span[name="firstPage"]').text(firstPage);
			$('span[name="lastPage"]').text(lastPage);
		}
	});
		
	}else{
		return false;
	}
	
}

function lastPage(){
	var pageNo = $('li[name="pageNum"]').text();
	var rowCount = $('select option:selected').val();
	var lastPageFlag = $('span[name="lastPage"]').text();
	if(lastPageFlag!="true"){
		
		$.ajax({
			url : '/page',
			dataType : 'json',
			type : 'post',
			data : {
				pageNo : pageNo,
				rowCount : rowCount
			},
		success : function(data, status, xhr){
			var list = data['data'];
			$('tbody').empty();
			
			//遍历商品列表将商品信息放入tr
			list.forEach(function(e){
				var id = e['id'];
				var goodsNo= e['goodsNo'];
				var goodsName = e['goodsName'];
				var price = e['price'];
				var createTime = new Date(e['createTime']).Format("yyyy-MM-dd hh:mm:ss");
				$('tbody').append("<tr></tr>");
				var tr = $('tbody tr:last');
				
				var idTD = "<td>" + "<span class='' name='id'>" + id + "</span>"	+ 
				"<input type='text' class='saveFlag ' name='id' hidden/>" +
				"</td>";
				
				var goodsNoTD = "<td>" + "<span class='editFlag' name='goodsNo'>" + goodsNo + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsNo' />" + 
				"</td>";
				
				var goodsNameTD = "<td>" + "<span class='editFlag' name='goodsName'>" + goodsName + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsName' />" +
				"</td>";
				
				var priceTD = "<td>" + "<span class='editFlag' name='price'>" + price + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='price' />" +
				"</td>";
				
				var createTimeTD = "<td>" + "<span class='' name='createTime'>" + createTime + "</span>"	+ 
				"<input type='text' class='saveFlag' name='createTime' hidden/> " +
				"</td>";
				
				var editTD = "<td>" + "<a class='btn btn-info editFlag' href='javascript:;' onclick='edit()'>编辑</a>" + 
				"<a class='btn btn-info saveFlag hidden' href='javascript:;' onclick='save()'>保存</a>" +
				"</td>";
				
				var removeTD = "<td>" + "<a class='btn btn-info' href='javascript:;' onclick='remove()' >删除</a>" +
				"</td>";
				
				tr.append(idTD, goodsNoTD ,goodsNameTD ,priceTD ,createTimeTD ,editTD ,removeTD);
			});
			
			//增加新增按钮放入tr
			$('tbody').append('<tr></tr>');
			var nullTD = "<td></td>";
			var addTD = "<td><a class='btn btn-info'  href='javascript:;' onclick='add()' >新增</a></td>";
			$('tbody tr:last').append(nullTD, nullTD, nullTD, nullTD, nullTD, addTD);
			
			
			var pageInfo = data['page'];
			//设置记录总数，当前页，总页数
			var rowSum = pageInfo['rowSum'];
			var pageNo = pageInfo['pageNo'];
			var pageNum = pageInfo['lastPageNum'];
			//当前页
			$('li[name="pageNo"]').text(pageNo);
			//记录总数
			$('span[name="rowSum"]').text(rowSum);
			
			var option = $('#rowCount option:selected');
			var rowCount = option.val();

			//总页数
			$('li[name="pageNum"]').text(pageNum);
			//设置首页尾页flag
			var firstPage = pageInfo['firstPage'];
			var lastPage = pageInfo['lastPage'];
			$('span[name="firstPage"]').text(firstPage);
			$('span[name="lastPage"]').text(lastPage);
		}
	});
		
	}else{
		return false;
	}
}

function specificPage(){
	var pageNo = $('li input[name="pageNo"]').val();
	var lastPageNo = $('li[name="pageNum"]').text();
	var rowCount = $('select option:selected').val();
	if(pageNo>lastPageNo){
		alert("超出最大页数");
		return false;
	}else{
		
		$.ajax({
			url : '/page',
			dataType : 'json',
			type : 'post',
			data : {
				pageNo : pageNo,
				rowCount : rowCount
			},
		success : function(data, status, xhr){
			var list = data['data'];
			if(list.length==0){
				alert("请在下拉框选择其他rowCount选项");
				return false;
				
			}
			$('tbody').empty();
			
			//遍历商品列表将商品信息放入tr
			list.forEach(function(e){
				var id = e['id'];
				var goodsNo= e['goodsNo'];
				var goodsName = e['goodsName'];
				var price = e['price'];
				var createTime = new Date(e['createTime']).Format("yyyy-MM-dd hh:mm:ss");
				$('tbody').append("<tr></tr>");
				var tr = $('tbody tr:last');
				
				var idTD = "<td>" + "<span class='' name='id'>" + id + "</span>"	+ 
				"<input type='text' class='saveFlag ' name='id' hidden/>" +
				"</td>";
				
				var goodsNoTD = "<td>" + "<span class='editFlag' name='goodsNo'>" + goodsNo + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsNo' />" + 
				"</td>";
				
				var goodsNameTD = "<td>" + "<span class='editFlag' name='goodsName'>" + goodsName + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='goodsName' />" +
				"</td>";
				
				var priceTD = "<td>" + "<span class='editFlag' name='price'>" + price + "</span>"	+ 
				"<input type='text' class='saveFlag hidden' name='price' />" +
				"</td>";
				
				var createTimeTD = "<td>" + "<span class='' name='createTime'>" + createTime + "</span>"	+ 
				"<input type='text' class='saveFlag' name='createTime' hidden/> " +
				"</td>";
				
				var editTD = "<td>" + "<a class='btn btn-info editFlag' href='javascript:;' onclick='edit()'>编辑</a>" + 
				"<a class='btn btn-info saveFlag hidden' href='javascript:;' onclick='save()'>保存</a>" +
				"</td>";
				
				var removeTD = "<td>" + "<a class='btn btn-info' href='javascript:;' onclick='remove()' >删除</a>" +
				"</td>";
				
				tr.append(idTD, goodsNoTD ,goodsNameTD ,priceTD ,createTimeTD ,editTD ,removeTD);
			});
			
			//增加新增按钮放入tr
			$('tbody').append('<tr></tr>');
			var nullTD = "<td></td>";
			var addTD = "<td><a class='btn btn-info'  href='javascript:;' onclick='add()' >新增</a></td>";
			$('tbody tr:last').append(nullTD, nullTD, nullTD, nullTD, nullTD, addTD);
			
			
			var pageInfo = data['page'];
			//设置记录总数，当前页，总页数
			var rowSum = pageInfo['rowSum'];
			var pageNo = pageInfo['pageNo'];
			var pageNum = pageInfo['lastPageNum'];
			//当前页
			$('li[name="pageNo"]').text(pageNo);
			//记录总数
			$('span[name="rowSum"]').text(rowSum);
			
			var option = $('#rowCount option:selected');
			var rowCount = option.val();

			//总页数
			$('li[name="pageNum"]').text(pageNum);
			//设置首页尾页flag
			var firstPage = pageInfo['firstPage'];
			var lastPage = pageInfo['lastPage'];
			$('span[name="firstPage"]').text(firstPage);
			$('span[name="lastPage"]').text(lastPage);
		}
	});
		
	}
}