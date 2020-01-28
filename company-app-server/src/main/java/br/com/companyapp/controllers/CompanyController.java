package br.com.companyapp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.*;

import br.com.companyapp.repositories.CompanyRepository;

import br.com.companyapp.models.Company;

@CrossOrigin
@RestController
@RequestMapping("/companies")

public class CompanyController {

	private CompanyRepository repository;

	// Constructor {}
	public CompanyController(CompanyRepository repository)
	{
		this.repository = repository;
	}

	@GetMapping // Show all
	public List<Company> findAll()
	{
		return this.repository.findAll();
	}

	@GetMapping("/{id}")
	public Company find(@PathVariable("id") Long id)
	{
		Optional<Company> optional = this.repository.findById(id);

		if (optional.isPresent()) {
			return optional.get();
		} else {
			throw new RuntimeException("Company with id " + id + " not found.");
		}
	}

	@PostMapping
	public Company save(@RequestBody Company company)
	{
		if (company.getRegisteredName() == null && company.getStateSubscription() == null
				&& company.getTaxPayerRegistration() == null && company.getTradingName() == null) {
			throw new RuntimeException("Invalid Data");
		}

		return this.repository.save(company);
	}

	@DeleteMapping("/{id}")
	public Company delete(@PathVariable("id") Long id)
	{
		Optional<Company> optional = this.repository.findById(id);
		
		if(optional.isPresent()) {
			Company company = optional.get();
			this.repository.deleteById(id);
			
			return company;
		} else {
			throw new RuntimeException("Company with id " + id + " not found.");
		}
	}

}
