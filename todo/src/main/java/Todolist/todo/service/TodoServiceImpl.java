package Todolist.todo.service;

import Todolist.todo.dto.TodoDto;
import Todolist.todo.exception.TodoNotFoundException;
import Todolist.todo.modal.Todo;
import Todolist.todo.repo.TodoRepository;
import Todolist.todo.utils.Converters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static Todolist.todo.utils.Constants.*;

@Service
public class TodoServiceImpl implements TodoService {
    @Autowired
    private TodoRepository todoRepository;
    @Autowired
    private Converters converters;


    @Override
    public List<TodoDto> getAllTodos() {
        List<Todo> todoList=todoRepository.findAll();
        return todoList.stream().map(todo -> converters.entityToDto(todo)).collect(Collectors.toList());
    }

    @Override
    public String updateTodos(Long id, TodoDto todoDto) {
        Optional<Todo> todoOptional=todoRepository.findById(id);
        if(todoOptional.isEmpty()){
            throw  new TodoNotFoundException(NOT_FOUND);
        }
        todoOptional.get().setDate(todoDto.getDate());
        todoOptional.get().setName(todoDto.getName());
        todoOptional.get().setDescription(todoDto.getDescription());
        todoRepository.save(todoOptional.get());
        return UPDATE_SUCESS;
    }

    @Override
    public String saveTodos(TodoDto todoDto) {
        todoRepository.save(converters.dtoToEntity(todoDto));
         return SAVE_SUCESS;
    }

    @Override
    public String deleteTodos(Long id) {
        Optional<Todo> todoOptional=todoRepository.findById(id);
        if(todoOptional.isEmpty()){
            throw  new TodoNotFoundException(NOT_FOUND);
        }
        todoRepository.deleteById(id);
        return DELETE_SUCESS;
    }
}
