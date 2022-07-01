package com.codecrane.server.models;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "algos")
public class Algo {

	@Transient
	public static final String SEQUENCE_NAME = "algo_sequence";

	@Id
	private int id;

	private String title;

	private String description;
	
	private String solution;
	
	private String starterCode;

	private ArrayList<String> examples;

	private ArrayList<Object> testCases;


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

	public ArrayList<Object> getTestCases() {
		return testCases;
	}

	public void setTestCases(ArrayList<Object> testCases) {
		this.testCases = testCases;
	}

	public String getStarterCode() {
		return starterCode;
	}

	public void setStarterCode(String starterCode) {
		this.starterCode = starterCode;
	}

}
