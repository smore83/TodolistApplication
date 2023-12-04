package Todolist.todo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({TodoNotFoundException.class})
    public ResponseEntity<ErrorResponse> handleException(Exception e){
        ErrorResponse errorResponse= ErrorResponse.builder().status(HttpStatus.NOT_FOUND.value()).title(HttpStatus.NOT_FOUND.getReasonPhrase()).message(e.getMessage()).build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }
}
