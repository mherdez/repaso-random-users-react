import Card from "./Card";

const ListUsers = ( { dataUsers, changeActive } ) => {

  return (
    <>
      { dataUsers.map( usuario => (
        <Card key={usuario.id} usuario={usuario} changeActive={changeActive} />
      ))}
    </>
  );
};

export default ListUsers;