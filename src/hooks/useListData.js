import React, { useState, useEffect, useReducer } from 'react';
import { getAllToDos } from '../api/api';


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

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await getAllToDos();


      // We are assuming the request is successful. Realistically we would check for response status and proceed accordingly. 
      const allToDos = responseData.data.map(item => {
        const result = {
          id: item.id,
          ...item.attributes,
        };
        return result;
      })

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
    setListData([...listData, item])
  }

  return {
    addItem,
    clearList,
    listData,
  };
}