package com.chen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chen.dto.Page;
import com.chen.dto.Result;
import com.chen.entity.Goods;
import com.chen.service.GoodsService;
import com.chen.service.PageService;

@Controller
@RequestMapping("/page")
public class PageController {
	
	@Autowired
	private GoodsService goodsService;
	
	@Autowired
	private PageService pageService;
	
	/**
	 * 根据偏移量查询指定数目的记录列表
	 * @param pageNo
	 * @param rowCount
	 * @return
	 */
	@RequestMapping("")
	@ResponseBody
	public Result<List<Goods>> selectGoodsList(int pageNo, int rowCount){
		
		Result<List<Goods>> result = goodsService.selectGoodsList(pageNo, rowCount);
		
		Page page = pageService.setPageBar(pageNo, rowCount);
		
		result.setPage(page);
		
		result.setSuccess(true);
		
		return result;
	}
}
