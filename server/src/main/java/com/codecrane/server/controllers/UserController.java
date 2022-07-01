package com.codecrane.server.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.codecrane.server.models.User;
import com.codecrane.server.repos.UserRepo;
import com.codecrane.server.service.SeqGeneratorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	private UserRepo repo;
	@Autowired
	private SeqGeneratorService serv;
	
	
	@GetMapping("/get/user/{id}")
	public User getOne(@PathVariable int id){
		Optional<User> opUser = repo.findById(id);
		if(!opUser.isPresent()) {
			return null;
		}
		return opUser.get();
	}
	
}
