import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";

const GridUsers = ( {limite} ) => {

  const urlApi = `https://randomuser.me/api/?results=${limite}`;
  const initData = {
  results: [],
  info: {}
}
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
    <div className="grid">
      <ListUsers dataUsers={dataUsers} />
    </div>
  );
};

export default GridUsers;

