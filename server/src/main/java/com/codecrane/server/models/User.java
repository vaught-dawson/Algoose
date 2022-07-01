package com.codecrane.server.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
	
	@Transient
	public static final String SEQUENCE_NAME="user_sequence";
	
	@Id
	private int id;
	
	@NotNull(message="Username is required!")
	@Size(min = 2, max=128, message = "Username must be at least two characters!")
	private String userName;
	
	@Email(message="Enter a valid email format")
	@NotNull(message="Email is required!")
	private String email;
	
	@NotNull(message="Password is required!")
	@Size(min = 8, max = 128, message = "Password must be at least 8 characters!")
	private String password;
	
	@Transient
	@NotNull(message="Confirm password is required!")
	@Size(min = 8, max = 128, message = "Password must be at least 8 characters!")
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
