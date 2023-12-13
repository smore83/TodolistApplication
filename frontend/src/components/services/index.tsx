import axios from "axios"

export const Fetch_All_Data=async () => {
    const res = await  axios.get('http://localhost:8080/todos');
    return res.data;
}

export const POST_TODO=async (data:{name:string,description:string}) => {
    const res = await  axios.post('http://localhost:8080/todos',data);
    return res.data;
}

export const DELETE_TODO=async (id:number) => {
    const res = await  axios.delete(`http://localhost:8080/todos/${id}`);
    return res.data;
}

export const UPDATE_TODO=async (data:{id:number,name:string,description:string}) => {
    const res = await  axios.put(`http://localhost:8080/todos/${data.id}`,data);
    return res.data;
}
