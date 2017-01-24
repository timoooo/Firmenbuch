package at.fh.ima.swengs.firmenbuch.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.ArrayList;
import java.util.List;

/**
 * http://docs.spring.io/spring-data/rest/docs/current/reference/html/
 */

@RepositoryRestResource()
public interface CompanyRepository  extends PagingAndSortingRepository<Company, Long> {

  ArrayList<Company> findAll();

  @Query(value = "SELECT c.name,c.foundation_date,l.name,l.land FROM company c INNER JOIN location l ON c.location_id=l.id",nativeQuery = true)
  ArrayList<Company> findAllCmp();


}
