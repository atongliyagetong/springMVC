package com.chen.dto;

public class Result<T> {
	
	private PageBar pageBar;
	private T data;
	private boolean success;
	
	public PageBar getPageBar() {
		return pageBar;
	}
	public void setPageBar(PageBar pageBar) {
		this.pageBar = pageBar;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	
}
