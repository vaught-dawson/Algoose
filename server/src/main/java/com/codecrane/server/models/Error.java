package com.codecrane.server.models;

import java.util.ArrayList;

public class Error {
	
	private String name = "error";
	private ArrayList<String> errors;
	
	
	
	public ArrayList<String> getErrors() {
		return errors;
	}

	public void setErrors(ArrayList<String> errors) {
		this.errors = errors;
	}
}
