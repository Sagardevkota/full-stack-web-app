package com.sagardev.reactserver.controller;

import com.sagardev.reactserver.exception.ValidationException;
import com.sagardev.reactserver.model.JsonResponse;
import com.sagardev.reactserver.model.User;
import com.sagardev.reactserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;
import java.sql.Time;
import java.time.Duration;
import java.util.concurrent.TimeUnit;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    private final UserService userService;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserController(UserService userService, BCryptPasswordEncoder bCryptPasswordEncoder){
        this.userService = userService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping("users/{userId}")
    Mono<User> getUserById(@PathVariable int userId){
        if (userId<0)
            throw new ValidationException("userId cant be negative");
        return userService.getUserById(userId);
    }

    @GetMapping("users")
    Flux<User> getUserById(){
        return userService.getUsers();
    }


    @PostMapping("/login")
    public Mono<ResponseEntity<JsonResponse>> login(@RequestBody User user){

        return userService.validateUser(user)
                .collectList()
                .flatMap(users -> {
                    System.out.println(users);
                            if (!users.isEmpty())
                               return Mono.just(ResponseEntity.ok()
                                        .body(new JsonResponse("200 Ok", "Login successfull")));
                            else
                              return   Mono.just(ResponseEntity.ok()
                                        .body(new JsonResponse("400 ", "Login unsuccessful")));

                        }
                   );

    }


    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public JsonResponse register(@RequestBody User user)
    {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            userService.save(user);
            return new JsonResponse("200 Ok","Registered successfully");
    }



}
