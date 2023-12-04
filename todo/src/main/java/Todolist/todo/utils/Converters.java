package Todolist.todo.utils;

import Todolist.todo.dto.TodoDto;
import Todolist.todo.modal.Todo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Converters
{
    @Autowired
    private ModelMapper modelMapper;

    public TodoDto entityToDto(Todo todo){
        return modelMapper.map(todo,TodoDto.class);

    }

    public Todo dtoToEntity(TodoDto todo){
        return modelMapper.map(todo,Todo.class);

    }
}
