package com.sagardev.reactserver.controller;




import com.sagardev.reactserver.exception.NotFoundException;
import com.sagardev.reactserver.exception.ValidationException;
import com.sagardev.reactserver.model.JsonResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.NoSuchElementException;


@RestControllerAdvice
public class ExceptionsController {


    @ExceptionHandler(value = ValidationException.class)
    public ResponseEntity<?> validateRequest(ValidationException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new JsonResponse("400 BAD REQUEST",exception.getMessage()));
    }


    @ExceptionHandler(value = NoSuchElementException.class)
    public ResponseEntity<?> handleException(NoSuchElementException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new JsonResponse("404","Not found"));
    }

    @ExceptionHandler(value = MethodArgumentTypeMismatchException.class)
    public ResponseEntity<?> handleException(MethodArgumentTypeMismatchException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new JsonResponse("400 BAD REQUEST",exception.getMessage()));
    }

    @ExceptionHandler(value = NotFoundException.class)
    public ResponseEntity<?> handleException(NotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new JsonResponse("404 NOT FOUND",exception.getMessage()));
    }


    //global exception handler
    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<?> handleException(Exception exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new JsonResponse(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR),exception.getMessage()));

    }
}
