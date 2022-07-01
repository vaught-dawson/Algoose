package com.codecrane.server.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.codecrane.server.models.User;

public interface UserRepo extends MongoRepository<User, Integer>{
	List<User> findAll();
	Optional<User> findByEmail(String email);
}
