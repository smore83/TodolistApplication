package Todolist.todo.dto;

import lombok.Data;

@Data
public class TodoDto {
    private int id;
    private String name;
    private String description;
    private String date;
}
