package com.codecrane.server.models;


import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
//needs args
@Document(collection = "Algo")
public class Algo {
	
	

	@Transient
	public static final String SEQUENCE_NAME="algo_sequence";
	
	
	@Id
	private int id;
	
	private String title;
	
	private String description;
	
	private ArrayList<String> examples;
	
	private String solution;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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

	public String getSolution() {
		return solution;
	}

	public void setSolution(String solution) {
		this.solution = solution;
	}

	
}

