import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";

const urlApi = 'https://randomuser.me/api/?results=3';
const initData = {
  results: [],
  info: {}
}

const UsersAsyncAwait = () => {

  const [dataUsers, setDataUsers] = useState(initData)

  const getUsers = async () => {
    const data = await fetch(urlApi);
    const results = await data.json()
    setDataUsers( results )
  };

  useEffect( () => {
    getUsers()
  },[])

  return (
    <>
      <h3>Users Async-Await</h3>
      <ListUsers dataUsers={dataUsers} />
    </>
  );
};

export default UsersAsyncAwait;