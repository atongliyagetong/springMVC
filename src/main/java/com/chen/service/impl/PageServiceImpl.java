package com.chen.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.StreamingHttpOutputMessage;
import org.springframework.stereotype.Service;

import com.chen.dto.Page;
import com.chen.mapper.GoodsMapper;
import com.chen.service.PageService;

@Service
public class PageServiceImpl implements PageService {

	@Autowired
	private GoodsMapper goodsMapper;
	
	public Page setPageBar(int pageNo, int rowCount) {
		//商品记录总数
		int rowSum = goodsMapper.selectRowNum();
		//商品记录总页数
		Double pageSumDouble = Math.ceil((double)rowSum / (double)rowCount);

		//页数
		
		boolean firstPage = false;
		if(pageNo == 1){
			firstPage = true ;
		}
		
		boolean lastPage = false;
		if(pageNo == pageSumDouble){
			lastPage = true;
		}
		Page page = new Page(String.valueOf(pageNo), String.valueOf(rowCount), firstPage, lastPage, String.valueOf(rowSum));
		
		return page;
	}

}
