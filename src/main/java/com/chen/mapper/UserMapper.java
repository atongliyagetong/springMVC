package com.chen.mapper;

import java.util.List;

import com.chen.entity.User;

public interface UserMapper {
	
  public List<User> findAll();
  
  /**
   * 登录校验，查询User
   * @param username
   * @return
   */
  User selectByUsername(String username);
}
