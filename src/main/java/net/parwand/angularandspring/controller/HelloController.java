package net.parwand.angularandspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
public class HelloController {

    @GetMapping("api/hello")
    public @ResponseBody String hello() {
        return "Hello, the time at the server is now: " + new Date();
    }
}
