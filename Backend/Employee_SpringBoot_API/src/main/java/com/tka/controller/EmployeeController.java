package com.tka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tka.entity.Employee;
import com.tka.model.UserLogin;
import com.tka.service.EmployeeService;

@RestController
public class EmployeeController {
	@Autowired
	private EmployeeService service;

	
	@PostMapping("/login")
	public Employee login(@RequestBody UserLogin userLogin) {
		return service.login(userLogin.getEmail(), userLogin.getPassword());
	}

	@PostMapping("/register")
	public boolean register(@RequestBody Employee employee) {
		return service.saveEmployee(employee);

	}

	@GetMapping("/findByEmail")
	public Employee findByEmail(@RequestParam String email) {
		return service.findByEmail(email);
	}

	@GetMapping("/getAll")
	public List<Employee> getAll() {
		return service.getAll();
	}

	@GetMapping("/getById/{id}")
	public Employee getById(@PathVariable int id) {
		return service.getById(id);
	}

	@PutMapping("/update")
	public boolean update(@RequestBody Employee employee) {
		System.out.println(employee);
		return service.update(employee);

	}

	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable int id) {
		return service.delete(id);

	}

}
