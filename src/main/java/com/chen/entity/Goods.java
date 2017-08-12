package com.chen.entity;

public class Goods {
	private String id;
	private String goodsNo;
	private String goodsName;
	private String price;
	private String createTime;
	
	
	public Goods(String goodsNo, String goodsName, String price) {
		super();
		this.goodsNo = goodsNo;
		this.goodsName = goodsName;
		this.price = price;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getGoodsNo() {
		return goodsNo;
	}
	public void setGoodsNo(String goodsNo) {
		this.goodsNo = goodsNo;
	}
	public String getGoodsName() {
		return goodsName;
	}
	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	@Override
	public String toString() {
		return "Goods [id=" + id + ", goodsNo=" + goodsNo + ", goodsName=" + goodsName + ", price=" + price
				+ ", createTime=" + createTime + "]";
	}
	
	
}
