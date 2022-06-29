package com.codecrane.server.repos;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.codecrane.server.models.Algo;

public interface AlgoRepo extends MongoRepository<Algo, Integer>{

}
