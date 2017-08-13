package com.chen.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chen.dto.Result;
import com.chen.entity.Goods;
import com.chen.mapper.GoodsMapper;
import com.chen.service.GoodsService;

@Service
public class GoodsServiceImpl implements GoodsService{

	@Autowired
	private GoodsMapper goodsMapper;
	
	public Result<List<Goods>> selectGoodsList(int pageNo, int rowCount) {
		Result<List<Goods>> result = new Result<>();
		//偏移量
		int offset = (pageNo-1) * rowCount;
		List<Goods> data = goodsMapper.selectGoodsByLimit(offset, rowCount);
		result.setData(data);
		return result;
	}

	
	public int selectRowSum() {
		int result = goodsMapper.selectRowNum();
		return result;
	}


	public Goods selectOneRow(String goodsNo) {
		Goods goods = goodsMapper.selectOneRow(goodsNo);
		return goods;
	}
	
	public boolean updateGoods(Goods goods) {
		int rowAffect = goodsMapper.updateGoodsOne(goods);
		if(rowAffect > 0){
			return true;
		}
		return false;
	}

	
	public boolean insertGoods(Goods goods) {
		int rowAffect = goodsMapper.insertGoods(goods);
		if(rowAffect > 0){
			return true;
		}
		return false;
	}


	
	public boolean deleteGoods(String goodsNo) {
		int rowAffect = goodsMapper.deleteGoodsByNo(goodsNo);
		if(rowAffect > 0){
			return true;
		}
		return false;
	}

}
