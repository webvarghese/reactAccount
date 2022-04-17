import { Routes, Route } from "react-router-dom";
import Table from "./Table";
import {useState,useEffect} from 'react'

import Tab from "./Tab";

function RightPanel() {
  const [list, setList] = useState([])
  const [searchList, setSearchList] =useState([])
  const fillList = () =>{
    const tempList = []
    for (let i = 0; i < 20; i++) {
    const obj = {
      date:"date" + i,
      from:"from"+i,
      to:"to"+i,
      purpose:"purpose"+i,
      amount:"amount"+i,
      verified:"verified"+i,
    }
   tempList.push(obj) 
  }
  setList(tempList)
}
useEffect(()=>{
  fillList()
},[])
  const filterList =(str)=>{
    if(str.length > 0){
      setSearchList(list.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(str.toLowerCase()) !== -1))
    } else {
      setSearchList(list)
    }
    
  }
  return (
    <div className="right-panel">
      <Tab onSearch ={filterList}/>
      <Routes>
        <Route path="/some" element={<Table inputList ={searchList} />} />
        <Route path="/somemore" element={<Table inputList={searchList} />} />
      </Routes>
    </div>
  );
}

export default RightPanel;
