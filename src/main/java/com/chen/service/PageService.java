package com.chen.service;

import com.chen.dto.Page;

public interface PageService {

	/**
	 * 设置分页信息
	 * @param pageNo
	 * @param rowCount
	 * @return
	 */
	Page setPageBar(int pageNo, int rowCount);
}
