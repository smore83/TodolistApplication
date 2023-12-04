package Todolist.todo.service;

import Todolist.todo.dto.TodoDto;
import Todolist.todo.modal.Todo;

import java.util.List;

public interface TodoService {
    public List<TodoDto> getAllTodos();
    //delete
    //update
    public String updateTodos(Long id, TodoDto todoDto);
    //post
    public String saveTodos(TodoDto todoDto);
    public String deleteTodos(Long id);
}
