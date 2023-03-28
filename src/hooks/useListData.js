import React, { useState } from 'react';

export default function useListData() {
  const exampleData = [
    "Whatever",
    "For",
    "A",
    "Few",
    "Things",
  ]

  const [listData, setListData] = useState(exampleData)

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