const Card = ( { usuario, changeActive } ) => {

  const {id, first, last, photo, active, gender } = usuario

  const cambiarActive = (id) => {
    changeActive(id)
  };

  return (
    <div className="card">
      <img
        src={photo}
        className={ active ? 'card-photo' : 'card-photo suspendido' }
        onClick={ () => cambiarActive(id) }
      />
      <div className="card-user">
        { (active)
          ? <>
              <p className="card-first-name">{first}</p>
              <p className="card-last-name">{last}</p>
            </>
          : <p className="card-first-name">{
            (gender === 'male')
            ? 'Suspendido'
            : 'Suspendida'
          }</p>
        }
      </div>
    </div>
  );
};

export default Card;