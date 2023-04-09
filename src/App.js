import { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import AddItemControl from './components/AddItemControl/AddItemControl';
import ToDoList from './components/ToDoList/ToDoList';
import useListData from './hooks/useListData'
import ToDoTitle from './components/ToDoTitle/ToDoTitle';

// const exampleData = [
//   "Whatever",
//   "For",
//   "A",
//   "Few",
//   "Things",
// ]

function App() {

  const {
    addItem,
    clearList,
    listData,
    toggleCheck,
    deleteItem,
  } = useListData();
  // const [listData, setListData] = useState(useListData())

  // useEffect(() => {
  //   addItem("test")
  // }, [])

  return (
    <div className='App'>
      <ToDoTitle />
      <AddItemControl
        addItem={addItem}
      />
      <ToDoList
        listData={listData}
        // setListData={setListData}
        clearList={clearList}
        toggleCheck={toggleCheck}
        deleteItem={deleteItem}
      />
    </div>
  );

}

export default App;
