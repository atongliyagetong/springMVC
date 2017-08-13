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
@RequestMapping("/goods")
public class GoodsController {
	
	@Autowired
	private GoodsService goodsService;
	
	
	/**
	 * 查询一行商品记录
	 * @param goodsNo
	 * @return
	 */
	@RequestMapping("/selectOneRow/{goodsNo}")
	@ResponseBody
	public Result<Goods> selectOneRow(@PathVariable("goodsNo")String goodsNo){
		
		Result<Goods> result;
		Goods goods = null;
		try{
			goods = goodsService.selectOneRow(goodsNo);
		}catch(Exception e){
			result = new Result(false);	
		}
		result = new Result<Goods>(goods, true);
		return result; 
		
	}
	/**
	 * 插入一行商品数据
	 * @param goodsNo
	 * @param goodsName
	 * @param price
	 * @return
	 */
	@RequestMapping("/insert")
	@ResponseBody
	public Result<Boolean> insertGoods(String goodsNo, String goodsName, String price){
		Goods goods = new Goods(goodsNo, goodsName, price);
		boolean data = false;
		Result<Boolean> result;
		try {
			data = goodsService.insertGoods(goods);
		} catch (Exception e) {
			//插入失败，返回数据false
			result = new Result<>(false);
		}
		//插入成功返回true
		result = new Result<>(data, true);
		return result;
	}
	
	/**
	 * 删除一行商品数据
	 * @param goodsNo
	 * @return
	 */
	@RequestMapping("/delete")
	@ResponseBody
	public Result<Boolean> deleteGoods(String goodsNo){
		boolean data = false;
		Result<Boolean> result;
		try {
			data = goodsService.deleteGoods(goodsNo);
		} catch (Exception e) {
			result = new Result<>(false);
		}
		result = new Result<Boolean>(data, true);
		return result;
	}
	
	/**
	 * 更新一行记录
	 * @param goodsNo
	 * @param goodsName
	 * @param price
	 * @return
	 */
	@RequestMapping("/update")
	@ResponseBody
	public Result<Boolean> updateGoods(String goodsNo, String goodsName, String price){
		
		boolean data = false;
		Goods goods = new Goods(goodsNo, goodsName, price);
		Result<Boolean> result;
		try {
			data = goodsService.updateGoods(goods);
		} catch (Exception e) {
			result = new Result<>(false);
		}
		result = new Result<Boolean>(data, true);
		return result;
		
	}
	
	
}
