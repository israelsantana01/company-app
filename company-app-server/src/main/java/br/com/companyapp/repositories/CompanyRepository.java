package br.com.companyapp.repositories;

import br.com.companyapp.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
	
}
