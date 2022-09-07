import { dataUsers } from "../helpers/users";
import ListUsers from "./ListUsers";

const UsersLocal = () => {

  return (
    <>
      <h3>Users Local</h3>
      <ListUsers dataUsers={dataUsers} />
    </>
  );
};

export default UsersLocal;