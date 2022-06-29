package com.codecrane.server.models;


import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Algo")
public class Algo {
	
	

	

	

	@Transient
	public static final String SEQUENCE_NAME="algo_sequence";
	
	
	@Id
	private int id;
	
	private String name;
	
	private String description;
	
	private ArrayList<String> examples;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ArrayList<String> getExamples() {
		return examples;
	}

	public void setExamples(ArrayList<String> examples) {
		this.examples = examples;
	}
}

