package com.chen.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chen.dto.Result;
import com.chen.entity.Goods;

public interface GoodsMapper {
	
	/**
	 * 查询页面上显示的商品列表信息
	 * @param offset 偏移量
	 * @param rowCount 每页记录条数
	 * @return
	 */
	List<Goods> selectGoodsByLimit(@Param("offset")int offset, @Param("rowCount")int rowCount);
	
	/**
	 * 查询商品表总记录条数
	 * @return
	 */
	int selectRowNum();
	
	/**
	 * 单行商品信息查询
	 * @param goodsNo 
	 * @return
	 */
	Goods selectOneRow(String goodsNo);
	
	/**
	 * 更新一行商品信息
	 * @param goods
	 * @return
	 */
	int updateGoodsOne(Goods goods);
	
	/**
	 * 插入一行商品信息
	 * @param goods
	 * @return
	 */
	int insertGoods(Goods goods);
	
	/**
	 * 删除一行商品信息
	 * @param goodsNo
	 * @return
	 */
	int deleteGoodsByNo(String goodsNo);
}
