import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";

const urlApi = 'https://randomuser.me/api/?results=3';
const initData = {
  results: [],
  info: {}
}
const getUsers = new Promise( (resolve, reject) => {
  fetch( urlApi ).then( data => {
    data.json().then( resultado => {
      resolve( resultado )
    })
  })
})

const UsersPromise = () => {

  const [dataUsers, setDataUsers] = useState(initData)

  useEffect( () => {
    getUsers.then( usuarios => setDataUsers(usuarios) )
  },[])

  return (
    <>
      <h3>Users Promise</h3>
      <ListUsers dataUsers={dataUsers} />
    </>
  );
};

export default UsersPromise;