package com.codecrane.server.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
	
	@Transient
	public static final String SEQUENCE_NAME="user_sequence";
	
	@Id
	private int id;
	
	@NotEmpty(message="Username is required!")
	private String userName;
	
	@Email(message="Enter a valid email format")
	@NotEmpty(message="Email is required!")
	private String email;
	
	@NotEmpty(message="Password is required!")
	private String password;
	
	@Transient
	@NotEmpty(message="Confirm password is required!")
	private String confirmPassword;
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

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

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

}
