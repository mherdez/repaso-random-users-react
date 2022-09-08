import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";
import {users} from '../helpers/users';

const GridUsers = ( {limite} ) => {

  const urlApi = `https://randomuser.me/api/?results=${limite}`;

  const [dataUsers, setDataUsers] = useState([])

  const getUsers = async () => {

    const data = await fetch(urlApi);
    const {results} = await data.json()

    // const {results} = users;

    const newUsers = results.map( user => {
      return {
        id: user.login.uuid,
        first: user.name.first,
        last: user.name.last,
        gender: user.gender,
        photo: user.picture.medium,
        active: true,
      }
    })
    setDataUsers( newUsers )
  };

  useEffect( () => {
    getUsers()
  },[])

  const changeActive = (id) => {
    const newUser = dataUsers.filter( usuario => usuario.id === id)
    newUser[0].active = !newUser[0].active
    setDataUsers( [...dataUsers] )
  };

  return (
    <div className="grid">
      <ListUsers dataUsers={dataUsers} changeActive={changeActive} />
    </div>
  );
};

export default GridUsers;





const listaDeUsuarios = [
  {
    name: {
      first: 'Jonh',
      last:  'Cu'
    },
    picture: {
      medium: 'https//photo....'
    },
    activo: true,
  },
  {
    name: {
      first: 'Jonh',
      last:  'Cu'
    },
    picture: {
      medium: 'https//photo....'
    },
    activo: true,
  },
  {
    name: {
      first: 'Jonh',
      last:  'Cu'
    },
    picture: {
      medium: 'https//photo....'
    },
    activo: true,
  },
]