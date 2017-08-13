package com.chen.dto;

public class Result<T> {
	
	private Page page;
	private T data;
	private boolean success;
	
	
	
	public Result() {
		super();
	}

	public Result(Page page, T data, boolean success) {
		super();
		this.page = page;
		this.data = data;
		this.success = success;
	}
	
	public Result(T data, boolean success) {
		super();
		this.data = data;
		this.success = success;
	}
	
	
	public Result(boolean success) {
		super();
		this.success = success;
	}

	public Page getPage() {
		return page;
	}
	public void setPage(Page page) {
		this.page = page;
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
