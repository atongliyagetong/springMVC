package com.chen.service;

public interface LoginService {
	/**
	 * 登录验证
	 * @param username password
	 * @return
	 */
	boolean validateLogin(String username, String password);
}
