package com.chen.service;

import java.util.List;

import com.chen.dto.Result;
import com.chen.entity.Goods;

public interface GoodsService {
	
	/**
	 * 查询商品列表信息
	 * @param pageNo
	 * @param rowCount
	 * @return 商品列表
	 */
	Result<List<Goods>> selectGoodsList(int pageNo, int rowCount);
	
	/**
	 * 查询记录条数
	 * @return
	 */
	int selectRowSum();
	
	/**
	 * 查询一条商品记录
	 * @param goodsNo
	 * @return
	 */
	Goods selectOneRow(String goodsNo);
	
	/**
	 * 更新商品记录
	 * @param goods
	 * @return
	 */
	boolean updateGoods(Goods goods);
	
	/**
	 * 插入商品记录
	 * @param goods
	 * @return
	 */
	boolean insertGoods(Goods goods);
	
	/**
	 * 删除商品记录
	 * @param goodsNo
	 * @return
	 */
	boolean deleteGoods(String goodsNo);
}
