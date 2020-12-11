package com.sagardev.reactserver.repository;


import com.sagardev.reactserver.model.User;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;




@Repository
public interface UserRepository extends ReactiveCrudRepository<User,Integer> {

    @Query("{userName : ?0, password : ?1}")
    Flux<User> findByUserNameAndPassword(String userName, String password);
}
