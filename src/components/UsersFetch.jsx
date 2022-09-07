import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";

const urlApi = 'https://randomuser.me/api/?results=3';
const initData = {
  results: [],
  info: {}
}


const UsersFetch = () => {

  const [dataUsers, setDataUsers] = useState(initData)

  const getUsers = () => {
    fetch(urlApi).then( resp => resp.json().then( results => setDataUsers(results)))
  }

  useEffect( () => {
    getUsers()
  },[])

  return (
    <>
      <h3>Users Fetch</h3>
      <ListUsers dataUsers={dataUsers} />
    </>
  );
};

export default UsersFetch;