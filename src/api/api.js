const API_URL = 'http://PaulJS-Server:1337/api';

export async function getAllToDos() {
  const requestRoute = `${API_URL}/to-dos`;
  const response = await fetch(requestRoute);
  //  const response = await (await fetch(requestRoute)).json;
  const jason = await response.json();
  return jason;
}