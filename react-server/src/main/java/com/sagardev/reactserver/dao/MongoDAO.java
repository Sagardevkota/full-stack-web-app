package com.sagardev.reactserver.dao;

import com.sagardev.reactserver.model.User;
import reactor.core.publisher.Flux;


public interface MongoDAO {

    public Flux<User> authenticateUser(User user);


}
