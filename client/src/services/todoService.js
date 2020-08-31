import axios from 'axios';

export async function getTodos() {
  const { data } = await axios.get('api/todo');
  return await data;
}

export async function addTodo(item) {
  const { data } = await axios.post('api/todo', item);
  return await data;
}

export async function updateTodo(item) {
  console.log('---->>>updateTodo', item);
  const { data } = await axios.put(`api/todo/${item.id}`, item);
  return await data;
}

export async function deleteTodo(id) {
  const { data } = await axios.delete(`api/todo/${id}`);
  return await data;
}
