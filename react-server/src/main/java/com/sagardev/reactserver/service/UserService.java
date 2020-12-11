package com.sagardev.reactserver.service;


import com.sagardev.reactserver.dao.DbOperations;
import com.sagardev.reactserver.exception.NotFoundException;
import com.sagardev.reactserver.model.User;
import com.sagardev.reactserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@Service
public class UserService {

    private final UserRepository userRepository;

    private final DbOperations dbOperations;

    @Autowired
    public UserService(UserRepository userRepository, DbOperations dbOperations){
        this.userRepository = userRepository;
        this.dbOperations = dbOperations;
    }

    public Mono<User> getUserById(int userId) {
        return userRepository.findById(userId).switchIfEmpty(Mono.error(new NotFoundException("User Not Found")));
    }

    public Flux<User> getUsers() {
        return userRepository.findAll().switchIfEmpty(Mono.error(new NotFoundException("Users Not found")));
    }

    public void save(User user) {
        userRepository.save(user);
    }

    
    public Flux<User> validateUser(User user) {

     return dbOperations.authenticateUser(user);

    }
}
