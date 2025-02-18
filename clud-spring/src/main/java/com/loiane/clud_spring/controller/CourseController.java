package com.loiane.clud_spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.loiane.clud_spring.model.Course;
import com.loiane.clud_spring.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor

@Component
public class CourseController {
    
    private final CourseRepository courseRepository;


    @GetMapping
   //@RequestMapping(method = RequestMethod.GET)
    
    public @ResponseBody List<Course> list(){
        return courseRepository.findAll();
    }
}
