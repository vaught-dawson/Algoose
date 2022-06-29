package com.codecrane.server.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codecrane.server.models.Algo;
import com.codecrane.server.repos.AlgoRepo;
import com.codecrane.server.service.SeqGeneratorService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AlgoController {
	@Autowired
	private AlgoRepo repo;
	@Autowired
	private SeqGeneratorService serv;
	
	@PostMapping("/add/algo")
	public Algo saveAlgo(@RequestBody Algo algo) {
		algo.setId(serv.getSeqNum(Algo.SEQUENCE_NAME));
		return repo.save(algo);
		 
	}
	@GetMapping("/getall/algo")
	public List<Algo> getALL(){
		return repo.findAll();
	}
	
	@GetMapping("/get/algo/{id}")
	public Optional<Algo> getOne(@PathVariable int id) {
		return repo.findById(id);
		
	}
	
}
