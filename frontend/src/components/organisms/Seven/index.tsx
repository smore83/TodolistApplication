import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import TextField from "../../atoms/Textfield";
import Button from "../../atoms/button";
import { DELETE_TODO, Fetch_All_Data, POST_TODO, UPDATE_TODO } from "../../services";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
const TodoContainer = styled(Box)({
  height: "auto",
  width: "100%",
  // margin: "100px",
  background: "linear-gradient(orange,white,green)",
});
const AddContainer = styled(Box)({
  display: "flex",
  margin: "15px",
  height: "auto",
  width: "100%",
  justifyContent: "space-evenly",
});

const MainContainer = styled(Box)({
  marginTop: "20px",
  height: "auto",
  width: "100%",
  display: "flex",
  gap: "20px",
});
const TextFiledStyle={
  width: "200px",   
}
interface TodoProps {
  id: number;
  name: string;
  description: string;
}
const TodoApplication = () => {
  const [todo, setTodo] = useState({ name: "", description: "" });
  const [data, setData] = useState<TodoProps[]>([]);
  const [editeddata, setEditedData] = useState({id:0, name: "", description: "" });
  const [open,setOpen]=useState(false);
  useEffect(() => {
    Fetch_All_Data()
      .then((data) => {;
        setData(data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  const handleAddTodo=()=>{
    const postData={
       name:todo.name,
       description:todo.description
    }
       POST_TODO(postData).then((data)=>{
        alert("Success to post");
        window.location.reload();
        setTodo({...todo,name:"",description:""})
       }).catch((err)=>{
           console.log('error')
       })
  }

  const handleDelete=(id:number)=>{
    DELETE_TODO(id).then((res)=>{
          alert('delete Success');
          window.location.reload();
    }).catch((error)=>{
               console.log(error);
    })
  }

  const handleEdit=(editdata:TodoProps)=>{
        setOpen(true);
        setEditedData(editdata);
        console.log(editeddata);

  } 
  const handleSaveEditData=()=>{       
        UPDATE_TODO(editeddata).then((res)=>{
          alert("Sucess to Edit");
          window.location.reload();
          
        }).catch((er)=>{
           console.log(er);
        })
        setOpen(false);
        setEditedData({...editeddata,id:0,name:'',description:''})
  }
  return (
    <TodoContainer>
      <Typography children={"Todo Application"} variant="h4" />

      {
        open && editeddata?(
          <AddContainer>
          <TextField
            value={editeddata.name}
            placeholder="Enter name"
            style={TextFiledStyle}
            size="small"
            onChange={(e) => setEditedData({...editeddata,name:e.target.value} )}
          />
          <TextField
            value={editeddata.description}
            placeholder="Enter your task"
            size="small"
            sx={{width:'400px' }}
            onChange={(e) => setEditedData({...editeddata,description:e.target.value})}
          />
          <Button
            variant="contained"
            sx={{ background: "pink" }}
            children={"Update Todo"}
            startIcon={<AddIcon/>}
            onClick={handleSaveEditData}
          />
        </AddContainer>
        ):(
          <AddContainer>
          <TextField
            value={todo.name}
            placeholder="Enter name"
            size="small"
            style={TextFiledStyle}
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          />
          <TextField
            value={todo.description}
            placeholder="Enter your task"
            sx={{width:'400px' }}
            size="small"
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
          <Button
            variant="contained"
            sx={{ background: "pink" }}
            children={"Add a Todo"}
            startIcon={<AddIcon/>}
            onClick={handleAddTodo}
          />
        </AddContainer>
        )
      }
      <MainContainer>
        <Table>
          <TableHead>
            <TableCell>{"Id"}</TableCell>
            <TableCell>{"name"}</TableCell>
            <TableCell>{"description"}</TableCell>
            <TableCell>{'Edit'}</TableCell>
            <TableCell>{'Delete'}</TableCell>
          </TableHead>
          {data.map((tododata) => (
            <TableBody key={tododata.id}>
              <TableCell>{tododata.id}</TableCell>
              <TableCell>{tododata.name}</TableCell>
              <TableCell>{tododata.description}</TableCell>
              <TableCell onClick={()=>handleEdit(tododata)}>{<EditIcon/>}</TableCell>
              <TableCell onClick={()=>handleDelete(tododata.id)}>{<DeleteIcon/>}</TableCell>
            </TableBody>
          ))}
        </Table>
      </MainContainer>
    </TodoContainer>
  );
};

export default TodoApplication;
