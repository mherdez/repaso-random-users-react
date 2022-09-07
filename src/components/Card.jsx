const Card = ( { usuario} ) => {

  const { name, picture } = usuario;

  return (
    <div className="card">
      <img src={picture.medium} className="card-photo" />
      <div className="card-user">
        <p className="card-first-name">{name.first}</p>
        <p className="card-last-name">{name.last}</p>
      </div>
    </div>
  );
};

export default Card;