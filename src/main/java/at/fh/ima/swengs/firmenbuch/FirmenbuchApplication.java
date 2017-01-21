package at.fh.ima.swengs.firmenbuch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@SpringBootApplication
public class FirmenbuchApplication {

  public static void main(String[] args) {
    SpringApplication.run(FirmenbuchApplication.class, args);
  }



  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurerAdapter() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/").allowedOrigins("http://localhost:8080");
      }
    };
  }

}

	/*
      http://docs.spring.io/spring/docs/current/spring-framework-reference/html/cors.html
	 */






