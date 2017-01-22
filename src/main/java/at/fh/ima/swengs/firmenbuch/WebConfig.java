package at.fh.ima.swengs.firmenbuch;

/**
 * Created by Timo on 21.01.2017.
 */


  import org.springframework.context.annotation.Bean;
  import org.springframework.context.annotation.Configuration;
  import org.springframework.web.cors.CorsConfiguration;
  import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
  import org.springframework.web.filter.CorsFilter;

@Configuration
public class WebConfig {


  @Bean
  public CorsFilter corsFilter() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true);
    config.addAllowedOrigin("*");
    config.addAllowedHeader("*");
    config.addAllowedMethod("*");
    //config.addAllowedMethod("GET");
    //config.addAllowedMethod("POST");
    //config.addAllowedMethod("PUT");
    //config.addAllowedMethod("DELETE");
    source.registerCorsConfiguration("/**", config);
    return new CorsFilter(source);
  }
}


