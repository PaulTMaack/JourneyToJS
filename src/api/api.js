const API_URL = 'http://PaulJS-Server:1337/api';
const toDoRoute = `${API_URL}/to-dos`;

export async function getAllToDos() {

  const response = await fetch(toDoRoute);
  //  const response = await (await fetch(toDoRoute)).json;
  const jsonResponse = await response.json();
  return jsonResponse;
}

// TODO:remove code redundancy between this function and toggleToDo
export async function createToDo(newTask) {
  // Build a new ToDo Object (Task) for adding into the list. 
  const toDoData = {
    task: newTask,
  }

  // Specify the HTTP method, Headers and Body for fetch. 
  const fetchOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    // Stringify our new ToDo object for the request body. 
    body: JSON.stringify({ data: toDoData }),
  }

  const response = await fetch(toDoRoute, fetchOptions);
  const jsonResponse = await response.json();
  return jsonResponse;
}

export async function toggleToDo(toDoObject) {
  // get the ID for the object. 
  const requestRoute = `${toDoRoute}/${toDoObject.id}`

  const toDoData = {
    isChecked: !toDoObject.isChecked,
  }

  // Specify the HTTP method, Headers and Body for fetch. 
  const fetchOptions = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    // Stringify our new ToDo object for the request body. 
    body: JSON.stringify({ data: toDoData }),
  }

  const response = await fetch(requestRoute, fetchOptions);
  const jsonResponse = await response.json();
  return jsonResponse;
}