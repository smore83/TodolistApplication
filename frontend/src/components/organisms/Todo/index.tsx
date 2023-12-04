import styled from "@emotion/styled";
import { Box, Table, TableBody, TableCell, TableHead } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import { Title } from "../../Constants";
import TextField from "../../atoms/Textfield";
import Button from "../../atoms/button";
import { DELETE_TODO, Fetch_All_Data, POST_TODO, UPDATE_TODO } from "../../services";
import ModalComponent from "./ModalComponent";
const Container = styled(Box)({
  background: "pink",
  width: "60%",
  height: "500px",
  margin: "200px",
});
const AddContainer = styled(Box)({
  width: "100%",
  background: "yellow",
  display: "flex",
  justifyContent: "space-evenly",
});
const DataContainer = styled(Box)({
  marginTop: "10px",
  width: "100%",
  background: "green",
});
interface TodoProps {
    id:number,
  name: string;
  description: string;
  date:string
}

const RenderContainer={

}

const TODOS = () => {
  const [todos, setTodos] = useState({ name: "", description: "" });
  const [data,setData]=useState<TodoProps[]>([]);
  const [editedData,setEditedData]=useState<TodoProps >();
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    Fetch_All_Data().then((tododata)=>{
        console.log("Success to fetch");
        console.log(tododata);
        setData(tododata);

    })
  },[])
  const handleAddTodo = (event: any) => {
    console.log("Add data");

    const data = {
      name: todos.name,
      description: todos.description,
      date: new Date().toString(),
    };
    POST_TODO(data).then(() => {
      console.log("Success");

    });
    window.location.reload();
  };

  const handleOpen=()=>setOpen(true);
const handleClose=()=>setOpen(false);

const handleEdit=(todo:TodoProps)=>{
    
   setEditedData(todo);
   handleOpen();
   console.log(editedData);
  //  window.location.reload();
}
const handleDelete=(id:number)=>{
     DELETE_TODO(id).then((data)=>{
        console.log("Success to delete")
     })
     window.location.reload();
}

const saveProduct=(data:TodoProps)=>{
  console.log(data);
  UPDATE_TODO(data).then(() => {
    console.log("Success update");

  });
  window.location.reload();
}


  return (
    <Container>
      <Typography variant="h4" children={Title} />
      
    { editedData ? (
             <AddContainer>
             <TextField
               type="small"
               placeholder="name"
               value={editedData.name}
               onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
             />
             <TextField
               placeholder="description"
               value={editedData.description}
               onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
             />
             <Button
               variant="contained"
               sx={{ background: "green" }}
               size="small"
               children={"update Todo"}
               onClick={() => {
                saveProduct(editedData);
              }}
             />
           </AddContainer>
      ) : (
        <AddContainer>
        <TextField
          type="small"
          placeholder="name"
          value={todos.name}
          onChange={(e) => setTodos({ ...todos, name: e.target.value })}
        />
        <TextField
          placeholder="description"
          value={todos.description}
          onChange={(e) => setTodos({ ...todos, description: e.target.value })}
        />
        <Button
          variant="contained"
          sx={{ background: "green" }}
          size="small"
          children={"Add Todo"}
          onClick={handleAddTodo}
        />
      </AddContainer>
      )
      }

      
      <DataContainer>
        <Table>
            <TableHead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Date</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
            </TableHead>
        {
        data.map((todo)=>(
            
             <TableBody  key={todo.id}>
                <TableCell>{todo.id}</TableCell>
                <TableCell>{todo.name}</TableCell>
                <TableCell>{todo.description}</TableCell>
                <TableCell>{todo.date}</TableCell>
                <TableCell onClick={()=>handleEdit(todo)}>{"Edit"}</TableCell>
                <TableCell onClick={()=>handleDelete(todo.id)}>{"Delete"}</TableCell>
             </TableBody>
           
        ))
        }
        </Table>
        </DataContainer>
    </Container>
  );
};

export default TODOS;
