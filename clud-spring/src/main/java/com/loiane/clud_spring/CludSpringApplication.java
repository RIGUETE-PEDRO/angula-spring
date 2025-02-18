package com.loiane.clud_spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.loiane.clud_spring.model.Course;
import com.loiane.clud_spring.repository.CourseRepository;

@SpringBootApplication
public class CludSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CludSpringApplication.class, args);
	}
	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository){
		return args ->{
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("angular com spring");
			c.setCategory("front-end");

			courseRepository.save(c);
		};
	}
}
