package com.chen.dto;


public class Page {
	//页序号
	private String pageNo;
	//每页记录数
	private String rowCount;
	//是否是首页
	private boolean firstPage;
	//是否是尾页
	private boolean lastPage;
	//总记录数
	private String rowSum;
	
	
	
	public Page() {
		super();
	}
	
	
	
	public Page(String pageNo, String rowCount) {
		super();
		this.pageNo = pageNo;
		this.rowCount = rowCount;
	}



	public Page(String pageNo, String rowCount, boolean firstPage, boolean lastPage, String rowSum) {
		super();
		this.pageNo = pageNo;
		this.rowCount = rowCount;
		this.firstPage = firstPage;
		this.lastPage = lastPage;
		this.rowSum = rowSum;
	}



	public String getPageNo() {
		return pageNo;
	}
	public void setPageNo(String pageNo) {
		this.pageNo = pageNo;
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
	public String getRowSum() {
		return rowSum;
	}
	public void setRowSum(String rowSum) {
		this.rowSum = rowSum;
	}



	@Override
	public String toString() {
		return "Page [PageNo=" + pageNo + ", rowCount=" + rowCount + ", firstPage=" + firstPage + ", lastPage="
				+ lastPage + ", rowSum=" + rowSum + "]";
	}
	
	
}
