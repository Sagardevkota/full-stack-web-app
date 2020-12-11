package com.sagardev.reactserver.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "users")
@Data
public class User {

    @Id
    private int id;
    private String userName;
    @JsonIgnore
    private String password;
    private int age;
    private String address;
    private String role;
    private boolean active;

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }


}
