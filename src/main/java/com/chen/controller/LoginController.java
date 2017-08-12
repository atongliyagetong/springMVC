package com.chen.controller;

import javax.jws.WebParam.Mode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.chen.service.LoginService;

@Controller
@RequestMapping("/")
public class LoginController {
	@Autowired
	private LoginService loginService;

	
	@RequestMapping("/")
	public String index(){
		return "index";
	}
	
	@RequestMapping("/login")
	public String login(String username, String password, Model model){
		//登录
		boolean success = loginService.validateLogin(username, password);
		
		return "list";
	}
}
