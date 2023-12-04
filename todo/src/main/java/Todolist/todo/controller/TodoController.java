package Todolist.todo.controller;

import Todolist.todo.dto.TodoDto;
import Todolist.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin
public class TodoController {
      @Autowired
    private TodoService todoService;

      @GetMapping
    public List<TodoDto> getAllTodos() {
        return todoService.getAllTodos();
    }
//need to know when we can use qualifier
    //QueryParam

    @PutMapping("/{id}")
    public String updateTodos(@PathVariable Long id,@RequestBody TodoDto todoDto) {
        return todoService.updateTodos(id,todoDto);
    }



    @PostMapping
    public String saveTodos(@RequestBody TodoDto todoDto) {
        return todoService.saveTodos(todoDto);
    }


    @DeleteMapping("/{id}")
    public String deleteTodos(@PathVariable Long id) {
        return todoService.deleteTodos(id);
    }
}
