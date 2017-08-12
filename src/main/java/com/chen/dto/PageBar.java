package com.chen.dto;

public class PageBar {
	private String PageNo;
	private String rowCount;
	private boolean firstPage;
	private boolean lastPage;
	private String pageNum;
	
	public String getPageNo() {
		return PageNo;
	}
	public void setPageNo(String pageNo) {
		PageNo = pageNo;
	}
	public String getRowCount() {
		return rowCount;
	}
	public void setRowCount(String rowCount) {
		this.rowCount = rowCount;
	}
	public boolean isFirstPage() {
		return firstPage;
	}
	public void setFirstPage(boolean firstPage) {
		this.firstPage = firstPage;
	}
	public boolean isLastPage() {
		return lastPage;
	}
	public void setLastPage(boolean lastPage) {
		this.lastPage = lastPage;
	}
	public String getPageNum() {
		return pageNum;
	}
	public void setPageNum(String pageNum) {
		this.pageNum = pageNum;
	}
	
	
}
