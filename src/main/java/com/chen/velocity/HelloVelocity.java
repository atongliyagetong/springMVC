package com.chen.velocity;

import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;

public class HelloVelocity {
	public static void main(String[] args) {

		VelocityEngine velocityEngine = new VelocityEngine();
		velocityEngine.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
		velocityEngine.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());
		
		velocityEngine.init();
		
		Template template = velocityEngine.getTemplate("hellovelocity.vm");
		VelocityContext velocityContext = new VelocityContext();
		
		velocityContext.put("name", "velocity");
		velocityContext.put("data", new Date().toString());
		
		List temp = new ArrayList<>();
		temp.add("1");
		temp.add("2");
		velocityContext.put("list", temp);
		
		StringWriter stringWriter = new StringWriter();
		
		template.merge(velocityContext, stringWriter);
		System.out.println(stringWriter.toString());
	}
}
