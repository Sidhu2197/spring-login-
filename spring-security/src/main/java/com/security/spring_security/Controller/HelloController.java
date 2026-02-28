package com.security.spring_security.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("hello")
    public String greet() {                          // ✅ removed unused HttpServletRequest
        return "Hello World";
    }

    @GetMapping("about")
    public String about() {                          // ✅ removed unused HttpServletRequest
        return "hi this is regarding about information :-)";  // ✅ removed getSession()
    }
}