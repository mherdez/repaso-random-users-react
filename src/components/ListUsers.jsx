import Card from "./Card";

const ListUsers = ( {dataUsers} ) => {

  return (
    <>
      { dataUsers.results.map( usuario => (
        <Card key={usuario.login.uuid} usuario={usuario} />
      ))}
    </>
  );
};

export default ListUsers;