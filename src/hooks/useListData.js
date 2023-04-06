import React, { useState, useEffect, useReducer } from 'react';
import {
  createToDo,
  getAllToDos,
  toggleToDo,
} from '../api/api';


export default function useListData() {
  // const exampleData = [
  //   "Whatever",
  //   "For",
  //   "A",
  //   "Few",
  //   "Things",
  // ]

  // const [listData, setListData] = useState(exampleData)
  const [listData, setListData] = useState([])

  const formatListItem = (item) => {
    const result = {
      id: item.id,
      ...item.attributes,
    };
    return result;
  }

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await getAllToDos();

      // We are assuming the request is successful. Realistically we would check for response status and proceed accordingly. 
      const allToDos = responseData.data.map(formatListItem)

      console.log("UseEffect: AllToDos: ", allToDos);
      setListData(allToDos);
    };
    fetchData();
  }, [])

  // useEffect(() => {
  //   console.log("listData is now ", listData);
  // }, [listData]);

  const clearList = () => {
    setListData([])
  }



  const addItem = (item) => {
    const submitData = async () => {
      const responseData = await createToDo(item);

      const formattedData = formatListItem(responseData.data);

      console.log("formattedData: ", formattedData);
      setListData([...listData, formattedData])
    }
    submitData();

  }

  const toggleCheck = (toDoObject) => {
    const submitData = async () => {
      const responseData = await toggleToDo(toDoObject);

      const formattedData = formatListItem(responseData.data);

      console.log("toggleCheck:formattedData: ", formattedData);
      // setListData([...listData, formattedData])
      setListData(
        listData.map((item) => {
          if (item.id === formattedData.id) {
            return formattedData;
          }
          return item;
        })
      )
    }
    submitData();
  }

  return {
    addItem,
    clearList,
    listData,
    toggleCheck,
  };
}