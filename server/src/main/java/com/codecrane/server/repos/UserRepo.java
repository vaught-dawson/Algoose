package com.codecrane.server.repos;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.codecrane.server.models.User;

public interface UserRepo extends MongoRepository<User, Integer>{

}
