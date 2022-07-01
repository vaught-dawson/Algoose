package com.codecrane.server.controllers;

import java.util.ArrayList;
import java.util.Optional;

import javax.validation.Valid;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.codecrane.server.models.Error;
import com.codecrane.server.models.LoginUser;
import com.codecrane.server.models.User;
import com.codecrane.server.repos.UserRepo;
import com.codecrane.server.service.SeqGeneratorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
	@Autowired
	private UserRepo repo;
	@Autowired
	private SeqGeneratorService geneServ;

	
	
	@PostMapping("/register/user")
	public Object registerUser(@RequestBody User newUser) {
		System.out.println("we here");
		ArrayList<String> errors = new ArrayList<String>();
		Optional<User> opUser = repo.findByEmail(newUser.getEmail());
		if(opUser.isPresent()) {
			errors.add("Email Already in use!");
		}
		if(newUser.getUserName() == null) {
			errors.add("Username is required!");
		}
		if(newUser.getEmail() == null) {
			errors.add("Email is required!");
			
		}
		if(newUser.getPassword() == null) {
			errors.add("Password is required!");
		}
		
		if(newUser.getConfirmPassword() == null) {
			errors.add("Confirm Password is required!");
			Error outputError = new Error();
			outputError.setErrors(errors);
			return outputError;
		}
		
		
		if(!newUser.getConfirmPassword().equals(newUser.getPassword())) {
			errors.add("Passwords do not match!");
		}
		if(errors.size() > 0) {
			Error outputError = new Error();
			outputError.setErrors(errors);
			return outputError;
		} else{
			String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
			newUser.setId(geneServ.getSeqNum(User.SEQUENCE_NAME));
			newUser.setPassword(hashed);
			return repo.save(newUser);
		}
		
		
		
	}
	
	@PostMapping("/login/user")
	public Object loginUser(@RequestBody LoginUser logginUser) {
		ArrayList<String> errors = new ArrayList<String>();
		Optional<User> opUser = repo.findByEmail(logginUser.getEmail());
		if(logginUser.getEmail() == null) {
			errors.add("Email is required!");
			Error outputError = new Error();
			outputError.setErrors(errors);
			return outputError;
		}
		if(logginUser.getPassword() == null) {
			errors.add("Password is required!");
			Error outputError = new Error();
			outputError.setErrors(errors);
			return outputError;
		}
		if(!opUser.isPresent()) {
			errors.add("Invalid Credentials!");
			Error outputError = new Error();
			outputError.setErrors(errors);
			return outputError;
		}
		if(!BCrypt.checkpw(logginUser.getPassword(), opUser.get().getPassword())) {
			errors.add("Invalid Credentials!");
			Error outputError = new Error();
			outputError.setErrors(errors);
			return outputError;
		}

			User user = opUser.get();
			return user;
		
		
		
	}

}
