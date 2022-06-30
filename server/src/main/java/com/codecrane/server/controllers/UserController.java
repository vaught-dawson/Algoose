package com.codecrane.server.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("/add/user")
	public User saveUser(@RequestBody User user) {
		user.setId(serv.getSeqNum(User.SEQUENCE_NAME));
		return repo.save(user);
	}
	
	@GetMapping("/get/user/{id}")
	public Optional<User> getOne(@PathVariable int id){
		return repo.findById(id);
	}
	
}
