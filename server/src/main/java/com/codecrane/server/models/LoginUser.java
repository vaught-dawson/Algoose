package com.codecrane.server.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "loginusers")
public class LoginUser {
	
	@NotNull(message="Email is required!")
	@Email(message="Please enter a valid email!")
	private String email;
	
	@NotNull(message="Password is Required!")
	@Size(min=8, max=128, message="Password must be at least 8 characters!")
	private String password;
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	
}
