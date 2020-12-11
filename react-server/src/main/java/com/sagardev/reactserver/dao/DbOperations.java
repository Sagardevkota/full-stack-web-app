package com.sagardev.reactserver.dao;

import com.mongodb.reactivestreams.client.MongoClient;
import com.sagardev.reactserver.model.User;
import com.sagardev.reactserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.management.Query;

@Component
public class DbOperations implements MongoDAO {

    @Autowired
    UserRepository userRepository;

    @Override
    public Flux<User> authenticateUser(User user) {
       return userRepository.findByUserNameAndPassword(user.getUserName(),user.getPassword());

    }
}
