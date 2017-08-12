package com.chen.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chen.entity.User;
import com.chen.mapper.UserMapper;
import com.chen.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	private UserMapper userMapper;
	
	public boolean validateLogin(String username, String password) {
		User user = userMapper.selectByUsername(username);
		if(user!=null && password.equals(user.getPassword())){
			return true;
		}
		return false;
	}




}
