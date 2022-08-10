import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./Components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  const [data, setData] = useState(null);  
  const getData = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setData(data);
  };  
  useEffect(() => {
    getData();
  }, []);  
  //console.log(data)
  return <div><UserList list={data}/></div>;
}