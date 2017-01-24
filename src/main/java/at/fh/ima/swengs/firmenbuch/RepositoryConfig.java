package at.fh.ima.swengs.firmenbuch;

/**
 * Created by Timo on 23.01.2017.
 * http://stackoverflow.com/questions/24839760/spring-boot-responsebody-doesnt-serialize-entity-id
 */
import at.fh.ima.swengs.firmenbuch.model.Company;
import at.fh.ima.swengs.firmenbuch.model.Location;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {

    config.exposeIdsFor(Location.class);
    config.exposeIdsFor(Company.class);


  }
}
