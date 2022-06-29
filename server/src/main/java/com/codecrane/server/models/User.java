package com.codecrane.server.models;

import javax.validation.constraints.Email;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
	@Transient
	public static final String SEQUENCE_NAME="user_sequence";
	
	@Id
	private int id;
	
	private String userName;
	
	@Email(message="Enter a valid email format")
	private String email;
	
	private String password;
	
	@Transient
	private String confirmPassword;
}
